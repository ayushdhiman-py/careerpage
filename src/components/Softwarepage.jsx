import React from 'react'
import './Softwarepage.css'
import { useParams } from 'react-router-dom';
import data from './data.json'

const Softwarepage = () => {
    const { id } = useParams();
    return (
        <div className='page'>
            {data.filter((val)=>{
                if(id===val.jobid
                ){
                    return val
                }
            }).map((val,key)=>{
                console.log(val.applyBy,val.eligibility)
                return <div className='maincard'>
                            <div className='innercard'>
                                <div className='jobname'>
                                    <h1>
                                        {val.jobname}
                                    </h1>
                                </div>
                                <div className='orgdesc'>
                                    <p>At RJWADA, we have a vision of empowerment and equitable opportunity for all Aboriginal and Torres Strait Islander peoples and commit to building reconciliation through RAJWADA's technology, platforms and people and we welcome Indigenous applicants. </p>
                                </div>
                                <hr />
                                <div className='jobdesc'>
                                    <h1>
                                        {val.jobdesc} 
                                    </h1>
                                </div>
                                <div className='about'>
                                    <p>Businesses that partner with Rjwada come in all shapes, sizes and market caps, and no one Rjwada advertising solution works for all. Your knowledge of online media combined with your communication skills and analytical abilities shapes how new and existing businesses grow. Using your relationship-building skills, you provide Rjwada-caliber client service, research and market analysis. You anticipate how decisions are made, persistently explore and uncover the business needs of Rjwada's key clients and understand how our range of product offerings can grow their business. Working with them, you set the vision and the strategy for how their advertising can reach thousands of users.</p>
                                </div>
                                <div className='eligi'>
                                    <h1>
                                        Eligibility: {val.eligibility} 
                                    </h1>
                                </div>
                                <div className='lastdate'>
                                    <h1>
                                        Last Date to apply: {val.applyBy} 
                                    </h1>
                                </div>
                                <div className='right'>
                                    <button>Apply Now</button>
                                </div>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default Softwarepage