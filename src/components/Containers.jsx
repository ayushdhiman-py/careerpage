import React from 'react'
import './Container.css'

const containers = () => {
  return (
    <div className='containers'>
        <div className='boxes'>
           <img src={require('./images/a.jpg')} alt="" height="200px" width="250px"  />
           <h1>Collaborate</h1>
        </div>
        <div className='boxes'>
           <img src={require('./images/b.jpg')} alt="" height="200px" width="250px"  />
           <h1>Share Ideas</h1>
        </div>
        <div className='boxes'>
           <img src={require('./images/c.jpg')} alt="" height="200px" width="250px"  />
           <h1>Official Discussions</h1>
        </div>
        <div className='boxes'>
           <img src={require('./images/d.png')} alt="" height="200px" width="250px"  />
           <h1>Self Improvement</h1>
        </div>
    </div>
  )
}

export default containers