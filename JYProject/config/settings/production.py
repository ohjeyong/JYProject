from .base import *

DEBUG = False

ALLOWED_HOSTS = ['52.78.65.32', 'jylist.cc']

STATICFILES_DIRS += [
    os.path.join(REACT_APP_DIR, 'build', 'static')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'stroot')

MIDDLEWARE.append('whitenoise.middleware.WhiteNoiseMiddleware')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


import django_heroku
django_heroku.settings(locals())

