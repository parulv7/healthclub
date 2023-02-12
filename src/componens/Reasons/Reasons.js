import React from 'react'
import "./Reasons.css"
import tick from '../../assets/tick.png'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from "../../assets/nb.png"
import adidas from '../../assets/adidas.png'
import nike from "../../assets/nike.png"
const Reasons = () => {
  return (
    <div className='reasons' id='reasons'> 
    <div className='left-l'>
<img src={img1}/>
<img src={img2}/>
<img src={img3}/>
<img src={img4}/>
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
<img src={tick}/>
<span>OVER 140+ EXPERT COACHS</span> 
</div>
<div>
<img src={tick}/>
<span>TRAIN SMARTER AND FASTER THAN BEFORE</span> 
</div>
<div>
<img src={tick}/>
<span>1 FREE PROGRAM FOR NEW MEMBER</span> 
</div>
<div>
<img src={tick}/>
<span>RELIABLE PARNERS</span>
 </div>
</div>

<span style={
 { color: "var(--gray)",
  fontWeight: "normal",}
} 
>OUR PARTNERS </span>

<div className='partners'>
  <img src={nb}/>
  <img src={adidas}/>
  <img src={nike}/>
</div>

    </div>
    </div>
  )
}

export default Reasons