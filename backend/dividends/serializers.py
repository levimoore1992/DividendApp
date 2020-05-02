from rest_framework import serializers


class TickerSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=4)

    def validate_ticker(self, value):
        if not isinstance(value, str):
            raise serializers.ValidationError("This is not a string")
