"""
WSGI config for JYProject project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

from django.core.wsgi import get_wsgi_application

from JYProject.config.settings.base import *


if STAGE == 'PRODUCTION':
    os.environ["DJANGO_SETTINGS_MODULE"] = "JYProject.config.settings.production"
else:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "JYProject.config.settings.dev")


application = get_wsgi_application()
