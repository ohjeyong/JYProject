from django.db import models
from django.conf import settings
from django.utils import timezone


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    last_edit_at = models.DateTimeField(auto_now=True, help_text="Datetime that this object was last edited.")

    class Meta:
        abstract = True


class Tag(BaseModel):
    name = models.CharField(max_length=10, unique=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Todo(BaseModel):
    CATEGORY_CHOICE = (
        ('FOOD', '먹을 곳'),
        ('PLACE', '갈 곳'),
        ('TODO', '할 것')
    )
    content = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICE)
    like = models.PositiveIntegerField(default=0)
    is_completed = models.BooleanField(default=False)
    complete_at = models.DateTimeField(blank=True, null=True)
    complete_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="todo_complete_by_set", blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    tag = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.content[:20]

    def complete(self, user):
        if self.is_completed:
            return
        self.is_completed = True
        self.complete_at = timezone.now()
        self.complete_by = user
        self.save()

    def revert_complete(self):
        self.is_completed = False
        self.complete_at = None
        self.complete_by = None
        self.save()

    def add_like(self):
        self.like += 1
        self.save()


class TodoComment(BaseModel):
    todo = models.ForeignKey(Todo)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=100)

    def __str__(self):
        return self.content[:20]
