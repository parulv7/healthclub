import React from 'react'
import "./Reasons.css"
const Reasons = () => {
  return (
    <div className='reasons' id='reasons'> 
    <div className='left-l'>
<img src='../../assets/image1.png'/>
<img src='../../assets/image2.png'/>
<img src='../../assets/image3.png'/>
<img src='../../assets/image4.png'/>
    </div>
    <div className='right-r'>
        
      <span>
        some reasons
      </span>
      <div>
        <span className='stroke-text'>why</span>
        <span> chose us?</span>
      </div>




<div className='details-r'> 
<div>
<img src='../../assets/tick.png'/>
<span>OVER 140+ EXPERT COACHS</span> 
</div>
<div>
<img src='../../assets/tick.png'/>
<span>TRAIN SMARTER AND FASTER THAN BEFORE</span> 
</div>
<div>
<img src='../../assets/tick.png'/>
<span>1 FREE PROGRAM FOR NEW MEMBER</span> 
</div>
<div>
<img src='../../assets/tick.png'/>
<span>RELIABLE PARNERS</span>
 </div>
</div>

<span style={
 { color: "var(--gray)",
  fontWeight: "normal",}
} 
>OUR PARTNERS </span>

<div className='partners'>
  <img src='../../assets/nb.png'/>
  <img src='../../assets/adidas.png'/>
  <img src='../../assets/nike.png'/>
</div>

    </div>
    </div>
  )
}

export default Reasons