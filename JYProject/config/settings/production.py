from .base import *

DEBUG = False

ALLOWED_HOSTS = ['52.78.65.32']

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

STATICFILES_DIRS += [
    os.path.join(REACT_APP_DIR, 'build', 'static')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'stroot')
