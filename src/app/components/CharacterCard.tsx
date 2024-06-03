"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface CharacterContent {
    id: number;
    name: string;
    description: string;
    attack: number;
    defense: number;
    hitpoints: number;
    magicpoints: number;
    route: string;
}

export default function CharacterCard({ content }: { content: CharacterContent }) {
    const { id, name, description, attack, defense, hitpoints, magicpoints, route } = content;
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: id / 2, duration: 0.75 }}>
            <div className="border border-black rounded-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl group">
                <div className="p-5 md:min-h-44">
                    <h4 className="font-bold text-2xl tracking-tight">{name}</h4>
                    <p>{description}</p>
                </div>
                <div className="border-t border-black p-5 flex justify-between">
                    <div>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                    </div>
                    <div>
                        <p>HP: {hitpoints}</p>
                        <p>MP: {magicpoints}</p>
                    </div>
                </div>
                <Link href={`${route}`} className="mb-5 mx-5 border border-black block text-center p-3 rounded-lg transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    Select {name}
                </Link>
            </div>
        </motion.div>
    )
}
