# Generated by Django 4.0 on 2021-12-29 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jaimojepsy',
            name='par1',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='jaimojepsy',
            name='par2',
            field=models.CharField(max_length=500),
        ),
    ]
