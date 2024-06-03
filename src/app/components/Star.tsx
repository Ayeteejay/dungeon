"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Illustration from '../../../public/images/home/star.svg';

export default function Star() {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(
        scrollYProgress,
        [0, 0.5],
        [0, 360],
        { clamp: false }
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 10],
        [0.9, 1.5],
        { clamp: true }
    );

    return (
        <div className="absolute">        
            <motion.div style={{ rotate, scale }}                 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 2,        
                }}>
                <Image src={Illustration} alt="Star illustration" width={50} height={50} />
            </motion.div>
        </div>
    );
}
