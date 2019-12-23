#!/bin/bash
source env/bin/activate
gunicorn --bind=localhost:5000 main:app
