from django.conf.urls import url, include
from rest_framework import routers

from . import todo_view, user_view

router = routers.DefaultRouter()
router.register(r'todo', todo_view.TodoViewSet)
router.register(r'user', user_view.UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^tag/$', todo_view.TagListView.as_view(), name='tag_list')
]
