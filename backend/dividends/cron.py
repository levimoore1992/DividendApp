from background_task import background

from django.core.management import call_command


@background(schedule=60)
def get_stock():
    call_command('update_stocks')
