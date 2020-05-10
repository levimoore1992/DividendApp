from celery import shared_task, task
from dividends.utils import get_stock_data

from dividends.models import Stock


@task
def get_stocks():
    for stock in Stock.objects.all().values_list('ticker'):
        get_stock_data(stock)