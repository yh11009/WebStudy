from django.http import HttpResponse

def main_page(req):
    return HttpResponse("Hello World!")
