import React from 'react'
import './Header.css'
import Softwarepage from './Softwarepage'
import Containers from './Containers'
import Section1 from './Section1'
const Header = () => {
  return (
    <>
      <div className='header'>
          <div className ='title'>
            <h1>Rjwada</h1>
          </div>
          <ul className = 'links'>
            <li><a href=""> Teams</a></li>
            <li><a href=""> Benifits</a></li>
            <li><a href=""> Jobs</a></li>
          </ul>
      </div>     
    </>
  )
}

export default Header