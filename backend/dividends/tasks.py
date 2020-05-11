from celery import shared_task
from .utils import get_stock_data

from .models import Stock


@shared_task(default_retry_delay=5, max_retries=3)
def get_stocks():
    for stock in Stock.objects.all().values_list('ticker'):
        try:
            get_stock_data(stock[0])
        except:
            continue
