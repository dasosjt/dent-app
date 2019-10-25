#!/bin/bash
source env/bin/activate
gunicorn --bind=localhost:8080 main:app
