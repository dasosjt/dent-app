#!/bin/bash
source env/bin/activate
export FLASK_ENV=development
export FLASK_APP=main.py
python -m flask run
