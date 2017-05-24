from .base import *

DEBUG = False

ALLOWED_HOSTS = ['13.124.90.102']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': get_config('DATABASE_NAME'),
        'USER': get_config('DATABASE_USER'),
        'PASSWORD': get_config('DATABASE_PASSWORD'),
        'HOST': get_config('DATABASE_HOST'),
        'PORT': "5432"
    }
}

STATIC_ROOT = os.path.join(BASE_DIR, 'stroot')
