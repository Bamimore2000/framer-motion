"use client";
import { easeInOut, motion, useDragControls, useMotionValue, useAnimate} from "framer-motion";
// import useMeasure from 'react-use-measure'
import { useState } from "react";
const BottomSheet = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const [swipe, setSwipe] = useState(0)

  return (
    // the parent container
    <div className="grid h-screen place-content-center bg-neutral-950">
      {/* button */}
      <button
        onClick={() => handleClick()}
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
      >
        Open Drawer
      </button>
      {/* this is the component usage */}
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p><p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            tempore in iure molestiae mollitia libero? Velit odio quaerat qui
            rem molestias debitis quam, ea eum.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

// separate container
const DragCloseDrawer = ({ open, setOpen, children }) => {
    // defines what controls our dragging
    const [scope, animate] = useAnimate()
    const controls = useDragControls();
    const y = useMotionValue(0)
    // const [drawerRef, {height}] = useMeasure()


  const handleClose = () => {
    const yStart = typeof y.get() === 'number' ? y.get(): 0;
    // grab the current div associated with scope as ref, then animate it with the styles
    animate(scope.current, {
        opacity: [1, 0]
    })
     animate("#drawer", {
        y: [yStart, 500]
    })
    setOpen(false);


  };
console.log(y);
  // outer div that serves as the over lay.
  return (
    <>
      {open && (
        <motion.div
        ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          

          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
            {/* the div for the text inside. I mean the actual div that springs out. the sheet itself */}
            <motion.div
            // ref={drawerRef}
            id="drawer"
            // to ensure that the click event on the parent does not afffect the child we do:
            onClick={e => e.stopPropagation()}
            // makes it draggable
            drag='y'
            style={{y}}
            onDragEnd={()=>{ 
                if (y.get() >= 100){
                    handleClose();
                }
            }}
            // pass in the controls here
            dragControls={controls}
            // disable drag
            dragListener={false}
            // no matter how dragged, the css styles passed in on the property prevails
            dragConstraints={{
                top: 0,
                bottom: 0
            }}

// defines how elsatic the drag is: top:0 means it wont go up
            dragElastic={{
                top: 0,
                bottom: 0.5
            }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
                ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900">
                {/* the button at the top */}
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
                    <button
                    // when this button is being long pressed and moved, start the drag on the ref that takes contols as a param for dragControls
                     onPointerDown={(e)=> {
                        controls.start(e);
                        console.log(e);
                    }} 
                     
                     className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"/>
                </div>
                {/* this div takes in children as whateevr passsed in from the parent component */}
                <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
                    {children}
                </div>
            </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default BottomSheet;
