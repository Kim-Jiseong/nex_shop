from django.urls import path, include
from rest_framework import routers
from main import views

app_name = "main"

router = routers.DefaultRouter()
router.register(r"products", views.ProductViewSet)
router.register(r"options", views.OptionViewSet)
router.register(r"orders", views.OrderViewSet)
router.register(r"qnas", views.QnAViewSet)
router.register(r"comments", views.CommentViewSet)

# urlpatterns = [
#     path('', include('dj_rest_auth.urls')),
#     path('registration/', include('dj_rest_auth.registration.urls')),
# ]

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
