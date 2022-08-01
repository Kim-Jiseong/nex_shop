from django.contrib import admin
from .models import Products, Options, Orders,QnAs,Comments 
# Register your models here.
admin.site.register(Products, Options, Orders,QnAs,Comments)