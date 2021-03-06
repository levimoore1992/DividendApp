from rest_framework import routers
from django.urls import path
from .views import DividendViewSet, DividendListViewSet, DividendScraper, Portfolio, ChartData, DividendData, \
    CalendarData, OwnedStocks, PaymentDayView

router = routers.DefaultRouter()

urlpatterns = router.urls





urlpatterns += [
    path('api/dividends', DividendViewSet.as_view(), name='dividends'),
    path('api/save-list', DividendListViewSet.as_view(), name='save-list'),
    path('api/scraper', DividendScraper.as_view(), name='table-scraper'),
    path('api/portfolio', Portfolio.as_view(), name='portfolio'),
    path('api/chart-data', ChartData.as_view(), name='chart-data'),
    path('api/dividend-data', DividendData.as_view(), name='dividend-data'),
    path('api/calendar-data', CalendarData.as_view(), name='calendar-data'),
    path('api/owned-stocks', OwnedStocks.as_view(), name='owned-stocks'),
    path('api/payment-day', PaymentDayView.as_view(), name='payment-day')
]


