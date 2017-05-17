from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from JYProject.todo.models import Todo
from .todo_serializer import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(author=self.request.user)

    def create(self, request, *args, **kwargs):
        if request.data.get('author') != request.user.id:
            return Response(status=status.HTTP_403_FORBIDDEN)

        return super(TodoViewSet, self).create(request, *args, **kwargs)

    @detail_route(methods=['post'])
    def complete(self, request, pk=None):
        todo = self.get_object()
        todo.complete()
        return Response(self.get_serializer(todo).data)

    @detail_route(methods=['post'])
    def revert_complete(self, request, pk=None):
        todo = self.get_object()
        todo.revert_complete()
        return Response(self.get_serializer(todo).data)

    @detail_route(methods=['post'])
    def add_like(self, request, pk=None):
        todo = self.get_object()
        todo.add_like()
        return Response(self.get_serializer(todo).data)
