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
import CSS from '../utils/css'

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
          style={{ paddingTop: 20 }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='static/icon.png' /> Iniciar Sesión
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>
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
                <Form.Button color='teal' fluid size='large'>
                  Enviar
                </Form.Button>
              </Segment>
            </Form>
            {this.state.error.length > 0 &&
            
            <Message 
              error
              header='Error'
              content={this.state.error}/>
            }
          </Grid.Column>
        </Grid>
        <style jsx>{`
        `}</style>
      </div>
    )
  }
}

export default Login