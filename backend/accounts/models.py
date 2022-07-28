from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
# from django.contrib.auth.models import AbstractUser
# from django.utils.translation import gettext_lazy as _

# from .managers import UserManager

# class User(AbstractUser):
#     username = None
#     email = models.EmailField(_('email address'), unique=True)


#     # name = models.CharField(max_length=10, default='')
#     # phone = models.CharField(max_length=11, default='')
#     # grade = models.TextField(null=True)
#     # point = models.TextField(default = 0)
#     # created_at = models.DateTimeField(default= timezone.now())



#     USERNAME_FIELD = 'email'
#     # REQUIRED_FIELDS = ['name', 'phone', 'grade', 'point']
#     REQUIRED_FIELDS = []
#     objects = UserManager()
#     def __str__(self):
#         return self.email



class Profile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE,
                                related_name='profile')
    user_pk = models.IntegerField(blank=True, default = 0)
    name = models.CharField(max_length=20)
    email = models.EmailField(('email address'))
    gender = models.CharField(max_length=6, choices=(('male', '남자'),
                                                     ('female', '여자')))
    phone = models.CharField(max_length=11)
    grade = models.CharField(default='', max_length=10)
    cart = models.TextField()
    point = models.CharField(max_length=100)

    @receiver(post_save, sender=get_user_model())
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance, user_pk=instance.id)


    @receiver(post_save, sender=get_user_model())
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
    def __str__(self):
        return self.name