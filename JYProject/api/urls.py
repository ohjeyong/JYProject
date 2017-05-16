from django.conf.urls import url, include
from rest_framework import routers

from . import todo_view

router = routers.DefaultRouter()
router.register(r'todo', todo_view.TodoViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
