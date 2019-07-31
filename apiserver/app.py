# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from flask_cors import CORS
from json import loads, dumps
import database
from models import User, Injury
from sqlalchemy import func

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

	return 'False', 201

@app.route('/injury', methods=['GET'])
def get_injuries():
	injuries = [
		injury.as_dict() 
		for injury in database.db_session().query(Injury).all()[:5]
	]

	return jsonify(injuries)

@app.route('/injury', methods=['POST'])
def create_injury():
	data = request.get_json()
	del data['modalOpen']

	injury = Injury(**data)

	database.db_session.add(injury)
	database.db_session.commit()

	return 'True'

@app.route('/injury/<id>', methods=['DELETE'])
def delete_injury_by_id(id):
	injury = database.db_session.query(Injury).get(id)

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
	
	if filter:
		query = (
			query.query(getattr(Injury, filter), func.count(Injury.id))
			.group_by(getattr(Injury, filter))
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
			're': 'Regular',
			's': 'Semi Circular'
		},
		'op3': {
			'de': 'Definidos',
			'di': 'Difusos',
			'e': 'Escleroticos',
			'n': 'No Escleroticos'
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
		}
	}

	type_filter = type_mapper.get(type, None)

	if type_filter:
		query = query.filter(Injury._type == type_filter)

	print(query.all())

	results = []
	for result in query.all():
		filter_name = filter_mapper.get(filter)

		if isinstance(filter_name, dict):
			name = filter_name.get(result[0])
		else:
			name = result[0]

		results.append({ 'name': str(name), 'value': result[1] })

	return jsonify(results)