from rest_framework import routers
from django.urls import path
from .views import DividendViewSet, DividendListViewSet

router = routers.DefaultRouter()

urlpatterns = router.urls
urlpatterns += [
    path('api/dividends', DividendViewSet.as_view(), name='dividends'),
    path('api/save-list', DividendListViewSet.as_view(), name='save-list')
]


