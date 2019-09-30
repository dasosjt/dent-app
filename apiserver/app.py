# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from flask_cors import CORS
from json import loads, dumps
import database
import models as m
from sqlalchemy import func

import sqlalchemy

app = Flask(__name__)
CORS(app)

database.init_db()

@app.teardown_appcontext
def shutdown_session(exception=None):
	database.db_session.remove()

@app.route('/')
def hello_world():
	return 'Hello, World!'

@app.route('/login', methods=['POST'])
def login():
	_json = request.get_json()
	username = _json.get('username')
	password = _json.get('password')

	print(username)
	print(password)

	if username and password and username == 'admin' and password == 'admin':
		return 'True', 200

	return 'False', 500

@app.route('/injury', methods=['GET'])
def get_injuries():
	injuries = [
		injury.as_dict() 
		for injury in database.db_session().query(m.Injury).all()[:5]
	]

	return jsonify(injuries)

@app.route('/injury', methods=['POST'])
def create_injury():
	data = request.get_json()
	location_data = data['locations']

	injury = m.Injury(**{ 
		k: data[k] 
		for k in m.Mixin.default_attr(m.Injury)
		if k in data
	})

	database.db_session.add(injury)
	database.db_session.flush()

	for _location in location_data:
		attr_dict = {
			k: _location[k]
			for k in m.Mixin.default_attr(m.InjuryLocation)
			if k in _location
		}

		attr_dict['injury_id'] = injury.injury_id

		location = m.InjuryLocation(**attr_dict)

		database.db_session.add(location)

	database.db_session.commit()

	return 'True'

@app.route('/injury/<id>', methods=['DELETE'])
def delete_injury_by_id(id):
	injury = database.db_session.query(m.Injury).get(id)

	if not injury:
		return 'False'

	database.db_session.delete(injury)
	database.db_session.commit()

	return 'True'

@app.route('/injury/<type>/<filter>', methods=['GET'])
def filter_injury(type, filter):
	print(type)
	print(filter)

	query = database.db_session()

	location_sub = (
		query.query(
			m.InjuryLocation.location, 
			func.count(m.InjuryLocation.location)
		)
		.join(
			m.Injury,
			m.Injury.injury_id == m.InjuryLocation.injury_id
		)
		.group_by(m.InjuryLocation.location)
	)
	
	if filter and filter == 'location_sub':
		query = location_sub
	elif filter and filter == 'location_div_0':
		query = location_sub.filter(m.InjuryLocation._type == 0)
	elif filter and filter == 'location_div_1':
		query = location_sub.filter(m.InjuryLocation._type == 1)
	elif filter and filter == 'location_div_2':
		query = location_sub.filter(m.InjuryLocation._type == 2)
	elif filter and filter == 'location_div':
		query = (
			query.query(
				m.InjuryLocation._type, 
				func.count(m.InjuryLocation._type)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.group_by(m.InjuryLocation._type)
		)
	elif filter:
		query = (
			query.query(
				getattr(m.Injury, filter), 
				func.count(m.Injury.injury_id)
			)
			.group_by(getattr(m.Injury, filter))
		)

	type_mapper = {
		'lucentes': 'l',
		'opacas': 'o',
		'mixtas': 'm'
	}

	filter_mapper = {
		'register': {
			'pi': 'PI',
			'pt': 'PT',
			'pce': 'PCE'
		},
		'gender': {
			'm': 'Hombre',
			'f': 'Mujer'
		},
		'op1': {
			'u': 'Única',
			'm': 'Multiple'
		},
		'op2': {
			'u': 'Unilocular',
			'm': 'Multilocular'
		},
		'form': {
			'c': 'Circular',
			'o': 'Ovalada',
			't': 'Triangular',
			'r': 'Rectangular',
			'tr': 'Trapezoidal',
			'cu': 'Cuadrada',
			'ir': 'Irregular',
			's': 'Semi Circular'
		},
		'op3': {
			'de': 'Definidos Esclerotico',
			'dn': 'Definidos No Esclerotico',
			'di': 'Difusos',
		},
		'op4': {
			'a': 'Asociada',
			'n': 'No Asociado'
		},
		'op5': {
			'c': 'Con Reabsorción',
			'n': 'Sin Reabsorción'
		},
		'op5_type': {
			'r': 'Raices Dentarias',
			'c': 'Coronas Dentarias',
			'o': 'Óseas'
		},
		'op6': {
			'c': 'Con Desplazamiento Piezas Dentarias',
			'n': 'Sin Desplazamiento Piezas Dentarias'
		},
		'op7': {
			'c': 'Con Expansión de Corticales',
			'n': 'Sin Expansión de Corticales'
		},
		'location_div': {
			0: 'Blando',
			1: 'Duro',
			2: 'Aeréo'
		}
	}

	type_filter = type_mapper.get(type, None)

	if type_filter:
		query = query.filter(m.Injury._type == type_filter)

	print(query)

	print(query.all())

	results = []
	for result in query.all():
		filter_name = filter_mapper.get(filter)

		if isinstance(filter_name, dict):
			print(result[0])
			name = filter_name.get(result[0])
		else:
			name = result[0]

		results.append({ 'name': str(name), 'value': result[1] })

	return jsonify(results)