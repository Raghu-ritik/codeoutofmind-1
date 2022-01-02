from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def Home(request):
    return render(request,'Home/index.html',{})

def login(request):
    return render(request,'Home/login.html',{})

def register(request):
    if request.method == 'POST':
        email=request.POST.get('email')
        passwd1=request.POST.get('passwd1')
        passwd2=request.POST.get('passwd2')

        Medium=request.POST.get('Medium')
        github=request.POST.get('github')
        linkedin=request.POST.get('linkedin')

        fname=request.POST.get('Fname')
        lname=request.POST.get('Lname')
        mobno=request.POST.get('mobno')

        print(email,passwd1,passwd2)
        print(Medium,github,linkedin)
        print(fname,lname,mobno)
    return render(request,'Home/registeration.html',{} )

def contactus(request):
    return render(request,'Home/contactus.html',{} )

def aboutus(request):
    return render(request,'Home/aboutus.html',{} )


def Userpage(request):
    return render(request,'Home/userview.html',{})

def adminpage(request):
    return render(request,'Home/Admintemp/admin_page.html',{})