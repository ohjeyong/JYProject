from rest_framework import viewsets, generics
from rest_framework.decorators import detail_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from JYProject.todo.models import Todo, Tag
from .todo_serializer import TodoSerializer, TagSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(author=self.request.user)

    def create(self, request, *args, **kwargs):
        request.data['author'] = request.user.id
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


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [IsAuthenticated]
