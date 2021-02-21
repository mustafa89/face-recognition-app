import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: ''
    }
  }
    
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  onFnameChange = (event) => {
    this.setState({fname: event.target.value})
  }
  onLnameChange = (event) => {
    this.setState({lname: event.target.value})
  }

  onRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
         if (user){
           this.props.loadUser(user)
           this.props.onRouteChange('home')
         } else {
           console.log("whyyyy")
         }
      })
  }

  render() {
    return (
      <article className='bg-white o-80 mw6 center br3 pa3 pa4-ns mv3 ba b--white-30 showdow-5'>
        <main className='pa4 black-80'>
          <div className='measure center'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='name'>
                  First Name
                </label>
                <input
                  className='border-box pa2 input-reset shadow-5 ba b--light-silver br2 bg-transparent hover-bg-black hover-white w-100'
                  type='Name'
                  name='FirstName'
                  id='FirstName'
                  onChange={this.onFnameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='name'>
                  Last Name
                </label>
                <input
                  className='border-box pa2 input-reset shadow-5 ba b--light-silver br2 bg-transparent hover-bg-black hover-white w-100'
                  type='Name'
                  name='LastName'
                  id='LastName'
                  onChange={this.onLnameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='name'>
                  Email Address
                </label>
                <input
                  className='pa2 input-reset shadow-5 ba b--light-silver br2 bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='password'>
                  Password
                </label>
                <input
                  className='pa2 input-reset shadow-5 ba b--light-silver br2 bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className='lh-copy mt3'>
              <p onClick={this.onRegister} className='f6 link dim black db pointer ba w4 pa2 shadow-5 br2 center'>
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    )
  }
  
}

export default Register
