from django.contrib.auth import logout, authenticate, login

from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from JYProject.user.models import User
from .user_serializer import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    @list_route(methods=["POST"])
    def signup(self, request, *args, **kwargs):
        password2 = request.data.pop('password2')
        if password2 != request.data['password']:
            return Response({"error": {"password": ["password1 and password2 is not same."]}})
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            headers = self.get_success_headers(serializer.data)
            login(request, User.objects.get(id=serializer.data['id']))
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        except ValidationError as e:
            return Response({"error": e.detail})

    def create(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    def retrieve(self, request, *args, **kwargs):
        return Response(status=status.HTTP_404_NOT_FOUND)

    @list_route()
    def me(self, request):
        if request.user.is_authenticated:
            instance = User.objects.get(id=request.user.id)
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        else:
            return Response(dict())

    @list_route()
    def logout(self, request):
        logout(request)
        return Response(None)

    @list_route(methods=["POST"])
    def login(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        else:
            return Response({"error": "아이디나 패스워드가 올바르지 않습니다."})
