"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"
import style from   "./header.module.css"
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react"
export default function UseAnimationFrame() {
    const ref = useRef(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    const Fn = (m)=>{
    console.log(m)
    }
    return (
        <div className={style.container}>
            <div className={style.cube} ref={ref}>
                <a href="https://www.facebook.com/profile.php?id=100006160620281" target="_blank" className={`${style.side} ${style.front} block`}  >
                     <Facebook size={70} color="white" />
                </a>
                <a href="https://www.linkedin.com/in/omar-ali-22a43222a/" target="_blank" className={`${style.side} ${style.left} block`}  >
                     <Linkedin size={70} color="white" />
                </a>
                <a className={`${style.side} ${style.right} block`} >
                    <Youtube size={70} color="white" />
                </a>
                <a className={`${style.side} ${style.top} block`} >
                     <Instagram size={70} color="white" />
                </a>
                <a className={`${style.side} ${style.bottom} block`} >
                     <Github href="https://github.com/omaralihussien55" target="_blank" size={70} color="white" />
                </a>
                <a className={`${style.side} ${style.back} block`} >
                    <Github href="https://github.com/omaralihussien55" target="_blank" size={70} color="white" />
                </a>
            </div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
