from rest_framework import serializers

from JYProject.todo.models import Todo
from .user_serializer import UserSerializer


class TodoSerializer(serializers.ModelSerializer):

    author_data = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Todo
        fields = ('id', 'content', 'like', 'category', 'is_completed', 'complete_at', 'author', 'author_data',
                  'created_at', 'last_edit_at')

    def get_author_data(self, obj):
        return UserSerializer(obj.author, read_only=True).data
