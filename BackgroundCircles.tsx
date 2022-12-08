import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 50,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5,
    }}
        

    className="relative flex justify-center items-center">
        <div className="absolute border border-[#49554f] rounded-full h-[350px] w-[350px] mt-52 animate-ping opacity-30"/>
        <div className="rounded-full  border-[#934237] h-[400px] w-[300px] absolute mt-52 animate-pulse"/>
        <div className="rounded-full border border-[#934237] h-[950px] w-[950px] absolute  mt-52 animate-pulse opacity-50"/>
        <div className="rounded-full border border-[#F7AB0A] opacity-50 h-[650] w-[650]  mt-52 animate-pulse"/>
        <div className="rounded-full border border-[#575c59] h-[900px] w-[900px] absolute mt-12 animate-ping opacity-50"/>
       
    </motion.div>
  )
}

export default BackgroundCircles