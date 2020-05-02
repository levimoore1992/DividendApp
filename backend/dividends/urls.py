from rest_framework import routers
from django.urls import path
from .views import DividendViewSet

router = routers.DefaultRouter()

urlpatterns = router.urls
urlpatterns += [
    path('api/dividends', DividendViewSet.as_view(), name='dividends')
]


