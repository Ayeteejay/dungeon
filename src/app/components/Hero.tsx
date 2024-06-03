"use client";
import { motion } from "framer-motion";

interface Content{
    title:string;
}

export default function Hero({content}:{content:Content}){
    return (
        <section className="text-center py-20">
            <motion.h1
                initial={{opacity:0, translateY:-25}}
                animate={{opacity:1, translateY:0}}
                transition={{
                duration:0.5,                
            }} className="text-4xl text-black tracking-tight leading-snug">{content.title}</motion.h1>
        </section>
    )
}