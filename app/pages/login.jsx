import { Component } from 'react'
import { login } from '../utils/auth'
import {
  Header, 
  Form,
  Grid,
  Image, 
  Message, 
  Segment 
} from 'semantic-ui-react'
import CSS from '../components/css'

class Login extends Component {
  static getInitialProps ({ req }) {
    const apiUrl = process.browser
      ? `https://${window.location.host}/api/login.js`
      : `https://localhost/api/login.js`

    return { apiUrl }
  }

  constructor (props) {
    super(props)

    this.state = { username: '', password: '', error: '' }
    this.userNameHandleChange = this.userNameHandleChange.bind(this)
    this.passwordHandleChange = this.passwordHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  userNameHandleChange (event) {
    this.setState({ username: event.target.value })
  }

  passwordHandleChange (event) {
    this.setState({ password: event.target.value })
  }

  async handleSubmit (event) {
    event.preventDefault()
    const username = this.state.username
    const url = this.props.apiUrl
    login({ username, url }).catch(() =>
      this.setState({ error: 'Inicio de sesión incorrecto' })
    )
  }

  render () {
    return (
      <div>
        <CSS/>
        <Grid
          textAlign='center' 
          verticalAlign='middle' 
          style={{ paddingTop: 20 }}
          columns={3}>
            <Grid.Column size={2}/>
            <Grid.Column size={12}>
              <Header as='h2' color='purple' textAlign='center'>
                Iniciar Sesión
              </Header>
              <Segment inverted color='purple'>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='Usuario'
                    onChange={this.userNameHandleChange}/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Contraseña'
                    type='password'
                    onChange={this.passwordHandleChange}/>
                  <Form.Button inverted color='purple' fluid size='large'>
                    Enviar
                  </Form.Button>
                </Form>
              </Segment>
              {this.state.error.length > 0 &&
              
              <Message 
                error
                header='Error'
                content={this.state.error}/>
              }
            </Grid.Column>
            <Grid.Column size={2}/>
        </Grid>
      </div>
    )
  }
}

export default Login