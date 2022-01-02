from django.http.response import Http404, HttpResponse
from django.shortcuts import render
from django.views import generic
# from django.urls import reverse_lazy
from .models import Projects1,Pelcon,Content
from django.conf import settings
from math import ceil
import os

# from NB.Projects1 import models
# Create your views here.

def Input(request):
    return render(request,'Projects1/input.html')

def Home1(request):
    # project = Projects1.objects.all()
    allprojects = []
    project = Projects1.objects.values('category','projectid')
    proj = []
    cate = {pj['category'] for pj in project}
    cate = list(cate)
    dio = {key : 0 for key in cate}
    for produ in project:
        dio[produ['category']] += 1
    print(dio)
    for pro in dio.keys():
        ppjj = Projects1.objects.filter(category = pro)
        n = dio[pro]
        nslides = n//3 + ceil((n/3)-(n//3))
        allprojects.append([ppjj,range(1,n), nslides])
        print("ppjj :: ", ppjj)
        print("nslides :: ",nslides)
        print("n",n)

    print("Project :: ",project)
    print("proj :: ",proj)
    print("allprojects :: ",allprojects)
    
    return render(request,'Projects1/index.html',{'project':allprojects})

def projview(request,pid):
    ppjj = Projects1.objects.filter(projectid = pid).values()
    fileup = Content.objects.filter(projasso = pid).values()
    ppjj = ppjj[0]

    print(fileup)
    return render(request,'Projects1/projview.html',{'project':ppjj,'filesup':fileup})


class pelconView(generic.ListView):
    model = Pelcon
    template_name = 'Projects1/Pelcon.html'
    context_object_name = 'files'
    paginate_by = 2

    def get_queryset(self):
        return Pelcon.objects.order_by('id') 


class FileView(generic.ListView):
    model = Content
    template_name = 'Projects1/Pelcon.html'
    context_object_name = 'files'
    paginate_by = 2

    def get_queryset(self):

        return Pelcon.objects.order_by('id')