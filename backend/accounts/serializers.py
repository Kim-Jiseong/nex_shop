from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model, authenticate
from .models import Profile
# 회원가입
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"], None, validated_data["password"]
        )
        return user


# 접속 유지중인지 확인
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username")


# 로그인
class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['id', 'name', 'email', 'gender', 'phone', 'point', 'grade', 'cart']
        read_only_fields = ['id']

# class UserSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = get_user_model()
#         fields = ['username', 'password']
#         extra_kwargs = {'password': {'write_only': True, 'min_length': 6}}

#     def create(self, validated_data):
#         return get_user_model().objects.create_user(**validated_data)

#     def update(self, instance, validated_data):
#         password = validated_data.pop('password', None)
#         if password:
#             instance.set_password(password)
#             instance.save()
#         return instance


#     def validate(self, attrs):
#         username = attrs.get('username')
#         password = attrs.get('password')
#         if username:
#             if username.isnumeric():
#                 msg = {"Err": "username은 숫자만으로 구성될 수 없습니다"}
#                 raise serializers.ValidationError(msg, code='username format')
#         if password:
#             if password.isnumeric():
#                 msg = {"Err": "password는 숫자만으로 구성될 수 없습니다"}
#                 raise serializers.ValidationError(msg, code='password format')
#         return attrs

# ------------------------------------------------------------------------------------

# class AuthTokenSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField(
#         style={'input_type': 'password'},
#         trim_whitespace=False
#     )

#     def validate(self, attrs):
#         username = attrs.get('username')
#         password = attrs.get('password')

#         user = authenticate(
#             request=self.context.get('request'),
#             username=username,
#             password=password,
#         )

#         if not user:
#             msg = {'authentication': 'Invalid credential'}
#             raise serializers.ValidationError(msg, code='authentication')

#         attrs['user'] = user
#         return attrs