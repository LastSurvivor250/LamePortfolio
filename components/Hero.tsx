import React, { ReactElement } from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import {PageInfo} from "../typings.d"
import {urlFor} from "../sanity"




type Props = {
    pageInfo:PageInfo
    
}

function Hero({pageInfo}: Props) { 
    const {text, count} = useTypewriter({
        words:[`This will change the ${pageInfo?.name}`,"Have FAITH in ME","I know what I'm doing"]
    ,
    loop: true,
    delaySpeed:2000,
    });
    return (
        
        <div className="h-screen flex flex-col  space-y-8 items-center justify-center text-center overflow-hidden">
            <>
            <BackgroundCircles/> 
            
            
            <Image
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={urlFor(pageInfo?.heroImage).url()} 
            width={128} height={128} 
            alt=""
            />
            </>
            
            

            
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>        
                <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
                <span className="mr-3">{text}</span>
                <Cursor cursor-Color="#F7AB8A"/>
                </h1>
                <div className="pt-5">
                    <Link href="#about"><button className="heroButton">About</button></Link>
                    <Link href="#experience"><button className="heroButton">Experience</button></Link>
                    <Link href="#skills"><button className="heroButton">Skills</button></Link>
                    <Link href="#projects"><button className="heroButton">Projects</button></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
