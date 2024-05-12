"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ViewBasedAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
  return (
    <>
      <div style={{ height: "150vh" }}></div>
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="div"
      ></motion.div>
      <div
      ref={ref}
      style={{
        height: "100vh",
        background: isInView? 'blue' : 'red',
        transition: '1s background'
      }}

      ></div>
    </>
  );
};
export default ViewBasedAnimation;
