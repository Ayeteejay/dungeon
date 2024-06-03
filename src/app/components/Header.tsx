"use client"
import { motion, useScroll, useTransform} from "framer-motion"
import Logo from "./Logo";
export default function Header(){    
    const {scrollYProgress} = useScroll();

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.75],
        { clamp: true }
    );
    
    return (
        <header className="fixed w-full top-0 px-5 pt-4 pb-5 border-b border-black bg-blood_red flex justify-center items-center z-20">    
            <motion.div style={{scale}}>
                <Logo content={{classes:"text-3xl", span_classes:"text-sm"}}/>
            </motion.div>            
        </header>
    )
}