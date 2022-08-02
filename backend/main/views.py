from django.shortcuts import render

# Create your views here.
# from rest_framework import permissions
from rest_framework import viewsets
from .models import Products, Options, Orders, QnAs, Comments, Carosel
from .serializers import (
    ProductSerializer,
    OptionSerializer,
    OrderSerializer,
    QnASerializer,
    CommentSerializer,
    CaroselSerializer,
)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.order_by('-created_at')
    serializer_class = ProductSerializer
    # permission_classes = [permissions.IsAuthenticated]

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Options.objects.all()
    serializer_class = OptionSerializer
    # permission_classes = [permissions.IsAuthenticated]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [permissions.IsAuthenticated]

class QnAViewSet(viewsets.ModelViewSet):
    queryset = QnAs.objects.all()
    serializer_class = QnASerializer
    # permission_classes = [permissions.IsAuthenticated]

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer
    # permission_classes = [permissions.IsAuthenticated]
class CaroselViewSet(viewsets.ModelViewSet):
    queryset = Carosel.objects.all()
    serializer_class = CaroselSerializer

