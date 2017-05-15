from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


def dev_cors_middleware(get_response):
    """
    Adds CORS headers for local testing only to allow the frontend, which is served on
    localhost:3000, to access the API, which is served on localhost:8000.
    """
    def middleware(request):
        response = get_response(request)

        response['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, OPTIONS, DELETE, HEAD'
        response['Access-Control-Allow-Headers'] = 'Content-Type, X-CSRFToken'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response

    return middleware

MIDDLEWARE.append('JYProject.config.settings.dev.dev_cors_middleware')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
