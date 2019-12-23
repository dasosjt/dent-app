# -*- coding: utf-8 -*-

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:////tmp/test.db', convert_unicode=True)

db_session = sessionmaker(
	autocommit=False,
	autoflush=False,
	bind=engine
)

Base = declarative_base()

def init_db():
    from models import (
    	User,
    	Injury,
    	InjuryLocation,
    	Tooth
    )
    Base.metadata.create_all(bind=engine)