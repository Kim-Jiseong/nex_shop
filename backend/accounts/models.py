from django.db import models
from django.utils import timezone
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import UserManager

class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)


    # name = models.CharField(max_length=10, default='')
    # phone = models.CharField(max_length=11, default='')
    # grade = models.TextField(null=True)
    # point = models.TextField(default = 0)
    # created_at = models.DateTimeField(default= timezone.now())



    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['name', 'phone', 'grade', 'point']
    REQUIRED_FIELDS = []
    objects = UserManager()
    def __str__(self):
        return self.email