import React from 'react'

const SignIn = ({onRouteChange}) => {
  return (
    <article className="bg-white o-80 mw6 center br3 pa3 pa4-ns mv3 ba b--white-30 showdow-5">
    <main className='pa4 black-80'>
      <div className='measure center'>
        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
          <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6' htmlFor='email-address'>
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
            <label className='db fw6 lh-copy f6' htmlFor='password'>
              Password
            </label>
            <input
              className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='password'
              name='password'
              id='password'
            />
          </div>
          <label className='pa0 ma0 lh-copy f6 pointer'>
            <input type='checkbox' />
            Remember me
          </label>
        </fieldset>
        <div className=''>
          <input
            onClick = {() => onRouteChange('home')}
            className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib br3 shadow-5'
            type='submit'
            value='Sign in'
          />
        </div>
        <div className='lh-copy mt3'>
          <p onClick={() => onRouteChange('register')} className='f5 link dim black db pointer underline'>
            Register
          </p>
        </div>
      </div>
    </main>
    </article>
  )
}

export default SignIn
