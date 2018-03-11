from .base import *

DEBUG = False

ALLOWED_HOSTS = ['52.78.65.32', 'jylist.cc']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': get_env_variables('DATABASE_NAME'),
        'USER': get_env_variables('DATABASE_USER'),
        'PASSWORD': get_env_variables('DATABASE_PASSWORD'),
        'HOST': get_env_variables('DATABASE_HOST'),
        'PORT': "5432"
    }
}

STATICFILES_DIRS += [
    os.path.join(REACT_APP_DIR, 'build', 'static')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'stroot')


import django_heroku
django_heroku.settings(locals())

