import React from 'react'
import Header from "./Header.js"
import "./hero.css"
import hero11 from '../../assets/hero_image.png'
import hero12 from '../../assets/hero_image_back.png'
import cal from '../../assets/calories.png'
import heart from '../../assets/heart.png'
import {motion} from "framer-motion"
import NumberCouter from "number-counter"
const Hero = () => {

  const transition ={type: "spring", duration: 5}
  const mobile = window.innerWidth<=768 ? true:false ;
  return (
    <div className='hero' id='hero'>
    <div className='blur hero-blur'> </div>
        <div className='left-h'>


     <Header/> 

     {/* best ad */}
     <div className='the-best-ad'>
  <motion.div
  initial={{ left: mobile? "178px": "238px" }}
  whileInView={{left: "8px"}}
  transition={{...transition, type: "tween"}}
  >

  </motion.div>
  <span>the best fitness club in the town</span>
</div>

{/* hero heading */}
<div className='hero-text'>
  <div>
    <span className='stroke-text'>Shape </span>
    <span>Your</span>
  </div>
  <div>
    <span>Ideal body </span>
  </div>
  <div > <span>
  in here we will help you to shape and build your ideal body and live up your life to fullest

  </span>
  </div>
</div>

{/* <img src='../../assets/hero_image_back.png' className='hero-image-back'/> */}

{/* figure */}
<div className="figures">
<div>
<span>
  <NumberCouter end={140} start={100} delay="5" preFix="+"/>
</span><span>expert coachs</span>
 </div>
<div>
<span>  <NumberCouter end={978} start={800} delay="5" preFix="+"/></span><span>members joined</span>
 </div>
<div>
<span>  <NumberCouter end={50} start={0} delay="5" preFix="+"/></span><span>fitness programs</span> 
</div>
</div>

{/* hero buttons */}
<div className='hero-button'>
  <button className='btn'>Get Started</button>
  <button className='btn'>Learn More</button>
</div>
     </div>
  


    <div className='right-h'> 
    <button className="btn" > Join now</button>
    

    <motion.div
    initial={{right: "-1rem"}}
    whileInView={{right: "4rem"}}
    transition={transition}
     className='heart-rate'>
      <img src={heart} alt=''/>
      <span>Heart Rate</span>
      <span>116 bpm</span>
    </motion.div>
    

{/* hero images */}

<img src={hero11} className='hero-image'/>
<motion.img
 initial={{right: "11rem"}}
    whileInView={{right: "20rem"}}
    transition={transition}
 src={hero12} className='hero-image-back'/>

{/* calories */}

<motion.div
 initial={{right: "37rem"}}
    whileInView={{right: "28rem"}}
    transition={transition}
 className='calories'>
  <img src={cal} alt=""/>
  <div>
  <span>Calories Burned</span> <span> 220 kcal</span>
 
  </div>

</motion.div>

    </div>
    



    </div>
  )
}

export default Hero