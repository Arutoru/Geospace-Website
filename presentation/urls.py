from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('',views.HomeView.as_view(),name='home'),
    path('photogrammetrie/',views.ProductOneView.as_view(),name='photogrammetrie'),
    path('topographie/',views.ProductTwoView.as_view(),name='topographie'),
    path('bathymetrie/',views.ProductThreeView.as_view(),name='bathymetrie'),
    path('sig/',views.ProductFourView.as_view(),name='sig'),
    path('lidar/',views.ProductFiveView.as_view(),name='lidar')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
