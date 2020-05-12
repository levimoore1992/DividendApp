from .utils import get_stock_data

from .models import Stock
from background_task import background


@background(schedule=60)
def get_stock():
    for stock in Stock.objects.all().values_list('ticker'):
        try:
            get_stock_data(stock[0])
        except:
            continue
