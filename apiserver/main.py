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
		for injury in g.s.query(m.Injury).all()[:5]
	]

	return jsonify(injuries)

@app.route('/injury', methods=['POST'])
def create_injury():
	data = request.get_json()
	location_data = data['locations']
	tooth_data = data['tooths']

	injury = m.Injury.init(data)

	g.s.add(injury)
	g.s.flush()

	for _location in location_data:
		attr_dict = {
			k: _location[k]
			for k in m.InjuryLocation.default_attr()
			if k in _location
		}

		attr_dict['injury_id'] = injury.injury_id

		location = m.InjuryLocation(**attr_dict)

		g.s.add(location)

	for _tooth in tooth_data:
		attr_dict = {
			k: _tooth[k]
			for k in m.ToothLocation.default_attr()
			if k in _tooth
		}

		attr_dict['injury_id'] = injury.injury_id

		tooth = m.Injurytooth(**attr_dict)

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

@app.route('/injury/<type>/<filter>', methods=['GET'])
def filter_injury(type, filter):
	print(type)
	print(filter)

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
	
	if filter and filter == 'location_sub':
		query = location_sub
	elif filter and filter == 'location_div_0':
		query = location_sub.filter(m.InjuryLocation._type == 'Blando')
	elif filter and filter == 'location_div_1':
		query = location_sub.filter(m.InjuryLocation._type == 'Duro')
	elif filter and filter == 'location_div_2':
		query = location_sub.filter(m.InjuryLocation._type == 'Aéreo')
	elif filter and filter == 'location_estilohioideo_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Ligamento Estilohioideo'
		)
	elif filter and filter == 'location_lengua_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Lengua'
		)
	elif filter and filter == 'location_tiroides_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Glandula Tiroides'
		)
	elif filter and filter == 'location_amigdala_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Amigdala'
		)
	elif filter and filter == 'location_nasal_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Nasal'
		)
	elif filter and filter == 'location_temporal_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Temporal'
		)
	elif filter and filter == 'location_cigomatico_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Cigomatico'
		)
	elif filter and filter == 'location_fosa_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Fosa Nasal'
		)
	elif filter and filter == 'location_hioides_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hueso Hioides'
		)
	elif filter and filter == 'location_cervicales_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Vertebras Cervicales'
		)
	elif filter and filter == 'location_maxilar_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Maxilar'
		)
	elif filter and filter == 'location_mandibula_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Mandibula'
		)
	##Agregar a localizacion de maxilar
	elif filter and filter == 'location_posterior_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Pared Posterior'
		)
	##Agregar a localizacion de maxilar
	elif filter and filter == 'location_anterior_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Pared Anterior'
		)
	elif filter and filter == 'location_techo_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Techo'
		)
	elif filter and filter == 'location_piso_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Piso'
		)
	elif filter and filter == 'location_oro_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Orofaringe'
		)
	elif filter and filter == 'location_naso_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Nasofaringe'
		)
	elif filter and filter == 'location_hipo_position':
		query = location_sub_position.filter(
			m.InjuryLocation.location == 'Hipofaringe'
		)
	elif filter and filter == 'location_branch_mandibula':
		query = (
			query.query(
				m.InjuryLocation.branch_mandibula, 
				sql.func.count(m.InjuryLocation.branch_mandibula)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.filter(m.InjuryLocation.location == 'Mandibula')
			.group_by(m.InjuryLocation.branch_mandibula)
		)
	elif filter and filter == 'location_body_mandibula':
		query = (
			query.query(
				m.InjuryLocation.body_mandibula, 
				sql.func.count(m.InjuryLocation.body_mandibula)
			)
			.join(
				m.Injury,
				m.Injury.injury_id == m.InjuryLocation.injury_id
			)
			.filter(m.InjuryLocation.location == 'Mandibula')
			.group_by(m.InjuryLocation.body_mandibula)
		)
	elif filter and filter == 'location_sinus_maxilar':
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
	elif filter and filter == 'location_div':
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
	elif filter:
		query = (
			query.query(
				getattr(m.Injury, filter), 
				sql.func.count(m.Injury.injury_id)
			)
			.group_by(getattr(m.Injury, filter))
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

	if type:
		query = query.filter(m.Injury._type == type)

	print(query)

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