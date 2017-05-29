from rest_framework import serializers

from JYProject.todo.models import Todo, Tag, TodoComment
from .user_serializer import UserSerializer


class TodoSerializer(serializers.ModelSerializer):

    author_data = serializers.SerializerMethodField(read_only=True)
    tag_list = serializers.SerializerMethodField(read_only=True)
    todo_comment_list = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Todo
        fields = ('id', 'content', 'like', 'category', 'is_completed', 'complete_at', 'author', 'author_data',
                  'created_at', 'last_edit_at', 'tag_list', 'todo_comment_list')

    def get_author_data(self, obj):
        return UserSerializer(obj.author, read_only=True).data

    def get_tag_list(self, obj):
        return TagSerializer(obj.tag.all(), many=True).data

    def get_todo_comment_list(self, obj):
        return TodoCommentSerializer(obj.todocomment_set.all(), many=True).data


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')


class TodoCommentSerializer(serializers.ModelSerializer):
    author_data = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = TodoComment
        fields = ('id', 'author', 'author_data', 'content', 'created_at')

    def get_author_data(self, obj):
        return UserSerializer(obj.author, read_only=True).data
