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
    MANDIBULA_BRANCH, OP5_TYPE, SINUS_MAXILAR_WALL
} from '../configuration/options'

const DEFAULT_INIT_STATE = {
    'modalOpen': false,
    'locations': [{ ...DEFAULT_LOCATION }],
    'tooths': [],
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
        this.handleWallChange = this.handleWallChange.bind(this)
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
        console.log('handleChange')
        console.log(`${name} ${value} ${checked}`)
        if (value === undefined && checked !== undefined) {
            value = checked
        }

        if (name === 'op4' && value === 'Asociada') {
            this.checkTooth(value)
        } else if (name === 'op4' && value === 'No Asociado') {
            this.removeToothByType('Asociada')
        } else if (name === 'op6' && value === 'Con Desplazamiento Piezas Dentarias') {
            this.checkTooth(value)
        } else if (name === 'op6' && value === 'Sin Desplazamiento Piezas Dentarias') {
            this.removeToothByType('Con Desplazamiento Piezas Dentarias')
        } else if (name === 'op8' && value === 'Pieza Incluida') {
            this.checkTooth(value)
        } else if (name === 'op8' && value === 'Pieza No Incluida') {
            this.removeToothByType('Pieza Incluida')
        }

        this.setState({ [name]: value })
    }

    handleLocationChange = (e, { name, value }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations

            locations[name]['location'] = value['name']
            locations[name]['_type'] = value['type']
            locations[name]['body_mandibula'] = false
            locations[name]['sinus_maxilar'] = false

            this.setState({ 'locations':  [...locations] })
        }
    }

    handleToothsChange = (e, { name, value }) => {
        if(name <= this.state.tooths.length - 1){
            let tooths = [...this.state.tooths]

            tooths[name]['location'] = value

            this.setState({ 'tooths':  [...tooths] })
        }
    }

    handlePositionChange = (e, { name, value }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['position'] = value

            this.setState({ 'locations':  [...locations] })
        }
    }

    handleBranchChange = (e, { name,  value }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['branch_mandibula'] = value

            this.setState({ 'locations':  [...locations] })
        }
    }

    handleWallChange = (e, { name,  value }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['sinus_maxilar_wall'] = value

            this.setState({ 'locations':  [...locations] })
        }
    }

    handleBodyChange = (index, { name, checked }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['body_mandibula'] = checked

            this.setState({ 'locations':  [...locations] })
        }
    }

    handleSinusChange = (index, { name, checked }) => {
        if(name <= this.state.locations.length - 1){
            let locations = this.state.locations
            locations[name]['sinus_maxilar'] = checked

            this.setState({ 'locations':  [...locations] })
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
                return {...state}
            }
        })
    }

    addTooth = currentType => e => {
        e.preventDefault()
        this.setState(state => {
            let new_tooth = Object.assign({}, DEFAULT_TOOTH)
            new_tooth['_type'] = currentType
            new_tooth['index'] = state.tooths.length

            return {
                ...state,
                'tooths': [
                    ...state.tooths,
                    { ...new_tooth }
                ]
            }
        })
    }

    removeTooth = index => e => {
        e.preventDefault()
        this.removeToothByIndex(index)
    }

    handleSubmit(){
        const tmp_locations = this.state.locations

        if (tmp_locations && tmp_locations.length < 2 && tmp_locations[0] === DEFAULT_LOCATION){
            this.setState('locations', [])
        }

        console.log(this.state)

        fetch('http://127.0.0.1:5000/injury', {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                }),
                body: JSON.stringify(this.state)
             })
            .then((response) => {
                this.setState({...DEFAULT_INIT_STATE})
                this.handleClose()
            })
            .catch((error) => {
                this.setState({ error })
            })
    }

    checkTooth(currentType){
        const tooths = this.state.tooths.filter(
            tooth => tooth._type === currentType
        )

        if (tooths.length === 0) {
            this.setState(state => {
                let new_tooth = Object.assign({}, DEFAULT_TOOTH)
                new_tooth['_type'] = currentType
                new_tooth['index'] = state.tooths.length
                return {
                    ...state,
                    'tooths': [
                        ...state.tooths,
                        { ...new_tooth }
                    ]
                }
            })
        }
    }

    removeToothByType(currentType){
        this.setState(state => {
            const tooths = this.state.tooths.filter(
                tooth => tooth._type !== currentType
            )

            return {
                ...state,
                'tooths': this.updateToothsIndex(tooths)
            }
        })
    }

    removeToothByTypeAndEmpty(currentType, cb){
        this.setState(state => {
            let tooths = this.state.tooths.filter(
                tooth => {
                    console.log(tooth.location)
                    return tooth._type !== currentType && tooth.location === ""
                }
            )

            return {
                ...state,
                'tooths': this.updateToothsIndex(tooths)
            }
        }, cb())
    }

    removeToothByIndex(index) {
        this.setState(state => {
            const tooths = this.state.tooths.filter(
                tooth => tooth.index !== index
            )

            return {
                ...state,
                'tooths': this.updateToothsIndex(tooths)
            }
        })
    }

    updateToothsIndex(tooths) {
        const newTooths = [...tooths.map(
            (tooth, index) => { 
                tooth.index = index
                return tooth
            }
        )]

        console.log(newTooths)
        return newTooths
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
                                label='Múltiple'
                                name='op1'
                                value='Múltiple'
                                checked={this.state.op1 === 'Múltiple'}
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
                                control={Select} 
                                label='Forma' 
                                name='form'
                                options={FORM}
                                onChange={this.handleChange}/>
                            <Form.Field
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
                                        control={Select}  
                                        name={index}
                                        label='Localización'
                                        options={LOCATION(index)}
                                        onChange={this.handleLocationChange}/>
                                    <Form.Field 
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
                                                control={Checkbox}
                                                label='Cuerpo'
                                                name={index}
                                                onChange={this.handleBodyChange}/> : null
                                    }

                                    { 
                                        obj.location === 'Maxilar' ?
                                            <Form.Field
                                                control={Checkbox}
                                                label='Seno Maxilar'
                                                name={index}
                                                onChange={this.handleSinusChange}/> : null
                                    }

                                    { 
                                        obj.sinus_maxilar ?
                                            <Form.Field
                                                control={Select}
                                                label='Pared'
                                                name={index}
                                                options={SINUS_MAXILAR_WALL(index)}
                                                onChange={this.handleWallChange}/> : null
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
                        </Form.Group>
                        {
                            this.state.op4 === 'Asociada' ? 
                            this.state.tooths.filter(
                                t => t._type === 'Asociada'
                            ).map((obj, index) => (
                                <Form.Group
                                    key={'tooth' + index}
                                    inline>
                                    <Form.Field
                                        required 
                                        control={Select}  
                                        name={obj.index}
                                        label='Pieza Dental'
                                        options={this.teethOptions}
                                        onChange={this.handleToothsChange}/>
                                    <br key={'br' + index}/>
                                    {
                                        controlOnlyToLast(
                                            obj.index, this.state.tooths, 
                                            this.addTooth('Asociada'),
                                            this.removeTooth(obj.index)
                                        )
                                    }
                                </Form.Group>
                                )
                            ) : null
                        }
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
                            
                        </Form.Group>
                        {
                            this.state.op6 === 'Con Desplazamiento Piezas Dentarias' ? 
                            this.state.tooths.filter(
                                t => t._type === 'Con Desplazamiento Piezas Dentarias'
                            ).map((obj, index) => (
                                <Form.Group
                                    key={'tooth' + index}
                                    inline>
                                    <Form.Field
                                        required 
                                        control={Select}  
                                        name={obj.index}
                                        label='Pieza Dental'
                                        options={this.teethOptions}
                                        onChange={this.handleToothsChange}/>
                                    <br key={'br' + index}/>
                                    {
                                        controlOnlyToLast(
                                            obj.index, this.state.tooths, 
                                            this.addTooth('Con Desplazamiento Piezas Dentarias'),
                                            this.removeTooth(obj.index)
                                        )
                                    }
                                </Form.Group>
                                )
                            ) : null
                        }
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
                            <Form.Radio
                                label='No aplica'
                                name='op7'
                                value='No aplica'
                                checked={this.state.op7 === 'No aplica'}
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
                        </Form.Group>
                        {
                            this.state.op8 === 'Pieza Incluida' ? 
                            this.state.tooths.filter(
                                t => t._type === 'Pieza Incluida'
                            ).map((obj, index) => (
                                <Form.Group
                                    key={'tooth' + index}
                                    inline>
                                    <Form.Field
                                        required 
                                        control={Select}  
                                        name={obj.index}
                                        label='Pieza Dental'
                                        options={this.teethOptions}
                                        onChange={this.handleToothsChange}/>
                                    <br key={'br' + index}/>
                                    {
                                        controlOnlyToLast(
                                            obj.index, this.state.tooths, 
                                            this.addTooth('Pieza Incluida'),
                                            this.removeTooth(obj.index)
                                        )
                                    }
                                </Form.Group>
                                )
                            ) : null
                        }
                        <Form.Group inline>
                            <label><b>Diagnóstico Diferencial</b></label>
                            <Form.Field
                                required 
                                control={Input}
                                name='dif1'
                                onChange={this.handleChange}/>
                            <Form.Field
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
    </div> : null
)