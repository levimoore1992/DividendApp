from django.db import models
import requests
from datetime import datetime


class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    dividend = models.FloatField()
    last_updated = models.DateTimeField(auto_now=True)
    price = models.FloatField()
    ticker = models.CharField(max_length=5)
    is_investable = models.BooleanField(default=False)
    is_owned = models.BooleanField(null=True, blank=True, default=False)
    shares_owned = models.IntegerField(default=0)
    ex_div_date = models.DateField(null=True, blank=True)
    payment_date = models.DateField(null=True, blank=True)
    next_div_amount = models.FloatField(null=True, blank=True)
    headers = {
        'cookie': 'ak_bmsc=20E72A11270979763019E15FB14E0DCB1736A44F8C3800009BCE195FDF6A4B4D~pl5CLirohlLftep4KFVUCxjldV2kJZwe1phGpJFFxegNukmOHzREg3ps0f/bkMe48K8NL8M1GQhJLRPps5DlBmtG0BXuSN1RPUMY4hkS3gA00Bmc+0jdiXLAje7c1TeWloivWpGTkkSuaLhSsgkjaNlmVaqEA3unwR/nGYjKwUAPHxYR+BVedplusn+E/nZU5fitdSdtITr/cwHUEYLVMMlOpnCUzK28sMQ0C+FtF/V5g=; bm_sv=34A4184E3404304D5213DD0F2D5FBD7C~X4OG3OPNszlrUcbEwz8C3jwzbVNI0MUF86gjlFsxTBrwmykxFiQC/AY24CfItDE8ZIMJbSd1HLImRim8yvwWJaPFEdXFdpi7h+6NFnA291jSoDdPgltVQj3IEk1mRIiQkZc4zuJvDQbszYN3IfG4pgYmT26q5cYt4cxUM3ldXMI='
    }

    def __str__(self):
        return self.ticker

    def save(self, *args, **kwargs):
        self.is_investable = .07 < float(self.dividend) / float(self.price) < .2
        if self.shares_owned > 0:
            self.is_owned = True
        else:
            self.is_owned = False
        super(Stock, self).save(*args, **kwargs)
