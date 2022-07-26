from django.shortcuts import render
from rest_framework import viewsets, permissions, generics, status
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from knox.models import AuthToken
from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer, ProfileSerializer
# from .serializers import AuthTokenSerializer, ProfileSerializer
from .models import Profile

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        if len(request.data["username"]) < 6 or len(request.data["password"]) < 4:
            body = {"message": "short field"}
            return Response(body, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": AuthToken.objects.create(user)[1],
            }
        )


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": AuthToken.objects.create(user)[1],
            }
        )


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# api/views.py
class ProfileUpdateAPI(generics.UpdateAPIView):
    lookup_field = "user_pk"
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
# ------------------------------------------------------------
# class PublicUserAPIView(APIView):

#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def patch(self, request):
#         username = request.data.get('username')
#         previous_pw = request.data.get('previous_pw')
#         if not (previous_pw and username):
#             msg = {'Err': 'username과 previous_pw를 포함하여 보내주세요.'}
#             return Response(msg, status=status.HTTP_400_BAD_REQUEST)
#         user = get_object_or_404(get_user_model(), username=username)
#         test_previous_pw = user.check_password(previous_pw)
#         serializer = UserSerializer(user, data=request.data, partial=True)
#         if not test_previous_pw:
#             msg = {'Err': 'previous_pw가 올바르지 않습니다.'}
#             return Response(msg, status=status.HTTP_400_BAD_REQUEST)
#         elif serializer.is_valid():
#             serializer.save()
#             msg = {'Succ': f'{user.username}님의 비밀번호가 변경되었습니다.'}
#             return Response(msg, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class UserTokenView(ObtainAuthToken):
#     serializer_class = AuthTokenSerializer
#     renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


# class ProfileAPIView(APIView):
#     authentication_classes = (TokenAuthentication,)
#     permission_classes = (IsAuthenticated,)

#     def get(self, request):
#         profile = Profile.objects.filter(user=request.user)
#         if not profile:
#             msg = f'{request.user.username}님은 아직 프로필을 만들지 않았습니다.'
#             context = {}
#             context['Err'] = msg
#             return Response(context, status=status.HTTP_200_OK)

#         serializer = ProfileRetrieveSerializer(profile[0],
#                                                context={'request': request})
#         context = {}
#         context['profile_data'] = serializer.data
#         context['username'] = request.user.username
#         return Response(context, status=status.HTTP_200_OK)

#     def post(self, request):
#         user = request.user
#         if Profile.objects.filter(user=user):
#             msg = {'Err': f'{user.username}님은 이미 프로필이 있습니다.'}
#             return Response(msg, status=status.HTTP_400_BAD_REQUEST)
#         serializer = ProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def patch(self, request):
#         user = request.user
#         profile = get_object_or_404(Profile, user=user)
#         serializer = ProfileSerializer(profile,
#                                        data=request.data,
#                                        partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request):
#         user = request.user
#         profile = get_object_or_404(Profile, user=user)
#         profile.delete()
#         user.delete()
#         msg = {'Succ': '성공적으로 프로필과 user가 삭제되었습니다.'}
#         return Response(msg, status=status.HTTP_204_NO_CONTENT)