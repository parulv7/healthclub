import React from 'react'
import whitetick from '../../assets/whiteTick.png'
import {plansData} from "../../data/plansData"
import "./plan.css"
const Plan = () => {
  return (
    <div className='plans-container' id='plan'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
        <div className='programs-header' 
        style={{
            gap : "2rem",
        }}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        {/* plans card */}
        <div className='plans'>
          {plansData.map((plan, i)=>(

            <div className='plan' key={i}>
              {plan.icon}
              <span>{plan.name} </span>
              <span>$ {plan.price}</span>
              <div className='features'>
                {plan.features.map((feature, i) =>(
                  <div className='feature' > 
                  <img src={whitetick}/>
                  <span key={i}>
                    {feature}
                  </span>
                  </div>
                ))}
              </div>
             <div>
              <span>See more benefit -> </span>
             </div>
             <button className='btn'>Join now</button>
            </div>

          ))

          }
        </div>
    </div>
  )
}

export default Plan