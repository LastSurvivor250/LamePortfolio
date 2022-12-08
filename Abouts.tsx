import React from 'react'
import {motion} from 'framer-motion'
import {PageInfo} from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'


type Props = {
    pageInfo: PageInfo
}

const Abouts = ({pageInfo}: Props) => {
  return (
    <div className='bg-[#272727]'>
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1.5}}

        className='  flex flex-col top-28 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h4 className='absolute top-12  uppercase tracking-[20px] text-gray-600 text-2xl'>testing grounds</h4>

        <div className=' flex p-30 space-x-24 '>
        <motion.div className=' flex flex-col top-2 right-10   relative justify-between   text-center'
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
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] opacity-60 " 
        src={urlFor(pageInfo?.imgUrl).url()}
        width={200} height={150} layout='fixed' 
        alt=""    />
        <Image
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] " 
        src={urlFor(pageInfo?.profilePic).url()}
        width={200} height={150} layout='fixed' 
        alt=""    />
        <Image
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] " 
        src={urlFor(pageInfo?.heroImage).url()}
        width={200} height={100} layout='fixed' 
        alt=""    />
        
        
        </motion.div>

        
        
        <div className='space-y-12  px-0 md:px-10 text-center'>

            <h4 className='text-2xl top-15  space-x-20 text-center'>
                Here is {""}
                <span className='underline decoration-[#7e7e7e]/50'>THE NEWEST</span> {""} Concept-BattleGround
            </h4>

            <p className=" flex   top-24 uppercase tracking-[8px] text-gray-300 text-1xl text-center  ">
                In case of this this little page I'll go with hard coded paragraph. I want this component to become my visual testing ground.I really fa-hand-pointer
                to get accustomed with tailwind-css and GIT here. New concepts should be constantly implemented onto this project so when I want to use them in any new
                NEW one, I'll just take it and reconfigure it from here.
            </p>

        </div>
        
        </div>
        </motion.div>
    </div>
  )
}

export default Abouts