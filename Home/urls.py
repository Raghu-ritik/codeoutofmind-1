"""C_P_P URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path,include
from . import views
# from django.conf import settings
# from django.conf.urls.static import static
urlpatterns = [
    path('',views.Home, name='home'),
    path('login',views.login, name="Login"),
    path('register',views.register, name="Register"),
    path('contactus',views.contactus,name="ContactUs"),
    path('aboutus',views.aboutus,name="AboutUs"),
    path('usrpage',views.Userpage,name="User Page"),
    path('adminpage',views.adminpage,name='admin page'),
]