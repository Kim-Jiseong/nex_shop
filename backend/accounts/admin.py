from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import User
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

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Profile


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = "profile"


class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
# admin.site.register(Profile)