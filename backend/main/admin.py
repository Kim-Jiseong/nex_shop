from django.contrib import admin
from .models import Products, Carosel, Options, MainCategory,SubCategory,Orders,QnAs,Comments 
# Register your models here.
admin.site.register(Products)
admin.site.register(Options)
admin.site.register(Orders)
admin.site.register(QnAs)
admin.site.register(Comments)
admin.site.register(Carosel)
admin.site.register(MainCategory)
admin.site.register(SubCategory)