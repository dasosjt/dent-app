export const DEFAULT_LOCATION = {
	'location': '',
	'position': '',
	'_type': '',
	'branch_mandibula': null,
	'body_mandibula': false,
	'sinus_maxilar': false
}

export const DEFAULT_TOOTH = {
	'location': '',
	'_type': ''
}

export const REGISTER = [
	{ key: 'pi', text: 'PI', value: 'PI' },
	{ key: 'pt', text: 'PT', value: 'PT' },
	{ key: 'pce', text: 'PCE', value: 'PCE' }
]

export const GENDER = [
	{ key: 'm', text: 'Hombre', value: 'Hombre' },
	{ key: 'f', text: 'Mujer', value: 'Mujer' }
]

export const _TYPE = [
	{ key: 'l', text: 'Lucente', value: 'Lucente' },
	{ key: 'o', text: 'Opaca', value: 'Opaca' },
	{ key: 'm', text: 'Mixta', value: 'Mixta' }
]

export const FORM = [
	{ key: 'c', text: 'Circular', value: 'Circular' },
	{ key: 'o', text: 'Ovalada', value: 'Ovalada' },
	{ key: 't', text: 'Triangular', value: 'Triangular' },
	{ key: 'r', text: 'Rectangular', value: 'Rectangular' },
	{ key: 'tr', text: 'Trapezoidal', value: 'Trapezoidal' },
	{ key: 'cu', text: 'Cuadrada', value: 'Cuadrada' },
	{ key: 'ir', text: 'Irregular', value: 'Irregular' },
	{ key: 's', text: 'Semi Circular', value: 'Semi Circular' }
]

export const OP3 = [
	{ key: 'de', text: 'Definidos Esclerotico', value: 'Definidos Esclerotico' },
	{ key: 'dn', text: 'Definidos No Esclerotico', value: 'Definidos No Esclerotico' },
	{ key: 'di', text: 'Difusos', value: 'Difusos' }
]

export const LOCATION = index => [
	{ 
		key: 'bl-ligamento' + index,
		text: 'Ligamento Estilohioideo',
		value: {
			'name': 'Ligamento Estilohioideo',
			'type': 'Blando'
		}
	},
	{ 
		key: 'bl-lengua' + index,
		text: 'Lengua',
		value: {
			'name': 'Lengua',
			'type': 'Blando'
		}
	},
	{ 
		key: 'bl-glandula' + index, 
		text: 'Glandula Tiroides', 
		value: {
			'name': 'Glandula Tiroides',
			'type': 'Blando'
		}
	},
	{ 
		key: 'bl-amigdala' + index, 
		text: 'Amigdala',
		value: {
			'name': 'Amigdala',
			'type': 'Blando'
		}
	},
	{ 
		key: 'du-huesonasal' + index,
		text: 'Hueso Nasal',
		value: {
			'name': 'Hueso Nasal',
			'type': 'Duro'
		}
	},
	{
		key: 'du-huesotemp' + index,
		text: 'Hueso Temporal',
		value: {
			'name': 'Hueso Temporal',
			'type': 'Duro'
		}
	},
	{
		key: 'du-huesocigo' + index,
		text: 'Hueso Cigomatico',
		value: {
			'name': 'Hueso Cigomatico',
			'type': 'Duro'
		}
	},
	{
		key: 'du-fosanasal' + index,
		text: 'Fosa Nasal',
		value: {
			'name': 'Fosa Nasal',
			'type': 'Duro'
		}
	},
	{
		key: 'du-huesohio' + index,
		text: 'Hueso Hioides',
		value: {
			'name': 'Hueso Hioides',
			'type': 'Duro'
		}
	},
	{
		key: 'du-vertebras' + index,
		text: 'Vertebras Cervicales',
		value: {
			'name': 'Vertebras Cervicales',
			'type': 'Duro'
		}
	},
	{
		key: 'du-maxilar' + index,
		text: 'Maxilar',
		value: {
			'name': 'Maxilar',
			'type': 'Duro'
		}
	},
	{
		key: 'du-mandibula' + index,
		text: 'Mandíbula',
		value: {
			'name': 'Mandíbula',
			'type': 'Duro'
		}
	},
	//3er nivel de maxilar
	{
		key: 'du-paredpos' + index,
		text: 'Pared Posterior',
		value: {
			'name': 'Pared Posterior',
			'type': 'Duro'
		}
	},
	//3er nivel de maxilar
	{
		key: 'du-paredant' + index,
		text: 'Pared Anterior',
		value: {
			'name': 'Pared Anterior',
			'type': 'Duro'
		}
	},
	//4to nivel de maxilar
	{
		key: 'du-techo' + index,
		text: 'Techo',
		value: {
			'name': 'Techo',
			'type': 'Duro'
		}
	},
	//4to nivel de maxilar
	{
		key: 'du-piso' + index,
		text: 'Piso',
		value: {
			'name': 'Piso',
			'type': 'Duro'
		}
	},
	{
		key: 'ae-oro' + index,
		text: 'Orofaringe',
		value: {
			'name': 'Orofaringe',
			'type': 'Aéreo'
		}
	},
	{
		key: 'ae-naso' + index,
		text: 'Nasofaringe',
		value: {
			'name': 'Nasofaringe',
			'type': 'Aéreo'
		}
	},
	{
		key: 'ae-hipo' + index,
		text: 'Hipofaringe',
		value: {
			'name': 'Hipofaringe',
			'type': 'Aéreo'
		}
	},
]

export const POSITION = index => [
	{ key: 'de' + index, text: 'Derecho', value: 'Derecho' },
	{ key: 'di' + index, text: 'Izquierdo', value: 'Izquierdo' }
]

export const MANDIBULA_BRANCH = index => [
	{ key: 'rama' + index, text: 'Rama Mandibular', value: 'Rama Mandibular' },
	{ key: 'con' + index, text: 'Cóndilo Mandibular', value: 'Condilo Mandibular' },
	{ key: 'apo' + index, text: 'Apófisis Coronoides', value: 'Apófisis Coronoides' }
]

export const OP5_TYPE = [
	{ key: 'r', text: 'Raices Dentarias', value: 'Raices Dentarias' },
	{ key: 'c', text: 'Coronas Dentarias', value: 'Coronas Dentarias' },
	{ key: 'o', text: 'Óseas', value: 'Óseas' }
]