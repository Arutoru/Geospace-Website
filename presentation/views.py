from django.views.generic import TemplateView

# Create your views here.
class HomeView(TemplateView):
    template_name = 'base.html'

class ProductOneView(TemplateView):
    template_name = 'photogrammetrie.html'

class ProductTwoView(TemplateView):
    template_name = 'topographie.html'

class ProductThreeView(TemplateView):
    template_name = 'bathymetrie.html'

class ProductFourView(TemplateView):
    template_name = 'sig.html'

class ProductFiveView(TemplateView):
    template_name = 'lidar.html'
