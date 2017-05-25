from rest_framework import serializers

from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    profile_img = serializers.ImageField(read_only=True)

    def validate_username(self, value):
        try:
            validate_email(value)
            return value
        except ValidationError:
            raise serializers.ValidationError("Username must be email format.")

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError(e.messages)

    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'password', 'name', 'profile_img')
