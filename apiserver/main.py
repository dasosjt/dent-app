# -*- coding: utf-8 -*-

import os
from json import loads, dumps

from sqlalchemy import sql
from flask import Flask, request, jsonify, g
from flask_cors import CORS

import database
import models as m

static_file_dir = os.path.join(
	os.path.dirname(
		os.path.realpath(__file__)
	), 'static'
)

app = Flask(__name__)
CORS(app)

@app.before_request
def set_db_session():
    """
    create session before each request
    """
    g.s = database.db_session()

@app.teardown_appcontext
def shutdown_session(exception=None):
	if g.s:
		if exception:
			g.s.rollback()
		g.s.close()

@app.route('/')
def hello_world():
	return 'Dent App USAC'

@app.route('/init/db')
def init_db():
	database.init_db()

	return 'Init DB'

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
		for injury in g.s.query(m.Injury).order_by(m.Injury.injury_id.desc()).all()[:10]
	]

	return jsonify(injuries)

@app.route('/injury', methods=['POST'])
def create_injury():
	data = request.get_json()
	location_data = data.get('locations', [])
	tooth_data = data.get('tooths', [])

	injury = m.Injury(**{ 
		k: data[k] 
		for k in m.Mixin.default_attr(m.Injury)
		if k in data
	})

	g.s.add(injury)
	g.s.flush()

	for _location in location_data:
		attr_dict = {
			k: _location[k]
			for k in m.Mixin.default_attr(m.InjuryLocation)
			if k in _location
		}

		attr_dict['injury_id'] = injury.injury_id

		location = m.InjuryLocation(**attr_dict)

		g.s.add(location)

	for _tooth in tooth_data:
		attr_dict = {
			k: _tooth[k]
			for k in m.Mixin.default_attr(m.Tooth)
			if k in _tooth
		}

		attr_dict['injury_id'] = injury.injury_id

		tooth = m.Tooth(**attr_dict)

		g.s.add(tooth)

	g.s.commit()

	return 'True'

@app.route('/injury/<id>', methods=['DELETE'])
def delete_injury_by_id(id):
	injury = g.s.query(m.Injury).get(id)

	if not injury:
		return 'False'

	g.s.delete(injury)
	g.s.commit()

	return 'True'

@app.route('/injury/<type>/<to_filter>', methods=['GET'])
def filter_injury(type, to_filter):
	print(type)
	print(to_filter)

	query = g.s

	location_sub = (
		query.query(
			m.InjuryLocation.location, 
			sql.func.count(m.InjuryLocation.location)
		)
		.join(
			m.Injury,
			m.Injury.injury_id == m.InjuryLocation.injury_id
		)
		.group_by(m.InjuryLocation.location)
	)

	location_sub_position = (
		query.query(
			m.InjuryLocation.position, 
			sql.func.count(m.InjuryLocation.position)
		)
		.join(
			m.Injury,
			m.Injury.injury_id == m.InjuryLocation.injury_id
		)
		.group_by(m.InjuryLocation.position)
	)

	tooth_location = (
		query.query(
			m.Tooth.location, 
			sql.func.count(m.Tooth.location)
		)
		.join(
			m.Injury,
			m.Injury.injury_id == m.Tooth.injury_id
		)
		.group_by(m.Tooth.location)
	)
	
	if to_filter and to_filter == 'location_sub':
		query = location_sub
	elif to_filter and to_filter == 'location_div_0':
		query = location_sub.filter(m.InjuryLocation._type == 'Blando')
	elif to_filter and to_filter == 'location_div_1':
		query = location_sub.filter(m.InjuryLocation._type == 'Duro')
	elif to_filter and to_filter == 'location_div_2':
		query = location_sub.filter(m.InjuryLocation._type == 'Aéreo')
	elif to_filter and to_filter == 'location_estilohioideo_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Ligamento Estilohioideo'
		)
	elif to_filter and to_filter == 'location_lengua_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Lengua'
		)
	elif to_filter and to_filter == 'location_tiroides_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Glándula Tiroides'
		)
	elif to_filter and to_filter == 'location_blnariz_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Tejido Blando de Nariz'
		)
	elif to_filter and to_filter == 'location_amigdala_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Amígdala'
		)
	elif to_filter and to_filter == 'location_nasal_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Nasal'
		)
	elif to_filter and to_filter == 'location_temporal_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Temporal'
		)
	elif to_filter and to_filter == 'location_cigomatico_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Cigomático'
		)
	elif to_filter and to_filter == 'location_fosa_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Espacio de Fosas Nasales'
		)
	elif to_filter and to_filter == 'location_hioides_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Hioides'
		)
	elif to_filter and to_filter == 'location_cervicales_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Vertebras Cervicales'
		)
	elif to_filter and to_filter == 'location_maxilar_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Maxilar'
		)
	elif to_filter and to_filter == 'location_mandibula_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Mandíbula'
		)
	elif to_filter and to_filter == 'location_oro_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Espacio de Orofaringe'
		)
	elif to_filter and to_filter == 'location_naso_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Espacio de Nasofaringe'
		)
	elif to_filter and to_filter == 'location_hipo_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Espacio de Hipofaringe'
		)
	elif to_filter and to_filter == 'location_branch_mandibula':
		query = (
			query.query(
				m.InjuryLocation.branch_mandibula, 
				sql.func.count(m.InjuryLocation.branch_mandibula)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.filter(m.InjuryLocation.location == 'Mandíbula')
			.group_by(m.InjuryLocation.branch_mandibula)
		)
	elif to_filter and to_filter == 'location_body_mandibula':
		query = (
			query.query(
				m.InjuryLocation.body_mandibula, 
				sql.func.count(m.InjuryLocation.body_mandibula)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.filter(m.InjuryLocation.location == 'Mandíbula')
			.group_by(m.InjuryLocation.body_mandibula)
		)
	elif to_filter and to_filter == 'location_sinus_maxilar':
		query = (
			query.query(
				m.InjuryLocation.sinus_maxilar, 
				sql.func.count(m.InjuryLocation.sinus_maxilar)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.filter(m.InjuryLocation.location == 'Maxilar')
			.group_by(m.InjuryLocation.sinus_maxilar)
		)
	elif to_filter and to_filter == 'location_sinus_maxilar_wall':
		query = (
			query.query(
				m.InjuryLocation.sinus_maxilar_wall, 
				sql.func.count(m.InjuryLocation.sinus_maxilar_wall)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.filter(m.InjuryLocation.location == 'Maxilar')
			.group_by(m.InjuryLocation.sinus_maxilar_wall)
		)
	elif to_filter and to_filter == 'location_div':
		query = (
			query.query(
				m.InjuryLocation._type, 
				sql.func.count(m.InjuryLocation._type)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.group_by(m.InjuryLocation._type)
		)
	elif to_filter and to_filter == 'op4_super':
		query = (
			tooth_location
				.filter(m.Tooth._type == 'Asociada')
		)
	elif to_filter and to_filter == 'op6_super':
		query = (
			tooth_location
				.filter(m.Tooth._type == 'Con Desplazamiento Piezas Dentarias')
		)
	elif to_filter and to_filter == 'op8_super':
		query = (
			tooth_location
				.filter(m.Tooth._type == 'Pieza Incluida')
		)
	elif to_filter:
		query = (
			query.query(
				getattr(m.Injury, to_filter), 
				sql.func.count(m.Injury.injury_id)
			)
			.group_by(getattr(m.Injury, to_filter))
		)

	filter_mapper = {
		'location_body_mandibula': {
			True: 'Cuerpo',
			False: 'Rama'
		},
		'location_sinus_maxilar': {
			True: 'Presente en Seno Maxilar',
			False: 'No Presente en Seno Maxilar',
		}
	}

	if type and type != 'todas' and to_filter != '_type':
		query = query.filter(m.Injury._type == type)

	print(type)
	print(query)

	qresults = query.all()

	qresults = list(filter(lambda x: not(x[0] == '' or x[0] == None), qresults))

	if to_filter and to_filter == 'age':
		default_age = {
			'MENOR DE 20': 0,
			'20-30': 0,
			'31-40': 0,
			'41-50': 0,
			'51-60': 0,
			'61-70': 0,
			'71-80': 0,
			'MAS DE 80': 0
		}

		for result in qresults:
			percentil = result[0]
			data = result[1]

			if percentil < 20:
				default_age['MENOR DE 20'] += data
			elif percentil < 31:
				default_age['20-30'] += data
			elif percentil < 41:
				default_age['31-40'] += data
			elif percentil < 51:
				default_age['41-50'] += data
			elif percentil < 61:
				default_age['51-60'] += data
			elif percentil < 71:
				default_age['61-70'] += data
			elif percentil < 81:
				default_age['71-80'] += data
			else:
				default_age['MAS DE 80'] += data

		qresults = [
			(k,v)
			for k,v in default_age.items()
		]

	results = []
	for result in qresults:
		filter_name = filter_mapper.get(to_filter)

		if isinstance(filter_name, dict):
			name = filter_name.get(result[0])
		else:
			name = result[0]

		results.append({ 'name': str(name), 'value': result[1] })

	total = sum(map(lambda r: r['value'], results))

	print(results)
	print('results')

	for index, result in enumerate(results):
		print(result)
		if total:
			results[index]['name'] = '{}      %{}'.format(
				result['name'],
				round((result['value']/total)*100, 2)
			)
		else:
			results[index]['name'] = '{}      %{}'.format(
				result['name'],
				0
			)
	print(results)

	return jsonify(results)