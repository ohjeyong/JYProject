import logging
import os

from django.conf import settings
from django.http import HttpResponse
from django.views.generic import View


# Create your views here.
class FrontendAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception("Production build of app not found")
            return HttpResponse(
                """
                This URL is only used when you have build the production version of the app.
                """,
                status=501
            )
