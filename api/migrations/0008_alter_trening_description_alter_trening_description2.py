# Generated by Django 4.0 on 2022-02-01 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_trening_rodzaj'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trening',
            name='description',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='trening',
            name='description2',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
