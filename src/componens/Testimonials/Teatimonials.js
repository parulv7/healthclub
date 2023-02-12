import React, { useState } from 'react'
import "./Teatimonials.css"
import right from "../../assets/rightArrow.png"
import left from "../../assets/leftArrow.png"
import {testimonialsData} from "../../data/testimonialsData"
import { motion } from 'framer-motion'
const Teatimonials = () => {
  const transition ={type: "spring", duration: 4}
const [selected, setSelected] = useState(0);
const tLength = testimonialsData.length;

  return (
    <div className="Teatimonials" id='testimonials'>
        <div className='left-t'>
        <span>Testimonials</span>
<span className='stroke-text'> What they</span>
<span> say about it</span>
<motion.span
key={selected}
        initial={{opacity: 0, x:-100 }}
        animate={{opacity: 1, x:0}}
        exit={{opacity: 0, x: 100 }}
        transition={transition}
>
  {testimonialsData[selected].review}
</motion.span>
<span>
  <span  style={{
  color: "var(--orange)"
}}>{testimonialsData[selected].name} </span>
 - {testimonialsData[selected].status}
</span>
        </div>
        <div className='right-t'>
        <motion.div
        initial={{opacity: 0, x:-100 }}
        transition={{...transition,  duration: 3}}
        whileInView={{ opacity: 1, x:0}}
        >
        </motion.div>
        <motion.div 
         initial={{opacity: 0, x:100 }}
        transition={{...transition,  duration: 3}}
        whileInView={{ opacity: 1, x:0}}
        ></motion.div>




          <motion.img
        
        key={selected}
        initial={{opacity: 0, x:100 }}
        animate={{opacity: 1, x:100}}
        exit={{opacity: 0, x: -100 }}
        transition={transition}
        
           src={testimonialsData[selected].image} alt=""/>
          
          
          
          
          
          
          
          <div className='arrows'>
            <img 
            onClick={()=>{
              selected===0?setSelected(tLength -1) :
              setSelected((prev)=> prev-1);
            }}
            src={left} alt=''/>
            <img
             onClick={()=>{
              selected=== tLength -1 
              ? setSelected(0) :
              setSelected((prev)=> prev+1);
             }}
             src={right} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Teatimonials