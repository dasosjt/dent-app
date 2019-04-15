from sqlalchemy import Column, Integer, String, Float
from database import Base

class User(Base):
	__tablename__ = 'users'
	id = Column(Integer, primary_key=True)
	name = Column(String, nullable=False)
	password = Column(String, nullable=False)

	def as_dict(self):
		return {
       		c.name: getattr(self, c.name)
       		for c in self.__table__.columns
       	}

class Injury(Base):
	__tablename__ = 'injuries'
	id = Column(Integer, primary_key=True)
	name = Column(String, nullable=False)
	lastname = Column(String, nullable=False)
	register = Column(String, nullable=False)
	register_num = Column(Integer, nullable=False)
	gender = Column(String, nullable=False)
	age = Column(Integer, nullable=False)
	_type = Column(String, nullable=False)
	op1 = Column(String)
	op2 = Column(String)
	form = Column(Integer, nullable=False)
	op3 = Column(String, nullable=False)
	location = Column(String, nullable=False)
	size_0 = Column(Float, nullable=False)
	size_1 = Column(Float, nullable=False)
	size_2 = Column(Float, nullable=False)
	op4 = Column(String, nullable=False)
	op4_super = Column(Integer, nullable=True)
	op5 = Column(String, nullable=False)
	op5_type = Column(String, nullable=True)
	op6 = Column(String, nullable=False)
	op6_super = Column(Integer, nullable=True)
	op7 = Column(String, nullable=False)

	def as_dict(self):
		return {
       		c.name: getattr(self, c.name)
       		for c in self.__table__.columns
       	}