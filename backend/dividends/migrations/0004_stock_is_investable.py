# Generated by Django 3.0.6 on 2020-05-14 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dividends', '0003_auto_20200512_1559'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='is_investable',
            field=models.BooleanField(default=False),
        ),
    ]