import React from 'react'
import {motion} from 'framer-motion'
import {PageInfo} from '../typings.d'
import { urlFor } from '../sanity'
import Image from 'next/image'


type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <div>
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1.5}}

        className=' flex flex-row relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1, x:0
        }}
        viewport={{ once:true}}>

        
        <Image
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] " 
        src={urlFor(pageInfo?.profilePic).url()}
        width={256} height={256} layout='fixed' 
        alt=""    />
        </motion.div>

        

        <div className='space-y-10 px-0 md:px-10'>

            <h4 className='text-4xl font-semibold'>
                Here is a {""}
                <span className='underline decoration-[#F7Ab0A]/50'>little</span> {""} background
            </h4>

            <p className=" text-base">
                {pageInfo?.backgroundInformation}
            </p>

        </div>
        </motion.div>
    </div>
  )
}

export default About