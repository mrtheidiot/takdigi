# Generated by Django 4.0 on 2021-12-28 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='JaIMojePsy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='jaimojepsy/')),
                ('heading1', models.CharField(max_length=100)),
                ('par1', models.CharField(max_length=200)),
                ('par2', models.CharField(max_length=200)),
            ],
        ),
    ]
