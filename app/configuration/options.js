export const DEFAULT_LOCATION = {
    'location': '',
    'position': '',
    '_type': '',
    'branch_mandibula': null,
    'body_mandibula': false,
    'sinus_maxilar': false,
    'sinus_maxilar_wall': null
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
    { key: 'de', text: 'Definidos Esclerótico', value: 'Definidos Esclerótico' },
    { key: 'dn', text: 'Definidos No Esclerótico', value: 'Definidos No Esclerótico' },
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
        text: 'Glándula Tiroides',
        value: {
            'name': 'Glándula Tiroides',
            'type': 'Blando'
        }
    },
    {
        key: 'bl-amigdala' + index,
        text: 'Amígdala',
        value: {
            'name': 'Amígdala',
            'type': 'Blando'
        }
    },
    {
        key: 'bl-nariz' + index,
        text: 'Tejido Blando de Nariz',
        value: {
            'name': 'Tejido Blando de Nariz',
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
        text: 'Hueso Cigomático',
        value: {
            'name': 'Hueso Cigomático',
            'type': 'Duro'
        }
    },
    {
        key: 'du-espacionasal' + index,
        text: 'Espacio de Fosas Nasales',
        value: {
            'name': 'Espacio de Fosas Nasales',
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
    {
        key: 'ae-oro' + index,
        text: 'Espacio de Orofaringe',
        value: {
            'name': 'Espacio de Orofaringe',
            'type': 'Aéreo'
        }
    },
    {
        key: 'ae-naso' + index,
        text: 'Espacio de Nasofaringe',
        value: {
            'name': 'Espacio de Nasofaringe',
            'type': 'Aéreo'
        }
    },
    {
        key: 'ae-hipo' + index,
        text: 'Espacio de Hipofaringe',
        value: {
            'name': 'Espacio de Hipofaringe',
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
    { key: 'con' + index, text: 'Cóndilo Mandibular', value: 'Cóndilo Mandibular' },
    { key: 'apo' + index, text: 'Apófisis Coronoides', value: 'Apófisis Coronoides' }
]

export const OP5_TYPE = [
    { key: 'r', text: 'Raices Dentarias', value: 'Raices Dentarias' },
    { key: 'c', text: 'Coronas Dentarias', value: 'Coronas Dentarias' },
    { key: 'o', text: 'Óseas', value: 'Óseas' }
]

export const SINUS_MAXILAR_WALL = index => [
    { key: 'ant' + index, text: 'Pared Anterior', value: 'Pared Anterior' },
    { key: 'post' + index, text: 'Pared Posterior', value: 'Pared Posterior' },
    { key: 'techo' + index, text: 'Techo', value: 'Techo' },
    { key: 'piso' + index, text: 'Piso', value: 'Piso' }
]

export const MENUITEMS = currentType => [
    {
        title: 'Edad',
        filter: 'age',
        chartTitle: `Lesiones ${currentType} según edad`,
    },
    {
        title: 'Género',
        filter: 'gender',
        chartTitle: `Lesiones ${currentType} según género`,
    },
    {
        title: 'Tipo de Registro',
        filter: 'register',
        chartTitle: `Lesiones ${currentType} según registro`,
    },
    {
        title: 'Única-Múltiple',
        filter: 'op1',
        chartTitle: `Lesiones ${currentType} según cantidad`,
    },
    {
        title: 'Unilocular-Multilocular',
        filter: 'op2',
        chartTitle: `Lesiones ${currentType} según compartimientos`,
    },
    {
        title: 'Formas',
        filter: 'form',
        chartTitle: `Lesiones ${currentType} según forma`,
    },
    {
        title: 'Bordes',
        filter: 'op3',
        chartTitle: `Lesiones ${currentType} según bordes`,
    },
    {
        title: 'Localización',
        filter: 'location_sub',
        chartTitle: `Lesiones ${currentType} según localización`,
        sub: [
            {
                title: 'Localización',
                filter: 'location_sub',
                chartTitle: `Lesiones ${currentType} según localización`,
            },
            {
                title: 'Tipo',
                filter: 'location_div',
                chartTitle: `Lesiones ${currentType} según tipo`,
            },
            {
                title: 'Tejido Blando',
                filter: 'location_div_0',
                chartTitle: `Lesiones ${currentType} en tejidos blandos`,
                sub: [
                    {
                        title: 'Tejido Blando',
                        filter: 'location_div_0',
                        chartTitle: `Lesiones ${currentType} en tejidos blandos`,
                    },
                    {
                        title: 'Ligamento Estilohioideo',
                        filter: 'location_estilohioideo_position',
                        chartTitle: `Lesiones ${currentType} en ligamento estilohioideo`,
                    },
                    {
                        title: 'Lengua',
                        filter: 'location_lengua_position',
                        chartTitle: `Lesiones ${currentType} en lengua`,
                    },
                    {
                        title: 'Glándula Tiroides',
                        filter: 'location_tiroides_position',
                        chartTitle: `Lesiones ${currentType} en glándula tiroides`,
                    },
                    {
                        title: 'Amígdala',
                        filter: 'location_amigdala_position',
                        chartTitle: `Lesiones ${currentType} en amígdala`,
                    },
                    {
                        title: 'Tejido Blando de Nariz',
                        filter: 'location_blnariz_position',
                        chartTitle: `Lesiones ${currentType} en tejido blando de nariz`,
                    },
                ]
            },
            {
                title: 'Tejido Duro',
                filter: 'location_div_1',
                chartTitle: `Lesiones ${currentType} en tejidos duros`,
                sub: [
                    {
                        title: 'Tejido Duro',
                        filter: 'location_div_1',
                        chartTitle: `Lesiones ${currentType} en tejidos duros`,
                    },
                    {
                        title: 'Mandíbula',
                        filter: 'location_mandibula_position',
                        chartTitle: `Lesiones ${currentType} en mandíbula`,
                        sub: [
                            {
                                title: 'Mandíbula',
                                filter: 'location_mandibula_position',
                                chartTitle: `Lesiones ${currentType} en mandíbula`,
                            },
                            {
                                title: 'Cuerpo de la Mandíbula',
                                filter: 'location_body_mandibula',
                                chartTitle: `Lesiones ${currentType} en cuerpo de la mandíbula`,
                            },
                            {
                                title: 'Rama Mandibular',
                                filter: 'location_branch_mandibula',
                                chartTitle: `Lesiones ${currentType} en rama mandibular`,
                            },
                        ]
                    },
                    {
                        title: 'Maxilar',
                        filter: 'location_maxilar_position',
                        chartTitle: `Lesiones ${currentType} en maxilar`,
                        sub: [
                            {
                                title: 'Maxilar',
                                filter: 'location_maxilar_position',
                                chartTitle: `Lesiones ${currentType} en maxilar`,
                            },
                            {
                                title: 'Seno Maxilar',
                                filter: 'location_sinus_maxilar',
                                chartTitle: `Lesiones ${currentType} en seno maxilar`,
                            },
                            {
                                title: 'Partes del Seno Maxilar',
                                filter: 'location_sinus_maxilar_wall',
                                chartTitle: `Lesiones ${currentType} en paredes del seno maxilar`,
                            },
                        ]
                    },
                    {
                        title: 'Hueso Nasal',
                        filter: 'location_nasal_position',
                        chartTitle: `Lesiones ${currentType} en hueso nasal`,
                    },
                    {
                        title: 'Espacio de Fosas Nasales',
                        filter: 'location_fosa_position',
                        chartTitle: `Lesiones ${currentType} en espacio de fosas nasales`,
                    },
                    {
                        title: 'Hueso Temporal',
                        filter: 'location_temporal_position',
                        chartTitle: `Lesiones ${currentType} en hueso temporal`,
                    },
                    {
                        title: 'Hueso Cigomático',
                        filter: 'location_cigomatico_position',
                        chartTitle: `Lesiones ${currentType} en hueso cigomático`,
                    },
                    {
                        title: 'Hueso Hioides',
                        filter: 'location_hioides_position',
                        chartTitle: `Lesiones ${currentType} en hueso hioides`,
                    },
                    {
                        title: 'Vertebras Cervicales',
                        filter: 'location_cervicales_position',
                        chartTitle: `Lesiones ${currentType} en vertebras cervicales`,
                    },
                ]
            },
            {
                title: 'Espacio Aéreo',
                filter: 'location_div_2',
                chartTitle: `Lesiones ${currentType} en espacios aéreos`,
                sub: [
                    {
                        title: 'Espacio Aéreo',
                        filter: 'location_div_2',
                        chartTitle: `Lesiones ${currentType} en espacios aéreos`,
                    },
                    {
                        title: 'Espacio de Orofaringe',
                        filter: 'location_oro_position',
                        chartTitle: `Lesiones ${currentType} en espacio de orofaringe`,
                    },
                    {
                        title: 'Espacio de Nasofaringe',
                        filter: 'location_naso_position',
                        chartTitle: `Lesiones ${currentType} en espacio de nasofaringe`,
                    },
                    {
                        title: 'Espacio de Hipofaringe',
                        filter: 'location_hipo_position',
                        chartTitle: `Lesiones ${currentType} en espacio de hipofaringe`,
                    },
                ]
            },
        ]
    },
    {
        title: 'Asociada',
        filter: 'op4',
        chartTitle: `Lesiones ${currentType} asociadas a piezas dentales`,
        sub: [
            {
                title: 'Asociada',
                filter: 'op4',
                chartTitle: `Lesiones ${currentType} asociadas a piezas dentales`,
            },
            {
                title: 'Asociada Pieza Dental',
                filter: 'op4_super',
                chartTitle: `Lesiones ${currentType} asociadas a piezas dentales`,
            },
        ]
    },
    {
        title: 'Reabsorción',
        filter: 'op5',
        chartTitle: `Lesiones ${currentType} provocando reabsorción`,
        sub: [
            {
                title: 'Reabsorción',
                filter: 'op5',
                chartTitle: `Lesiones ${currentType} provocando reabsorción`,
            },
            {
                title: 'Reabsorción Tipo',
                filter: 'op5_type',
                chartTitle: `Lesiones ${currentType} según tipo de reabsorción`,
            },
        ]
    },
    {
        title: 'Desplazamiento',
        filter: 'op6',
        chartTitle: `Lesiones ${currentType} con desplazamiento de piezas dentales`,
        sub: [
                {
                    title: 'Desplazamiento',
                    filter: 'op6',
                    chartTitle: `Lesiones ${currentType} con desplazamiento de piezas dentales`,
                },
                {
                    title: 'Desplazamiento Pieza Dental',
                    filter: 'op6_super',
                    chartTitle: `Lesiones ${currentType} con desplazamiento de piezas dentales`,
                },
        ]
    },
    {
        title: 'Expansión de Corticales',
        filter: 'op7',
        chartTitle: `Lesiones ${currentType} con expansión de corticales`,
    },
    {
        title: 'Pieza Incluida',
        filter: 'op8',
        chartTitle: `Lesiones ${currentType} con piezas dentales incluidas`,
        sub: [
            {
                title: 'Pieza Incluida',
                filter: 'op8',
                chartTitle: `Lesiones ${currentType} con piezas dentales incluidas`,
            },
            {
                title: 'Número de Pieza Incluida',
                filter: 'op8_super',
                chartTitle: `Lesiones ${currentType} con piezas dentales incluidas`,
            },
        ]
    },
    {
        title: 'Diagnóstico Diferencial 1',
        filter: 'dif1',
        chartTitle: `Diagnóstico diferencial 1 de lesiones ${currentType}`,
    },
    {
        title: 'Diagnóstico Diferencial 2',
        filter: 'dif2',
        chartTitle: `Diagnóstico diferencial 2 de lesiones ${currentType}`,
    },
    {
        title: 'Diagnóstico Diferencial 3',
        filter: 'dif3',
        chartTitle: `Diagnóstico diferencial 3 de lesiones ${currentType}`,
    },
]