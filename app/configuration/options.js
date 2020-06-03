export const DEFAULT_LOCATION = {
    'location': '',
    'position': '',
    '_type': '',
    'branch_mandibula': '',
    'body_mandibula': false,
    'sinus_maxilar': false,
    'sinus_maxilar_wall': ''
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
    { key: 's', text: 'Semi Circular', value: 'Semi Circular' },
    { key: 'l', text: 'Lineal', value: 'Lineal' }
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
    { key: 'di' + index, text: 'Izquierdo', value: 'Izquierdo' },
    { key: 'bi' + index, text: 'Bilateral', value: 'Bilateral' }
]

export const MANDIBULA_BRANCH = index => [
    { key: 'null' + index, text: 'No aplica', value: '' },
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
    { key: 'null' + index, text: 'No aplica', value: '' },
    { key: 'ant' + index, text: 'Pared Anterior', value: 'Pared Anterior' },
    { key: 'post' + index, text: 'Pared Posterior', value: 'Pared Posterior' },
    { key: 'techo' + index, text: 'Techo', value: 'Techo' },
    { key: 'piso' + index, text: 'Piso', value: 'Piso' }
]

export const MENUITEMS = currentType => [
    {
        title: 'Tipo de Lesión',
        filter: '_type',
        chartTitle: `Prevalencia de lesiones ${currentType} según tipo`,
    },
    {
        title: 'Edad',
        filter: 'age',
        chartTitle: `Prevalencia de lesiones ${currentType} según edad`,
    },
    {
        title: 'Género',
        filter: 'gender',
        chartTitle: `Prevalencia de lesiones ${currentType} según género`,
    },
    {
        title: 'Tipo de Registro',
        filter: 'register',
        chartTitle: `Prevalencia de lesiones ${currentType} según registro`,
    },
    {
        title: 'Única-Múltiple',
        filter: 'op1',
        chartTitle: `Prevalencia de lesiones ${currentType} según cantidad`,
    },
    {
        title: 'Unilocular-Multilocular',
        filter: 'op2',
        chartTitle: `Prevalencia de lesiones ${currentType} según compartimientos`,
    },
    {
        title: 'Formas',
        filter: 'form',
        chartTitle: `Prevalencia de lesiones ${currentType} según forma`,
    },
    {
        title: 'Bordes',
        filter: 'op3',
        chartTitle: `Prevalencia de lesiones ${currentType} según tipo de bordes`,
    },
    {
        title: 'Localización',
        filter: 'location_sub',
        chartTitle: `Prevalencia de lesiones ${currentType} según localización`,
        sub: [
            {
                title: 'Localización',
                filter: 'location_sub',
                chartTitle: `Prevalencia de lesiones ${currentType} según localización`,
            },
            {
                title: 'Tipo',
                filter: 'location_div',
                chartTitle: `Prevalencía de lesiones ${currentType} según la estructura o espacio que ocupa`,
            },
            {
                title: 'Tejido Blando',
                filter: 'location_div_0',
                chartTitle: `Prevalencia de lesiones ${currentType} en tejidos blandos`,
                sub: [
                    {
                        title: 'Tejido Blando',
                        filter: 'location_div_0',
                        chartTitle: `Prevalencia de lesiones ${currentType} en tejidos blandos`,
                    },
                    {
                        title: 'Ligamento Estilohioideo',
                        filter: 'location_estilohioideo_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en ligamento estilohioideo`,
                    },
                    {
                        title: 'Lengua',
                        filter: 'location_lengua_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en lengua`,
                    },
                    {
                        title: 'Glándula Tiroides',
                        filter: 'location_tiroides_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en glándula tiroides`,
                    },
                    {
                        title: 'Amígdala',
                        filter: 'location_amigdala_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en amígdala`,
                    },
                    {
                        title: 'Tejido Blando de Nariz',
                        filter: 'location_blnariz_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en tejido blando de nariz`,
                    },
                ]
            },
            {
                title: 'Tejido Duro',
                filter: 'location_div_1',
                chartTitle: `Prevalencia de lesiones ${currentType} en tejidos duros`,
                sub: [
                    {
                        title: 'Tejido Duro',
                        filter: 'location_div_1',
                        chartTitle: `Prevalencia de lesiones ${currentType} en tejidos duros`,
                    },
                    {
                        title: 'Mandíbula',
                        filter: 'location_mandibula_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en mandíbula`,
                        sub: [
                            {
                                title: 'Mandíbula',
                                filter: 'location_mandibula_position',
                                chartTitle: `Prevalencia de lesiones ${currentType} en mandíbula`,
                            },
                            {
                                title: 'Cuerpo de la Mandíbula',
                                filter: 'location_body_mandibula',
                                chartTitle: `Prevalencia de lesiones ${currentType} en cuerpo de la mandíbula`,
                            },
                            {
                                title: 'Rama Mandibular',
                                filter: 'location_branch_mandibula',
                                chartTitle: `Prevalencia de lesiones ${currentType} en rama mandibular`,
                            },
                        ]
                    },
                    {
                        title: 'Maxilar',
                        filter: 'location_maxilar_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en maxilar`,
                        sub: [
                            {
                                title: 'Maxilar',
                                filter: 'location_maxilar_position',
                                chartTitle: `Prevalencia de lesiones ${currentType} en maxilar`,
                            },
                            {
                                title: 'Seno Maxilar',
                                filter: 'location_sinus_maxilar',
                                chartTitle: `Prevalencia de lesiones ${currentType} en seno maxilar`,
                            },
                            {
                                title: 'Peredes del Seno Maxilar',
                                filter: 'location_sinus_maxilar_wall',
                                chartTitle: `Prevalencia de lesiones ${currentType} en paredes del seno maxilar`,
                            },
                        ]
                    },
                    {
                        title: 'Hueso Nasal',
                        filter: 'location_nasal_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en hueso nasal`,
                    },
                    {
                        title: 'Espacio de Fosas Nasales',
                        filter: 'location_fosa_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en espacio de fosas nasales`,
                    },
                    {
                        title: 'Hueso Temporal',
                        filter: 'location_temporal_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en hueso temporal`,
                    },
                    {
                        title: 'Hueso Cigomático',
                        filter: 'location_cigomatico_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en hueso cigomático`,
                    },
                    {
                        title: 'Hueso Hioides',
                        filter: 'location_hioides_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en hueso hioides`,
                    },
                    {
                        title: 'Vertebras Cervicales',
                        filter: 'location_cervicales_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en vertebras cervicales`,
                    },
                ]
            },
            {
                title: 'Espacio Aéreo',
                filter: 'location_div_2',
                chartTitle: `Prevalencia de lesiones ${currentType} en espacios aéreos`,
                sub: [
                    {
                        title: 'Espacio Aéreo',
                        filter: 'location_div_2',
                        chartTitle: `Prevalencia de lesiones ${currentType} en espacios aéreos`,
                    },
                    {
                        title: 'Espacio de Orofaringe',
                        filter: 'location_oro_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en espacio de orofaringe`,
                    },
                    {
                        title: 'Espacio de Nasofaringe',
                        filter: 'location_naso_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en espacio de nasofaringe`,
                    },
                    {
                        title: 'Espacio de Hipofaringe',
                        filter: 'location_hipo_position',
                        chartTitle: `Prevalencia de lesiones ${currentType} en espacio de hipofaringe`,
                    },
                ]
            },
        ]
    },
    {
        title: 'Eje Mayor',
        filter: 'size_0',
        chartTitle: `Prevalencia de lesiones ${currentType} según eje mayor`,
    },
    {
        title: 'Eje Menor',
        filter: 'size_1',
        chartTitle: `Prevalencia de lesiones ${currentType} según eje menor`,
    },
    {
        title: 'Diametro',
        filter: 'size_2',
        chartTitle: `Prevalencia de lesiones ${currentType} según diametro`,
    },
    {
        title: 'Asociada',
        filter: 'op4',
        chartTitle: `Prevalencia de lesiones ${currentType} asociadas a piezas dentales`,
        sub: [
            {
                title: 'Asociada',
                filter: 'op4',
                chartTitle: `Prevalencia de lesiones ${currentType} asociadas a piezas dentales`,
            },
            {
                title: 'Asociada Pieza Dental',
                filter: 'op4_super',
                chartTitle: `Frecuencia de piezas dentales asociadas por lesiones ${currentType}`,
            },
        ]
    },
    {
        title: 'Reabsorción',
        filter: 'op5',
        chartTitle: `Prevalencia de lesiones ${currentType} provocando reabsorción`,
        sub: [
            {
                title: 'Reabsorción',
                filter: 'op5',
                chartTitle: `Prevalencia de lesiones ${currentType} provocando reabsorción`,
            },
            {
                title: 'Reabsorción Tipo',
                filter: 'op5_type',
                chartTitle: `Prevalencia de lesiones ${currentType} según tipo de reabsorción`,
            },
        ]
    },
    {
        title: 'Desplazamiento',
        filter: 'op6',
        chartTitle: `Prevalencia de lesiones ${currentType} con desplazamiento de piezas dentales`,
        sub: [
                {
                    title: 'Desplazamiento',
                    filter: 'op6',
                    chartTitle: `Prevalencia de lesiones ${currentType} con desplazamiento de piezas dentales`,
                },
                {
                    title: 'Desplazamiento Pieza Dental',
                    filter: 'op6_super',
                    chartTitle: `Frecuencia de piezas dentales desplazadas por lesiones ${currentType}`,
                },
        ]
    },
    {
        title: 'Expansión de Corticales',
        filter: 'op7',
        chartTitle: `Prevalencia de lesiones ${currentType} con expansión de corticales`,
    },
    {
        title: 'Pieza Incluida',
        filter: 'op8',
        chartTitle: `Prevalencia de lesiones ${currentType} con piezas dentales incluidas`,
        sub: [
            {
                title: 'Pieza Incluida',
                filter: 'op8',
                chartTitle: `Prevalencia de lesiones ${currentType} con piezas dentales incluidas`,
            },
            {
                title: 'Número de Pieza Incluida',
                filter: 'op8_super',
                chartTitle: `Frecuencia de piezas dentales incluidas por lesiones ${currentType}`,
            },
        ]
    },
    {
        title: 'Diagnóstico Diferencial 1',
        filter: 'dif1',
        chartTitle: `Prevalencia de Diagnóstico diferencial 1 de lesiones ${currentType}`,
    },
    {
        title: 'Diagnóstico Diferencial 2',
        filter: 'dif2',
        chartTitle: `Prevalencia de Diagnóstico diferencial 2 de lesiones ${currentType}`,
    },
    {
        title: 'Diagnóstico Diferencial 3',
        filter: 'dif3',
        chartTitle: `Prevalencia de Diagnóstico diferencial 3 de lesiones ${currentType}`,
    },
]

export const COLORS = [
    "#0D855D",
    "#1B8F68",
    "#14CC8F",
    "#3DFFBD",
    "#1AFFBA"
]