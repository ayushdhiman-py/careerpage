import React, { useState } from 'react'
import './Section1.css'
import data from './data.json'
import { Link } from 'react-router-dom'
const Section1 = () => {
    const [searchterm,setterm] = useState('')
    return (
    <div className='sectionone'>
        <div className='searchbox'>
            <input type="text" placeholder='Seach title/description/skill' className='inputfield' onChange={event=>{
                setterm(event.target.value)
            }}/>
        </div>
        
        <div className='showingdata'>
            {data.filter((val)=>{
                if(searchterm===""){
                    return val
                }
                else if(val.jobname.toLowerCase().includes(searchterm.toLowerCase())
                || val.jobdesc.toLowerCase().includes(searchterm.toLowerCase()) ||
                val.eligibility.toLowerCase().includes(searchterm.toLowerCase())
                ){
                    return val
                }
            }).map((val,key)=>{
                return <div className='indicard'>
                    <Link to={`softwarepage/${val.jobid}`} style={{textDecoration:'none'}}>
                        <div className='card name'>
                            <h1>
                                {val.jobname}
                            </h1>
                            <h1>
                                {val.jobdesc} 
                            </h1>
                        </div>
                        <div className='card eli'>
                            <h1>
                                {val.eligibility} 
                            </h1>
                        </div>
                        <div className='card eli'>
                            <h1>
                                {val.applyBy} 
                            </h1>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    </div>
  )
}

export default Section1