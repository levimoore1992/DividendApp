# Generated by Django 3.0.6 on 2020-05-12 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dividends', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='ticker',
            field=models.CharField(default='', max_length=4),
            preserve_default=False,
        ),
    ]
