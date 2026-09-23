"use client";
import { motion } from "framer-motion";
export function Reveal({children,delay=0,y=18}:{children:React.ReactNode;delay?:number;y?:number}){return <motion.div initial={{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,delay}}>{children}</motion.div>}
