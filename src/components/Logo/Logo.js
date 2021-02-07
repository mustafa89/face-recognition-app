import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import brain from './brain.svg'

const Logo = () => {
    return (
        <div style={{ height: 250, width: 250}} className='ma4 dib'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
                   <img src={brain} alt="logo"/>
               </div>
            </Tilt>
        </div>
    )
}

export default Logo