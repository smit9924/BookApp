from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('index.urls')), # Path to redirect for INDEX app
    path('index/', include('index.urls')), # Path to redirect for INDEX app
    path('auth/', include('auth.urls')), # Path to redirect for AUTH app
    path('store/', include('store.urls')), # Path to redirect for STORE app
    path('about/', include('about.urls')), # Path to redirect for ABOUT app
    path('contact/', include('contactus.urls')), # Path to redirect for CONTACT US app
]