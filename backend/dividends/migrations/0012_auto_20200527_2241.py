# Generated by Django 3.0.6 on 2020-05-27 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dividends', '0011_auto_20200522_1423'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='ticker',
            field=models.CharField(max_length=5),
        ),
    ]
