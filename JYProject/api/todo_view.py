from rest_framework import status
from rest_framework import viewsets, generics
from rest_framework.decorators import detail_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from JYProject.todo.models import Todo, Tag, TodoComment
from .todo_serializer import TodoSerializer, TagSerializer, TodoCommentSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        friends_id = [friend.id for friend in self.request.user.friends.all()]
        friends_id.append(self.request.user.id)
        return self.queryset.filter(author_id__in=friends_id)

    def create(self, request, *args, **kwargs):
        obj = Todo.objects.create(
            category=request.data['category'],
            content=request.data['content'],
            author=request.user
        )
        tag_list = list()
        for each_tag in request.data['tags']:
            tag = Tag.objects.filter(name=each_tag)
            if tag:
                tag_list.append(tag.last())
            if not tag:
                tag = Tag.objects.create(
                    name=each_tag,
                    created_by=request.user
                )
                tag_list.append(tag)
        for each in tag_list:
            obj.tag.add(each)
        return Response(TodoSerializer(obj).data, status=status.HTTP_201_CREATED)

    @detail_route(methods=['post'])
    def complete(self, request, pk=None):
        todo = self.get_object()
        todo.complete(request.user)
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


class TodoCommentViewSet(viewsets.ModelViewSet):
    serializer_class = TodoCommentSerializer
    queryset = TodoComment.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        friends_id = [each.id for each in self.request.user.friends.all()]
        friends_id.append(self.request.user.id)
        return self.queryset.filter(author_id__in=friends_id)

    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def create(self, request, *args, **kwargs):
        obj = TodoComment.objects.create(
            author=request.user,
            content=request.data['content'],
            todo_id=request.data['todoId']
        )
        # WARNING: It does not return todo comment. It Return todo object.
        return Response(TodoSerializer(obj.todo).data, status=status.HTTP_201_CREATED)


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
