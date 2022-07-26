from django.db import models

# Create your models here.
from django.utils import timezone


class Products(models.Model):
    # id
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    stock = models.IntegerField()
    info = models.TextField()
    main_img = models.ImageField()
    sub_img = models.ImageField()
    category1 = models.CharField(max_length=200)
    catergory2 = models.CharField(max_length=200)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name


class Options(models.Model):
    product_id = models.ForeignKey(
        "Products", related_name="Options_products", on_delete=models.CASCADE
    )
    stock = models.IntegerField()
    sold = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)


class Orders(models.Model):
    # user_id = models.ForeignKey(
    #     "Products", related_name="products", on_delete=models.CASCADE
    # )
    product_id = models.ForeignKey(
        "Products", related_name="Orders_products", on_delete=models.CASCADE
    )
    product_option = models.ForeignKey(
        "Options", related_name="Orders_options", on_delete=models.CASCADE
    )
    quantity = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)


class QnAs(models.Model):
    # author  = models.ForeignKey(
    #     "User", related_name="user", on_delete=models.CASCADE
    # )
    product_id = models.ForeignKey(
        "Products", related_name="QnA_products", on_delete=models.CASCADE
    )
    question = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)


class Comments(models.Model):
    # author = models.ForeignKey("User", related_name="user", on_delete=models.CASCADE)
    product_id = models.ForeignKey(
        "Products", related_name="Comments_products", on_delete=models.CASCADE
    )
    score = models.IntegerField()
    photo = models.ImageField()
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
