import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser


def get_user_profile_img_path(instance, filename):
    ext = filename.split('.')[1]
    return 'users/profile_img/{}.jpg'.format(uuid.uuid4().hex, ext)


class User(AbstractUser):
    name = models.CharField(max_length=20)
    profile_img = models.ImageField(upload_to=get_user_profile_img_path, blank=True)
    friends = models.ManyToManyField("self", blank=True)
