import { Component } from 'react'
import { 
  Form,
  Button,
  Modal,
  Input,
  Select,
  Segment
} from 'semantic-ui-react'
import CSS from './css'

export default class CreateInjuryModal extends Component {
	constructor(props){
		super(props)

		this.state = {
			'modalOpen': false
		}

		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleOpen(){
		this.setState({ 'modalOpen': true })
	}

	handleClose(){
		this.setState({ 'modalOpen': false })
	}

	handleSubmit(){
		this.handleClose();
	}

	render(){
		return (
		  	<Modal
		  		inverted
		  		open={this.state.modalOpen}
		  		onClose={this.handleClose} 
		  		trigger={<Button inverted color='purple' onClick={this.handleOpen}>Ingresar nueva lesión</Button>}>
		  		<Segment inverted>
			    <Modal.Header as='h1' style={{ margin: 2 }}><b>Nueva Lesión</b></Modal.Header>
			    <Modal.Content>
			    	<Modal.Description>
			    	<Form onSubmit={this.handleSubmit}>
				        <Form.Group widths='equal'>
				        	<Form.Field control={Input} label='Nombre' name='name'/>
				        	<Form.Field control={Input} label='Apellido' name='lastname'/>
				        </Form.Group>
				        <Form.Group widths='equal'>
				        	<Form.Field 
					          	control={Select} 
					          	label='Género' 
					          	name='gender'
					          	options={[
					          		{ key: 'm', text: 'Hombre', value: 'm' },
				  					{ key: 'f', text: 'Mujer', value: 'f' }]}/>
				  			<Form.Field control={Input} label='Edad' name='age' type='number'/>
				        </Form.Group>
				       	<Form.Field 
				          	control={Select} 
				          	label='Tipo' 
				          	name='type'
				          	options={[
				          		{ key: 'l', text: 'Lucente', value: 'l' },
			  					{ key: 'o', text: 'Opaca', value: 'o' },
			  					{ key: 'm', text: 'Mixta', value: 'm' }]}/>
				  		<Form.Group inline>
					        <Form.Radio
								label='Única'
								name='op1'
								value='u'/>
							<Form.Radio
								label='Multiple'
								name='op1'
								value='m'/>
						</Form.Group>
						<Form.Group inline>
					        <Form.Radio
								label='Unilocular'
								name='op2'
								value='u'/>
							<Form.Radio
								label='Multilocular'
								name='op2'
								value='m'/>
						</Form.Group>
						<Form.Group>
							<Form.Field control={Input} label='Forma' name='form'/>
							<Form.Field 
					          	control={Select} 
					          	label='Bordes' 
					          	name='op3'
					          	options={[
					          		{ key: 'e', text: 'Escleroticos', value: 'e' },
				  					{ key: 'n', text: 'No escleroticos', value: 'n' }]}/>
						</Form.Group>
						<Form.Group inline>
							<Form.Field control={Input} label='Localización' name='location' width={16}/>	
				        	<label><b>Tamaño</b></label>
				        	<Form.Field control={Input} name='size_1'/>
				        	<Form.Field control={Input} name='size_2'/>
				        	<label>pulg</label>
				        </Form.Group>
				        <Form.Group inline>
					        <Form.Radio
								label='Asociada'
								name='op3'
								value='a'/>
							<Form.Radio
								label='No asociado'
								name='op3'
								value='n'/>
						</Form.Group>
						<Form.Group inline>
					        <Form.Radio
								label='Con reabsorción'
								name='op4'
								value='c'/>
							<Form.Radio
								label='Sin reabsorción'
								name='op4'
								value='n'/>
						</Form.Group>
						<Form.Group inline>
					        <Form.Radio
								label='Con desplazamiento'
								name='op5'
								value='c'/>
							<Form.Radio
								label='Sin desplazamiento'
								name='op5'
								value='n'/>
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