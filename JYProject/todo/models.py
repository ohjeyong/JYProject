from django.db import models
from django.conf import settings
from django.utils import timezone


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    last_edit_at = models.DateTimeField(auto_now_add=True, help_text="Datetime that this object was last edited.")

    class Meta:
        abstract = True


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
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def complete(self):
        if self.is_completed:
            return
        self.is_completed = True
        self.complete_at = timezone.now()
        self.save()
