import json
from django.http import HttpResponse


# Create your views here.
from splash.models import Email


def save_email(request):
    if request.method == 'POST':
        the_json = json.loads(str(request.body, encoding='utf-8'))
        e = Email(address=the_json['email'])

        try:
            e.save()
            return HttpResponse('email is saved')

        except:
            return HttpResponse('There seems to have been a problem')


