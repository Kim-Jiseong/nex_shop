from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
# Register your models here.

# class CustomUserAdmin(UserAdmin):
#     list_display = ('email',)
#     ordering = ('email', )
#     # list_display = ('email', 'name', 'phone')
#     # ordering = ('email', 'name','phone')
#     ##add fields those needs to be visible while adding the data in form.
#     # add_fieldsets = (
#     #     (None, {'fields': ('email', )}),
#     # )


# # admin.site.register(User, UserAdmin)
# admin.site.register(User, CustomUserAdmin)