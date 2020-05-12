FROM python:3.7

# Set environment variables
ENV PYTHONUNBUFFERED 1
RUN apt-get update && apt-get -y install cron


COPY requirements.txt /

# Install dependencies.
RUN pip install -r /requirements.txt

# Set work directory.
RUN mkdir /code
WORKDIR /code

# Copy project code.
COPY . /code/

EXPOSE 80