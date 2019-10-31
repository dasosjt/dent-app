import { Component } from 'react'
import {
    Form,
    Button,
    Modal,
    Input,
    Select,
    Segment,
    Icon,
    Checkbox,
    Message
} from 'semantic-ui-react'
import CSS from './css'
import { range } from '../utils/functions'
import {
    DEFAULT_LOCATION, DEFAULT_TOOTH,
    REGISTER, GENDER, _TYPE,
    FORM, OP3, LOCATION, POSITION,
    MANDIBULA_BRANCH, OP5_TYPE
} from '../configuration/options'

const DEFAULT_INIT_STATE = {
    'modalOpen': false,
    'locations': [{ ...DEFAULT_LOCATION }],
    'tooths': [{ ...DEFAULT_TOOTH }],
    'op5_type': null,
    'error': null
}

export default class CreateInjuryModal extends Component {
    teethOptions = []

    constructor(props){
        super(props)

        this.state = Object.assign({}, DEFAULT_INIT_STATE)

        this.teethOptions = this.initTeethOptions()

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBranchChange = this.handleBranchChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleSinusChange = this.handleSinusChange.bind(this)
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
            {
                'key': 'sp',
                'value': 'Super Numeraria',
                'text': 'Super Numeraria'
            }
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

    handleBranchChange = (e, { name,  value }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['branch_mandibula'] = value

            this.setState({ 'locations':  locations })
        }
    }

    handleBodyChange = (index, { name, checked }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['body_mandibula'] = checked

            this.setState({ 'locations':  locations })
        }
    }

    handleSinusChange = (index, { name, checked }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['sinus_maxilar'] = checked

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

    addTooth = e => {
        e.preventDefault()
        this.setState(state => ({
            ...state,
            'tooths': [
                ...state.tooths,
                { ...DEFAULT_LOCATION }
            ]
        }))
    }

    removeTooth = e => {
        e.preventDefault()
        this.setState(state => {
            const tooths = [ ...state.tooths ]
            tooths.pop()

            if(tooths.length > 0){
                return {
                    ...state,
                    tooths,
                }
            } else {
                return {
                    ...state,
                    'tooths': state.tooths,
                }
            }
        })
    }

    handleSubmit(){
        fetch('http://127.0.0.1:5000/injury', {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                }),
                body: JSON.stringify(this.state)
             })
            .then((response) => {
                this.setState(DEFAULT_INIT_STATE)
                this.handleClose()
            })
            .catch((error) => {
                this.setState({ error });
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
                                options={REGISTER}
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
                                options={GENDER}
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
                            options={_TYPE}
                            onChange={this.handleChange}/>
                        <Form.Group inline>
                            <Form.Radio
                                label='Única'
                                name='op1'
                                value='Única'
                                checked={this.state.op1 === 'Única'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='Multiple'
                                name='op1'
                                value='Multiple'
                                checked={this.state.op1 === 'Multiple'}
                                onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Radio
                                label='Unilocular'
                                name='op2'
                                value='Unilocular'
                                checked={this.state.op2 === 'Unilocular'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='Multilocular'
                                name='op2'
                                value='Multilocular'
                                checked={this.state.op2 === 'Multilocular'}
                                onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Field
                                required 
                                control={Select} 
                                label='Forma' 
                                name='form'
                                options={FORM}
                                onChange={this.handleChange}/>
                            <Form.Field
                                required 
                                control={Select} 
                                label='Bordes' 
                                name='op3'
                                options={OP3}
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
                                        options={LOCATION(index)}
                                        onChange={this.handleLocationChange}/>
                                    <Form.Field
                                        required 
                                        control={Select}  
                                        name={index}
                                        label='Posición'
                                        options={POSITION(index)}
                                        onChange={this.handlePositionChange}/>

                                    { 
                                        obj.location === 'Mandíbula' ?
                                            <Form.Field
                                                control={Select}
                                                label='Rama'
                                                name={index}
                                                options={MANDIBULA_BRANCH(index)}
                                                onChange={this.handleBranchChange}/> : null
                                    }

                                    { 
                                        obj.location === 'Mandíbula' ?
                                            <Form.Field
                                                required
                                                control={Checkbox}
                                                label='Cuerpo'
                                                name={index}
                                                onChange={this.handleBodyChange}/> : null
                                    }

                                    { 
                                        obj.location === 'Maxilar' ?
                                            <Form.Field
                                                required
                                                control={Checkbox}
                                                label='Seno Maxilar' 
                                                name={index}
                                                onChange={this.handleSinusChange}/> : null
                                    }

                                    <br key={'br' + index}/>
                                    {
                                        controlOnlyToLast(
                                            index, this.state.locations, 
                                            this.addLocation, this.removeLocation
                                        )
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
                                value='Asociada'
                                checked={this.state.op4 === 'Asociada'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='No Asociado'
                                name='op4'
                                value='No Asociado'
                                checked={this.state.op4 === 'No Asociado'}
                                onChange={this.handleChange}/>
                            {
                                this.state.op4 === 'Asociada' ? 
                                /*<Form.Field
                                    required 
                                    control={Select} 
                                    label='Pieza'
                                    placeholder='Seleccionar Pieza Dental'
                                    name='op4_super'
                                    options={this.teethOptions}
                                    onChange={this.handleChange}/>*/
                                this.state.tooths.map((obj, index) => (
                                <Form.Group
                                    key={'tooth' + index}
                                    inline>
                                    <Form.Field
                                        required 
                                        control={Select}  
                                        name={index}
                                        label='Diente'
                                        options={this.teethOptions}
                                        onChange={this.handleTeethChange}/>
                                    <br key={'br' + index}/>
                                    {
                                        controlOnlyToLast(
                                            index, this.state.tooths, 
                                            this.addTooth, this.removeTooth
                                        )
                                    }
                                </Form.Group> )) : null
                            }
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Radio
                                label='Con Reabsorción'
                                name='op5'
                                value='Con Reabsorción'
                                checked={this.state.op5 === 'Con Reabsorción'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='Sin Reabsorción'
                                name='op5'
                                value='Sin Reabsorción'
                                checked={this.state.op5 === 'Sin Reabsorción'}
                                onChange={this.handleChange}/>
                            {
                                this.state.op5 === 'Con Reabsorción' ? 
                                <Form.Field
                                    required 
                                    control={Select} 
                                    label='Tipo' 
                                    name='op5_type'
                                    options={OP5_TYPE}
                                    onChange={this.handleChange}/> :
                                null
                            }
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Radio
                                label='Con Desplazamiento Piezas Dentarias'
                                name='op6'
                                value='Con Desplazamiento Piezas Dentarias'
                                checked={this.state.op6 === 'Con Desplazamiento Piezas Dentarias'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='Sin Desplazamiento Piezas Dentarias'
                                name='op6'
                                value='Sin Desplazamiento Piezas Dentarias'
                                checked={this.state.op6 === 'Sin Desplazamiento Piezas Dentarias'}
                                onChange={this.handleChange}/>
                            {
                                this.state.op6 === 'Con Desplazamiento Piezas Dentarias' ? 
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
                                value='Con Expansión de Corticales'
                                checked={this.state.op7 === 'Con Expansión de Corticales'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='Sin Expansión de Corticales'
                                name='op7'
                                value='Sin Expansión de Corticales'
                                checked={this.state.op7 === 'Sin Expansión de Corticales'}
                                onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Radio
                                label='Pieza Incluida'
                                name='op8'
                                value='Pieza Incluida'
                                checked={this.state.op8 === 'Pieza Incluida'}
                                onChange={this.handleChange}/>
                            <Form.Radio
                                label='Pieza No Incluida'
                                name='op8'
                                value='Pieza No Incluida'
                                checked={this.state.op8 === 'Pieza No Incluida'}
                                onChange={this.handleChange}/>
                            {
                                this.state.op8 === 'Pieza Incluida' ? 
                                <Form.Field
                                    required 
                                    control={Select} 
                                    label='Pieza'
                                    placeholder='Seleccionar Pieza Dental'
                                    name='op8_super'
                                    options={this.teethOptions}
                                    onChange={this.handleChange}/> :
                                null
                            }
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
                        {
                            this.state.error ?
                            <Message negative>
                                <Message.Header>Error</Message.Header>
                                <p>La lesión no pudo ser ingresada</p>
                            </Message> : null
                        }
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

const controlOnlyToLast = (index, list, add, remove) => (
    index === list.length - 1 ?
    <div>
        <Button
            icon
            compact
            color='blue'
            onClick={add}>
            <Icon name='plus'/>
        </Button> 
        <Button
            icon
            compact
            color='red'
            onClick={remove}>
            <Icon name='x'/>
        </Button>
    </div>: null
)