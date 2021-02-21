import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import 'tachyons'
import Particles from 'react-particles-js'
import particle_params from './particles'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '1a674a68cfb243e99477f0459092a003'
})

const initialState = {
  input: '',
  imageUrl: '',
  imageData: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor () {
    super()
    this.state = initialState
  }

  loadUser = user => {
    this.setState({
      user: {
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        entries: user.entries,
        joined: user.joined
      }
    })
  }
  CreateBox = image_data => {
    let image_id = document.getElementById('image')
    let width = image_id.width
    let height = image_id.height
    this.setState({
      imageData: {
        top: image_data.top_row * height,
        bottom: height - image_data.right_col * height,
        right: width - image_data.right_col * width,
        left: image_data.left_col * width
      }
    })
    console.log(this.state.imageData)
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict({ id: 'd02b4508df58432fbb84e800597b8959' }, this.state.input)
      .then(response => {
        //update rank
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          }).then(response => response.json()).then(count => { 
            // to update an object attribute and avoid destroying its state we use Object.assign
            this.setState(
              Object.assign(this.state.user, { entries: count})
            )
          })
        }
        //analyze image
        this.CreateBox(
          response.outputs[0].data.regions[0].region_info.bounding_box
        )
        })
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if(route === 'signin') {
      this.setState({initialState})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  render () {
    const { isSignedIn, imageUrl, imageData,  } = this.state
    const { fname, lname, entries } = this.state.user
    return (
      <div className='App'>
        <Particles className='particles' params={particle_params} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home' ? (
          <div>
            <Logo />
            <Rank fname={fname} lname={lname} entries={entries}/>
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              imageUrl={imageUrl}
              box={imageData}
            />
          </div>
        ) : this.state.route === 'signin' ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )}
      </div>
    )
  }
}

export default App
