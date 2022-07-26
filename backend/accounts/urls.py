from django.urls import path, include
from .views import RegistrationAPI, LoginAPI, ProfileUpdateAPI, UserAPI
# from .views import PublicUserAPIView, UserTokenView, ProfileAPIView
urlpatterns = [
    # path('', include('dj_rest_auth.urls')),
    # path('registration/', include('dj_rest_auth.registration.urls')),

    path("register/", RegistrationAPI.as_view()),
    path("login/", LoginAPI.as_view()),
    path("", include("knox.urls")),
    path("user/", UserAPI.as_view()),
    path("profile/<int:user_pk>/update/", ProfileUpdateAPI.as_view()),

    # path('user/', PublicUserAPIView.as_view(), name='user'),
    # path('token/', UserTokenView.as_view(), name='token'),
    # path('profile/', ProfileAPIView.as_view(), name='profile'),
]