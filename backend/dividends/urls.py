from rest_framework import routers
from django.urls import path
from .views import DividendViewSet, DividendListViewSet, DividendScraper

router = routers.DefaultRouter()

urlpatterns = router.urls
urlpatterns += [
    path('api/dividends', DividendViewSet.as_view(), name='dividends'),
    path('api/save-list', DividendListViewSet.as_view(), name='save-list'),
    path('api/scraper', DividendScraper.as_view(), name='table-scraper')
]


