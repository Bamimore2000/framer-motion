"use client";
import { useState } from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";

const BottomSheetExample = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    console.log(open);
  };
  return (
    <main className="bottomsheetparent">
      <motion.button
        whileHover={{
          scaleX: 1.2,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        onClick={() => handleClick()}
        className="show"
      >
        Show sheet
      </motion.button>
      <BottomSheet open={open} setOpen={setOpen}>
        <article className="text">
          <h1 className="center text-2xl font-bold">This is my bottom sheet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            rerum repellendus quo. Quisquam tempora consequatur necessitatibus
            fuga ab officiis totam repudiandae sequi iure sapiente numquam
            temporibus ad, repellat exercitationem consequuntur?
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            rerum repellendus quo. Quisquam tempora consequatur necessitatibus
            fuga ab officiis totam repudiandae sequi iure sapiente numquam
            temporibus ad, repellat exercitationem consequuntur?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            rerum repellendus quo. Quisquam tempora consequatur necessitatibus
            fuga ab officiis totam repudiandae sequi iure sapiente numquam
            temporibus ad, repellat exercitationem consequuntur?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            rerum repellendus quo. Quisquam tempora consequatur necessitatibus
            fuga ab officiis totam repudiandae sequi iure sapiente numquam
            temporibus ad, repellat exercitationem consequuntur?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            rerum repellendus quo. Quisquam tempora consequatur necessitatibus
            fuga ab officiis totam repudiandae sequi iure sapiente numquam
            temporibus ad, repellat exercitationem consequuntur?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            rerum repellendus quo. Quisquam tempora consequatur necessitatibus
            fuga ab officiis totam repudiandae sequi iure sapiente numquam
            temporibus ad, repellat exercitationem consequuntur?
          </p>
        </article>
      </BottomSheet>
    </main>
  );
};

const BottomSheet = ({ open, setOpen, children }) => {
  // the first is a ref, the second is a function that takes it the ref.current, then an object that takes a css key, then an array of what it should animate it from, then two
  const [scope, animate] = useAnimate();
  const y = useMotionValue(0);
//   that is the current postion that the div is dragged to
  const yStart = typeof y.get() === "number" ? y.get() : 0

  const handleClose = async () => {
    animate(scope.current, {
        opacity: [1, 0]
    })
    // grab the div with its own id
    await animate("#drawer", {
        // so animate it out on a y axis, starting from where it has been dragged to
        // so, instead of starting from 0 (returns the elemt to its original position), it takes it to its current pos
        // then animate it to height of div
        y: [yStart, 506]
    })
    // takes it back to y: 100
    setOpen(false)
  };
  const controls = useDragControls();
  // we will have a black wrapper
  // then the sheet inside
  // then the children
  return (
    <>
      {open && (
        <main ref={scope} onClick={() => handleClose()} className="sheetwrapper">
          <motion.div
          id="drawer"
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            style={{ y }}
            onDragEnd={() => {
              if (y.get() > 100) {
                handleClose()
              }
            }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5
            }}
            dragControls={controls}
            dragListener={false}
            className="sheet"
          >
            <div
            onPointerDown={(e) => {
                controls.start(e);
              }}
            className="header-sheet">
              <button
                className="drag"
              ></button>
            </div>
            <div className="sheetitself">{children}</div>
          </motion.div>
        </main>
      )}
    </>
  );
};
export default BottomSheetExample;
