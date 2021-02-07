import React from 'react'

const Register = ({ onRouteChange }) => {
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
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='Name'
                name='FirstName'
                id='FirstName'
              />
            </div>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' for='name'>
                Last Name
              </label>
              <input
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='Name'
                name='LastName'
                id='LastName'
              />
            </div>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' for='email-address'>
                Email
              </label>
              <input
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' for='password'>
                Password
              </label>
              <input
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <div className='lh-copy mt3'>
            <p onClick={() => onRouteChange('home')} className='f6 link dim black db pointer ba w4 pa2 shadow-5 br2 center'>
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  )
}

export default Register
