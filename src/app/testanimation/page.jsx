"use client"


import { motion } from "framer-motion"



export default function Testanimation() {
    return(
        <div className="flex h-full items-center justify-center"> 
        <motion.div className="w-96 h-96 bg-red-600 rounded" initial={{ x: -100 }} animate={{x:100}}>
            </motion.div></div>
    )
};
