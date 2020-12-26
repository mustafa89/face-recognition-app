import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange }) => {
    return (
        <div>
            <p className="white f3">
                {'This app will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='flex justify-center'>
            <div className='form shadow-5 ma2'>
                <input className='f4 br2 pa3 ma3 mr0 w-50' type="text" onChange={onInputChange}/>
                <button className='dark-gray w-20 pa3 ma1 bg-red grow hover-bg-dark-red ba b--moon-gray br3 white'>
                    {'Detect'}
                </button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm