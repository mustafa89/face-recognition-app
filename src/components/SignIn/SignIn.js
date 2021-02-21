import React from 'react'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: '',
      exists: true
    }
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value })
  }
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value })
  }
  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
         if (data.email === this.state.signInEmail) {
          this.props.loadUser(data) 
          this.props.onRouteChange('home')
         } else {
          this.setState({
            exists: false
          })
         }
      })
  }
  render () {
    return (
      <article className='bg-white o-80 mw6 center br3 pa3 pa4-ns mv3 ba b--white-30 showdow-5'>
        <main className='pa4 black-80'>
          <div className='measure center'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
              <form action="#">
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba b--light-silver shadow-5 br2 bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  placeholder="Email Address"
                  name='email-address'
                  autoComplete="current-email"
                  id='email-address'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='pa2 input-reset ba b--light-silver shadow-5 br2 bg-transparent hover-bg-black hover-white w-100'
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="current-password"
                  id='password'
                  onChange={this.onPasswordChange}
                />
              </div>
              </form>
              <label className='pa0 ma0 lh-copy f6 pointer'>
                <input type='checkbox' />
                Remember me
              </label>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitSignIn}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib br3 shadow-5'
                type='submit'
                value='Sign in'
              />
              {this.state.exists ? (<p></p>) : (<p className="tc red">User not found. Have you registered yet?</p>)}
            </div>
            <div className='lh-copy mt3'>
              <p
                className='f5 link dim black db pointer underline'
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default SignIn
