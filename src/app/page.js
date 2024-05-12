'use client'

import BasicsOfMotion from "@/components/BasicsOfMotion"
import Gestures from "@/components/Gestures"
import { motion } from "framer-motion"
import Link from "next/link"

const Home = () => {
  const links = [
    {
      link: '/Gestures',
      title: "Gestures"
    },
    {
      link: '/AnimationControls',
      title: "AnimationConrols"
    },
    {
      link: '/Scroll',
      title: "Scroll"
    },
    {
      link: '/ViewBasedAnimation',
      title: "ViewAnimation"
    },
    {
      link: '/learningbasics',
      title: "Basics"
    },
  ]

  return (
    <main>
      <motion.h1
      initial={{
        x: '100%',
        y: "60%",
        opacity: 0
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1
      }}

      transition={{
        duration: 0.5,
      }}
      >Sogzy Learns Animation!</motion.h1>
      <motion.h2
      initial={{
        x: '-100%',
        y: "-60%"
      }}
      animate={{
        x: 0,
        y: 0
      }}

      transition={{
        duration: 0.5
      }}
      >This is my website dedicated to learning animations</motion.h2>
      <div className="container">
        {
          links.map(({link, title}) => {
            return(
              <Link key={title} className='link' href={link} >{title}</Link>
            )
          })
        }
      </div>

    </main>
  )
}
export default Home