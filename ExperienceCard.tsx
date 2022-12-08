import React, { ReactElement } from 'react'
import {motion} from 'framer-motion'
import {Experience} from '../typings.d'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props ={
    experience : Experience,
    
}

function ExperienceCard({experience}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] xl:h-[450px]
        snap-center scrollbar scrollbar-track-inherit scrollbar-thumb-current bg-[#292929] p-10 hover:opacity-100  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
            <motion.div
            initial= {{
                y: -100,
                opacity: 0,
            }}
            transition= {{ duration :1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once:true}}
             >
            
            <Image 
            className=" w-64 h-64 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-top-center"
            src ={urlFor(experience?.companyImage).url()}
            width={128} height={128}  
            alt="" />
            

            
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light"> CEO of MagicMoisture</h4>
            <p className="font-bold text-2xl mt-1">
                Majdźix
            </p>
            
            <div className="flex space-x-2 my-2">
                
                {experience.technologies.map((technology) =>(
                    
                <Image
                    key={technology._id}
                    className='h-10 w-10 rounded-full'
                    src={urlFor(technology.image).url()}
                    width={64} height={64} 
                    alt=""
                />
                
                ))}
                
            </div>
            
            <p className="uppercase py-5 text-gray-300 ">
                {new Date (experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80' >
                {experience.points.map((point,i) => (
                    <li key={i}>{point}</li>
                ))}
              
            </ul>
        </div>
        </motion.div>
        </article>
    )
}

export default ExperienceCard
