"use client";

import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const Scroll = () => {
  const {scrollYProgress} = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(scrollYProgress, [0, 1], ["rgb(86, 1, 245)", "rgb(1, 245, 13)"])

  console.log(background);
  return (
    <div >
      <motion.div
      style={{
        // scaleX: scrollYProgress,
        scaleX: scaleX,
        background,
        transformOrigin: "left",
        position: "sticky",
        top: 0,
        width: '100%',
        height: '20px'
      }}
      ></motion.div>
      <div style={{ maxWidth: "700px", margin: "auto" , padding: "1.2rem" }}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam amet ipsum iure dolorum voluptatem numquam nulla expedita
          nesciunt tempore, dolorem optio eos provident! Provident dicta dolorem
          fugiat! Accusamus veritatis aut aliquam, deleniti, atque labore
          aspernatur sit deserunt perspiciatis, aperiam ullam. Ea minima odio,
          laborum nobis vero ducimus totam explicabo veniam minus provident
          assumenda iste at tempore blanditiis error sit porro eius. Cupiditate
          non qui perspiciatis facere vitae quia harum ad explicabo sit
          molestiae repellat distinctio unde corrupti architecto tempora aut
          itaque, aperiam pariatur amet suscipit repudiandae laudantium, ex
          atque! Laboriosam magni, sed id exercitationem aliquam quod doloribus
          molestiae non.
        </p>
      </div>
    </div>
  );
};
export default Scroll;
