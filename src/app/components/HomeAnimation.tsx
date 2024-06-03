"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import Tower from '../../../public/images/home/tower.svg';

interface ButtonContent{
    href:string;
    target:string;
    title:string;
}

export default function HomeAnimation({content}: {content:ButtonContent}){
    const {href, target, title} = content;
    return (
        <>
            <motion.div      
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 1,        
                }}>          
                <div className="transition-all duration-300 relative h-[300px] md:h-[400px] lg:h-[450px]">
                <Image src={Tower} alt={"Entrance to the dungeon."} fill priority/>      
                </div>        
            </motion.div>
            <div className="flex flex-col items-center my-10">        
                <motion.div
                initial={{opacity:0, translateY:-25}}
                animate={{opacity:1, translateY:0}}
                transition={{
                    duration:1,
                    delay:1,
                }}
                >
                <PrimaryButton content={{href:href, target:target, title:title, classes:"text-2xl px-12 py-3 bg-black text-white hover:bg-white hover:text-black"}}/>
                </motion.div>        
            </div>
        </>
    )
}