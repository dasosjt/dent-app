# -*- coding: utf-8 -*-

from sqlalchemy import Column, Integer, String, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from database import Base

class Mixin(object):
    def as_dict(self):
        return {
            c.name: getattr(self, c.name)
            for c in self.__table__.columns
        }

    def default_attr(self):
        return [
            k
            for k in self.__table__.columns.keys()
            if not ( k in self.not_default_attr )
        ]

    def init(self, attr_dict):
        return self(**{
            k: attr_dict[k]
            for k in self.default_attr()
            if k in attr_dict
        })

class User(Base, Mixin):
    __tablename__ = 'user'
    
    user_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    password = Column(String, nullable=False)

class Injury(Base, Mixin):
    __tablename__ = 'injury'
    
    injury_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    register = Column(String, nullable=False)
    register_num = Column(Integer, nullable=False)
    gender = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    _type = Column(String, nullable=False)
    op1 = Column(String)
    op2 = Column(String)
    form = Column(Integer, nullable=True)
    op3 = Column(String, nullable=True)
    size_0 = Column(Float, nullable=True)
    size_1 = Column(Float, nullable=True)
    size_2 = Column(Float, nullable=True)
    op4 = Column(String, nullable=True)
    #op4_super = Column(String, nullable=True)
    op5 = Column(String, nullable=True)
    op5_type = Column(String, nullable=True)
    op6 = Column(String, nullable=True)
    #op6_super = Column(String, nullable=True)
    op7 = Column(String, nullable=True)
    op8 = Column(String, nullable=True)
    #op8_super = Column(String, nullable=True)
    dif1 = Column(String, nullable=False)
    dif2 = Column(String, nullable=True)
    dif3 = Column(String, nullable=True)

    not_default_attr = [ 'injury_id' ]

    location = relationship(
        'InjuryLocation',
        backref='injury',
        lazy=True
    )

    tooth = relationship(
        'Tooth',
        backref='injury',
        lazy=True
    )

class InjuryLocation(Base, Mixin):
    __tablename__ = 'injury_location'
    
    injury_location_id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)
    _type = Column(String, nullable=False)
    
    position = Column(Integer, nullable=False)
    branch_mandibula = Column(String, nullable=True)
    body_mandibula = Column(Boolean, nullable=True)
    sinus_maxilar = Column(Boolean, nullable=True)
    sinus_maxilar_wall = Column(String, nullable=True)

    injury_id = Column(Integer, ForeignKey('injury.injury_id'))

    not_default_attr = [ 'injury_location_id' ]

class Tooth(Base, Mixin):
    __tablename__ = 'tooth'
    
    tooth_id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)
    _type = Column(String, nullable=False)
    
    injury_id = Column(Integer, ForeignKey('injury.injury_id'))

    not_default_attr = [ 'tooth_id' ]
