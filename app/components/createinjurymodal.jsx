import { Component } from 'react'
import { 
  Form,
  Button,
  Modal,
  Input,
  Select,
  Segment,
  Icon,
  Checkbox
} from 'semantic-ui-react'
import CSS from './css'
import { range } from '../utils/functions'

const DEFAULT_LOCATION = {
	'location': '',
	'_type': '',
	'position': ''
}

const BL = 0
const DU = 1
const AE = 2

export default class CreateInjuryModal extends Component {
	teethOptions = []

	constructor(props){
		super(props)

		this.state = {
			'modalOpen': false,
			'locations': [{ ...DEFAULT_LOCATION }],
			'size_0': null,
			'size_1': null,
			'op5_type': null,
			
		}

		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.teethOptions = this.initTeethOptions()

		console.log(this.teethOptions)
	}

	initTeethOptions(){
		const teethRange = range(1, 32).map(
			number => {
				const numberString = number.toString()
				return {
					'key': numberString,
					'value': numberString,
					'text': numberString 
				}
			}
		)

		return [
			...teethRange,
			{ 'key': 'sp', 'value': 'Super Numeraria', 'text': 'Super Numeraria'  }
		]
	}

	handleOpen(){
		this.setState({ 'modalOpen': true })
	}

	handleClose(){
		this.setState({ 'modalOpen': false })
	}

	handleChange = (e, { name, value, checked }) => {
		if (value === undefined && checked !== undefined) {
			value = checked;
		}

		this.setState({ [name]: value })
	}

	handleLocationChange = (e, { name, value }) => {
		if(name <= this.state.locations.length - 1){
			let locations = this.state.locations

			locations[name]['location'] = value['name']
			locations[name]['_type'] = value['type']

			this.setState({ 'locations':  locations })
		}
	}

	handlePositionChange = (e, { name, value }) => {
		if(name <= this.state.locations.length - 1){
			let locations = this.state.locations
			locations[name]['position'] = value

			this.setState({ 'locations':  locations })
		}
	}

	addLocation = e => {
		e.preventDefault()
		this.setState(state => ({
			...state,
			'locations': [ 
				...state.locations, 
				{ ...DEFAULT_LOCATION } 
			]
		}))
	}

	removeLocation = e => {
		e.preventDefault()
		this.setState(state => {
			const locations = [ ...state.locations ]
			locations.pop()

			if(locations.length > 0){
				return {
					...state,
					locations,
				}
			} else {
				return {
					...state,
					'locations': state.locations,
				}
			}
		})
	}

	handleSubmit(){
		fetch('http://127.0.0.1:5000/injury', 
			{   
				method: 'POST',
				headers: new Headers({
					"Content-Type": "application/json",
					"Accept":"application/json"
				}),
				body: JSON.stringify(this.state)
			 })
			.then((response) => {
				this.handleClose()
			})
			.catch((error) => {
				//this.handleClose()
			})
	}

	render(){
		return (
			<Modal
				open={this.state.modalOpen}
				onClose={this.handleClose} 
				trigger={
					<Button 
						inverted 
						color='purple' 
						onClick={this.handleOpen}>
						Ingresar nueva lesión
					</Button>
				}>
				<Segment inverted>
				<Modal.Header 
					as='h1' 
					style={{ margin: 2 }}>
					<b>Nueva Lesión</b>
				</Modal.Header>
				<Modal.Content>
					<Modal.Description>
					<Form 
						onSubmit={this.handleSubmit}>
						<Form.Group widths='equal'>
							<Form.Field 
								required
								control={Input} 
								label='Nombre' 
								name='name'
								onChange={this.handleChange}/>
							<Form.Field 
								required 
								control={Input} 
								label='Apellido' 
								name='lastname'
								onChange={this.handleChange}/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field 
								required 
								control={Select} 
								label='Registro' 
								name='register'
								options={[
									{ key: 'pi', text: 'PI', value: 'pi', name: 'register' },
									{ key: 'pt', text: 'PT', value: 'pt' },
									{ key: 'pce', text: 'PCE', value: 'pce' }]}
								onChange={this.handleChange}/>
							<Form.Field 
								required 
								control={Input} 
								label='Registro' 
								name='register_num' 
								type='number'
								onChange={this.handleChange}/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field 
								required 
								control={Select} 
								label='Género' 
								name='gender'
								options={[
									{ key: 'm', text: 'Hombre', value: 'm' },
									{ key: 'f', text: 'Mujer', value: 'f' }]}
								onChange={this.handleChange}/>
							<Form.Field 
								required 
								control={Input} 
								label='Edad' 
								name='age' 
								type='number'
								onChange={this.handleChange}/>
						</Form.Group>
						<Form.Field 
							required 
							control={Select} 
							label='Aspecto General' 
							name='_type'
							options={[
								{ key: 'l', text: 'Lucente', value: 'l' },
								{ key: 'o', text: 'Opaca', value: 'o' },
								{ key: 'm', text: 'Mixta', value: 'm' }]}
							onChange={this.handleChange}/>
						<Form.Group inline>
							<Form.Radio
								label='Única'
								name='op1'
								value='u'
								checked={this.state.op1 === 'u'}
								onChange={this.handleChange}/>
							<Form.Radio
								label='Multiple'
								name='op1'
								value='m'
								checked={this.state.op1 === 'm'}
								onChange={this.handleChange}/>
						</Form.Group>
						<Form.Group inline>
							<Form.Radio
								label='Unilocular'
								name='op2'
								value='u'
								checked={this.state.op2 === 'u'}
								onChange={this.handleChange}/>
							<Form.Radio
								label='Multilocular'
								name='op2'
								value='m'
								checked={this.state.op2 === 'm'}
								onChange={this.handleChange}/>
						</Form.Group>
						<Form.Group inline>
							<Form.Field
								required 
								control={Select} 
								label='Forma' 
								name='form'
								options={[
									{ key: 'c', text: 'Circular', value: 'c' },
									{ key: 'o', text: 'Ovalada', value: 'o' },
									{ key: 't', text: 'Triangular', value: 't' },
									{ key: 'r', text: 'Rectangular', value: 'r' },
									{ key: 'tr', text: 'Trapezoidal', value: 'tr' },
									{ key: 'cu', text: 'Cuadrada', value: 'cu' },
									{ key: 'ir', text: 'Irregular', value: 'ir' },
									{ key: 's', text: 'Semi Circular', value: 's' }]}
								onChange={this.handleChange}/>
							<Form.Field
								required 
								control={Select} 
								label='Bordes' 
								name='op3'
								options={[
									{ key: 'de', text: 'Definidos Esclerotico', value: 'de' },
									{ key: 'dn', text: 'Definidos No Esclerotico', value: 'dn' },
									{ key: 'di', text: 'Difusos', value: 'di' }]}
								onChange={this.handleChange}/>
						</Form.Group>
						{ 
							this.state.locations.map((obj, index) => (
								<Form.Group
									key={'location' + index}
									inline>
									<Form.Field
										required 
										control={Select}  
										name={index}
										label='Localización'
										options={[
											{ 
												key: 'bl-ligamento' + index,
												text: 'Ligamento Estilohioideo',
												value: {
													'name': 'Ligamento Estilohioideo',
													'type': BL
												}
											},
											{ 
												key: 'bl-lengua' + index,
												text: 'Lengua',
												value: {
													'name': 'Lengua',
													'type': BL
												}
											},
											{ 
												key: 'bl-glandula' + index, 
												text: 'Glandula Tiroides', 
												value: {
													'name': 'Glandula Tiroides',
													'type': BL
												}
											},
											{ 
												key: 'bl-amigdala' + index, 
												text: 'Amigdala',
												value: {
													'name': 'Amigdala',
													'type': BL
												}
											},
											{ 
												key: 'bl-huesonasal' + index,
												text: 'Hueso Nasal',
												value: {
													'name': 'Hueso Nasal',
													'type': BL
												}
											},
											{
												key: 'du-huesotemp' + index,
												text: 'Hueso Temporal',
												value: {
													'name': 'Hueso Temporal',
													'type': DU
												}
											},
											{
												key: 'du-huesocigo' + index,
												text: 'Hueso Cigomatico',
												value: {
													'name': 'Hueso Cigomatico',
													'type': DU
												}
											},
											{
												key: 'du-fosanasal' + index,
												text: 'Fosa Nasal',
												value: {
													'name': 'Fosa Nasal',
													'type': DU
												}
											},
											{
												key: 'du-huesohio' + index,
												text: 'Hueso Hioides',
												value: {
													'name': 'Hueso Hioides',
													'type': DU
												}
											},
											{
												key: 'du-vertebras' + index,
												text: 'Vertebras Cervicales',
												value: {
													'name': 'Vertebras Cervicales',
													'type': DU
												}
											},
											{
												key: 'du-maxilar' + index,
												text: 'Maxilar',
												value: {
													'name': 'Maxilar',
													'type': DU
												}
											},
											{
												key: 'du-mandibula' + index,
												text: 'Mandibula',
												value: {
													'name': 'Mandibula',
													'type': DU
												}
											},
											{
												key: 'du-paredpos' + index,
												text: 'Pared Posterior',
												value: {
													'name': 'Pared Posterior',
													'type': DU
												}
											},
											{
												key: 'du-paredant' + index,
												text: 'Pared Anterior',
												value: {
													'name': 'Pared Anterior',
													'type': DU
												}
											},
											{
												key: 'du-techo' + index,
												text: 'Techo',
												value: {
													'name': 'Techo',
													'type': DU
												}
											},
											{
												key: 'du-piso' + index,
												text: 'Piso',
												value: {
													'name': 'Piso',
													'type': DU
												}
											},
											{
												key: 'ae-oro' + index,
												text: 'Orofaringe',
												value: {
													'name': 'Orofaringe',
													'type': AE
												}
											},
											{
												key: 'ae-naso' + index,
												text: 'Nasofaringe',
												value: {
													'name': 'Nasofaringe',
													'type': AE
												}
											},
											{
												key: 'ae-hipo' + index,
												text: 'Hipofaringe',
												value: {
													'name': 'Hipofaringe',
													'type': AE
												}
											},
										]}
										onChange={this.handleLocationChange}/>
									<Form.Field
										required 
										control={Select}  
										name={index}
										label='Posición'
										options={[
											{ key: 'de' + index, text: 'Derecho', value: 'de' },
											{ key: 'di' + index, text: 'Izquierdo', value: 'di' }]}
										onChange={this.handlePositionChange}/>

									{ 
										obj.location === 'Mandibula' ?
											<Form.Field
												required
												control={Select}
												label='Rama'
												name={index}
												options={[
													{ key: 'con' + index, text: 'Condilo Mandibular', value: 'con' },
													{ key: 'apo' + index, text: 'Apofisis Coronoides', value: 'apo' }]}
												onChange={this.handleChange}/> : null
									}

									{ 
										obj.location === 'Mandibula' ?
											<Form.Field
												required
												control={Checkbox}
												label='Cuerpo' 
												name={index}
												onChange={this.handleChange}/> : null
									}

									{ 
										obj.location === 'Maxilar' ?
											<Form.Field
												required
												control={Checkbox}
												label='Seno Maxilar' 
												name={index}
												onChange={this.handleChange}/> : null
									}

									<br key={'br' + index}/>
									{
										(() => index === this.state.locations.length - 1 ?
										<div>
											<Button
												icon
												compact
												color='blue'
												onClick={this.addLocation}>
												<Icon name='plus'/>
											</Button> 
											<Button
												icon
												compact
												color='red'
												onClick={this.removeLocation}>
												<Icon name='x'/>
											</Button>
										</div>: null)()
									}
								</Form.Group>
							))
						}
						<Form.Group>
							<Form.Field 
								control={Input}
								label='Eje Mayor' 
								name='size_0'
								type='number'
								step='0.1'
								onChange={this.handleChange}/>
							<Form.Field
								control={Input}
								label='Eje Menor'  
								name='size_1'
								type='number'
								step='0.1'
								onChange={this.handleChange}/>
							<Form.Field
								required 
								control={Input} 
								label='Diametro' 
								name='size_2'
								type='number'
								step='0.1'
								onChange={this.handleChange}/>
							<label>mm</label>
						</Form.Group>
						<Form.Group inline>
							<Form.Radio
								label='Asociada'
								name='op4'
								value='a'
								checked={this.state.op4 === 'a'}
								onChange={this.handleChange}/>
							<Form.Radio
								label='No Asociado'
								name='op4'
								value='n'
								checked={this.state.op4 === 'n'}
								onChange={this.handleChange}/>
							{
								this.state.op4 === 'a' ? 
								<Form.Field
									required 
									control={Select} 
									label='Pieza'
									placeholder='Seleccionar Pieza Dental'
									name='op4_super'
									options={this.teethOptions}
									onChange={this.handleChange}/> :
								null
							}
						</Form.Group>
						<Form.Group inline>
							<Form.Radio
								label='Con Reabsorción'
								name='op5'
								value='c'
								checked={this.state.op5 === 'c'}
								onChange={this.handleChange}/>
							<Form.Radio
								label='Sin Reabsorción'
								name='op5'
								value='n'
								checked={this.state.op5 === 'n'}
								onChange={this.handleChange}/>
							{
								this.state.op5 === 'c' ? 
								<Form.Field
									required 
									control={Select} 
									label='Tipo' 
									name='op5_type'
									options={[
										{ key: 'r', text: 'Raices Dentarias', value: 'r' },
										{ key: 'c', text: 'Coronas Dentarias', value: 'c' },
										{ key: 'o', text: 'Óseas', value: 'o' }]}
									onChange={this.handleChange}/> :
								null
							}
						</Form.Group>
						<Form.Group inline>
							<Form.Radio
								label='Con Desplazamiento Piezas Dentarias'
								name='op6'
								value='c'
								checked={this.state.op6 === 'c'}
								onChange={this.handleChange}/>
							<Form.Radio
								label='Sin Desplazamiento Piezas Dentarias'
								name='op6'
								value='n'
								checked={this.state.op6 === 'n'}
								onChange={this.handleChange}/>
							{
								this.state.op6 === 'c' ? 
								<Form.Field
									required 
									control={Select} 
									label='Pieza'
									placeholder='Seleccionar Pieza Dental'
									name='op6_super'
									options={this.teethOptions}
									onChange={this.handleChange}/> :
								null
							}
						</Form.Group>
						<Form.Group inline>
							<Form.Radio
								label='Con Expansión de Corticales'
								name='op7'
								value='c'
								checked={this.state.op7 === 'c'}
								onChange={this.handleChange}/>
							<Form.Radio
								label='Sin Expansión de Corticales'
								name='op7'
								value='n'
								checked={this.state.op7 === 'n'}
								onChange={this.handleChange}/>
						</Form.Group>
						<Form.Group inline>
							<label><b>Diagnóstico Diferencial</b></label>
							<Form.Field
								required 
								control={Input}
								name='dif1'
								onChange={this.handleChange}/>
							<Form.Field
								required 
								control={Input}
								name='dif2'
								onChange={this.handleChange}/>
							<Form.Field 
								control={Input}
								name='dif3'
								onChange={this.handleChange}/>
						</Form.Group>
						<Button inverted color='purple' content='Enviar' type='submit'/>
						<Button inverted color='grey' content='Cancelar' onClick={this.handleClose}/>
					 </Form>
				  </Modal.Description>
				</Modal.Content>
				</Segment>
				<style jsx>{`
					b, label {
						color: white;
					}
				`}</style>
			</Modal>
		)
	}
}