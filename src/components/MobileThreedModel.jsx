import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

import { useFrame } from "@react-three/fiber"; // Import useFrame hook

import { motion } from "framer-motion"; // Import Framer Motion

import facebook from "../assets/Updated Icons/Facebook-1.png";
import instagram from "../assets/Updated Icons/Instagram-1.png";
import twitter from "../assets/Updated Icons/Twitter-1.png";
import dribble from "../assets/Updated Icons/Dribble1.png";
import Tiktok from "../assets/Updated Icons/Tiktok-1.png";
import LinkedIn from "../assets/Updated Icons/LinkedIn-1.png";


// const facebook = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Facebook-1.png";
// const instagram = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Instagram-1.png";
// const twitter = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Twitter-1.png";
// const dribble = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Dribble1.png";
// const Tiktok = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Tiktok-1.png";
// const LinkedIn = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/LinkedIn-1.png";


import { useTranslation } from "react-i18next";
import gsap from "gsap";


import withMobile from "../assets/images/with-mobile.png";
import { model3d, modelDraco, modelShade } from "../assets/images";


  

const Model = ({ modelPath, isHovered, onHoverStart, onHoverEnd, onLoad }) => {
  useGLTF.preload(modelPath); // Preload the model
  const { scene } = useGLTF(modelPath);

  const modelRef = useRef(); // Ref to access the model object


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Notify when the model is loaded
    if (onLoad) onLoad();
    setIsVisible(true);
  }, [onLoad]);

  // Apply shininess to the edges or the entire model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.2; // Increase shininess
      child.material.roughness = 0.2; // Make the surface smoother
      // child.material.color.set("0xffffff");
    }
  });

  // React Spring for smooth scale animation
  const { scale } = useSpring({
    scale: isHovered ? 2.5 : 2.8,
    config: { mass: 1, tension: 200, friction: 20 }, // Adjust spring physics for smoothness
  });

   // React Spring for fade-in animation
   const { opacity } = useSpring({
    opacity: isVisible ? 1 : 0, // Fade in when visible
    config: { duration: 1000 }, // Duration of fade-in animation
  });




  // Transition for smooth position and rotation update
  const { position, rotation } = useSpring({
    position: isHovered ? [-0.1, -1, 0] : [0, -1, 0],
    rotation: isHovered ? [-0.1, -0.3, -0.1] : [+0, 0, 0],
    config: { mass: 1, tension: 200, friction: 20 },
  });


  // Rotation logic directly in `useFrame`
  useFrame(({ clock }) => {
    if (modelRef.current && !isHovered) {
      // modelRef.current.rotation.x = 0; // Reset tilt
      modelRef.current.rotation.y += 0.02; // Smooth rotation
      // modelRef.current.rotation.z = 0; // Reset spin
    }
  });


  

 
  

  return (
    <a.primitive
      ref={modelRef}
      object={scene}
      // Adjust the model's position
      position= {position} // [x, y, z] to position the model in 3D space
      // Adjust the model's rotation (in radians)
      rotation={rotation} 

      scale={scale} // Bind animated scale
      style={{ opacity }} // Apply fade-in animation

      onPointerOver={(e) => {
        console.log("Hover started on the model");
        if (onHoverStart) onHoverStart(e);
      }}
      onPointerOut={(e) => {
        console.log("Hover ended on the model");
        if (onHoverEnd) onHoverEnd(e);
      }}
    />
  );
};

const MobileThreedModel = () => {
  const { t, i18n } = useTranslation();

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);


  
  



  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    // if (isModelLoaded) {
      // Add a 5-second delay before showing the model
      const timer = setTimeout(() => setShowModel(true), 5000);
      return () => clearTimeout(timer); // Cleanup timer
    // }
  }, []);











  useEffect(() => {
    // Set hover state to true initially for a few seconds
    setIsHovered(true);
    const timer = setTimeout(() => setIsHovered(false), 7000); // Revert after 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const icons = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: Tiktok, alt: "TikTok" },
    { src: LinkedIn, alt: "LinkedIn" },
    { src: twitter, alt: "Twitter" },
    { src: dribble, alt: "Dribble" },
  ];

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.35, y: 0 },
    visible: (i) => {
      // Default scatter logic
      const scatterX = Math.cos(i) * 150;
      const scatterY = Math.sin(i) * 200 - 150;

      // Define custom offsets for specific icons (based on index)
      const customOffsets = {
        0: { x: scatterX - 45, y: scatterY+20 }, // Adjust Facebook
        1: { x: scatterX + 18, y: scatterY+20 }, // Adjust Facebook
        2: { x: scatterX - 90, y: scatterY + 30 },
        
        4: { x: scatterX - 40, y: scatterY - 0 }, // Adjust Instagram

        5: { x: scatterX + 50, y: scatterY - 0 }, // Adjust Instagram
        // Add more custom offsets for other icons if needed
      };

      // // Apply custom offsets if defined, otherwise use default scatter logic
      const x = customOffsets[i]?.x || scatterX;
      const y = customOffsets[i]?.y || scatterY;

      // const x = scatterX;
      // const y = scatterY;

      return {
        opacity: 1,
        scale: 1,
        x,
        y,
        transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
      };
    },
    exit: { opacity: 0, scale: 0.5, y: 0, transition: { type: "spring" } },
  };


  // const [hasLoadedOnce, setHasLoadedOnce] = useState(false); // Persistent state
  // const { ref: canvasRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // useEffect(() => {
  //   if (inView && !isModelLoaded) setIsModelLoaded(true); // Ensure model is loaded only once
  // }, [inView, isModelLoaded]);



 


  return (
    <>
      <section className="sec-1">
        <div
          className="section1-container"
          style={{ border: "" }}
          id="tailwind-container"
        >
          <div className="flex flex-wrap items-center row mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div
              className="w-full lg:w-1/2 text-center  text-lg-start"
              style={{ border: "" }}
            >
              <h1 className="display-5 text-white fw-bold">
                {t("section1.title1")}

                <span className="gradient-text-sec-1" ref={textRef}>
                  {t("section1.title2")}
                </span>
              </h1>
              <p className="text-white fs-5 fw-light">
                {t("section1.description")}
              </p>
            </div>

            <div
              className="w-full lg:w-1/2  text-center text-lg-end"
              style={{ border: "" }}
            >
              {/* =================3d model will be place here================= */}

              <div
                style={{ width: "100%", height: "100vh", position: "relative" }}
                
              >

                 


                {/* Animated Icons */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  { isModelLoaded && icons.map((icon, i) => (
                    <motion.img
                      key={i}
                      src={icon.src}
                      alt={icon.alt}
                      className="icon"
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      variants={iconVariants}
                      custom={i} // Pass index for staggered animations
                      initial="hidden"
                      animate={isHovered ? "visible" : "hidden"}
                      exit="exit"
                    />
                  ))}


                </div>

                {/* {isModelLoaded && ( */}

                <Canvas className="testing"
                  shadows
                  dpr={Math.min(window.devicePixelRatio, 2)} // Limit resolution for performance
                  gl={{ antialias: true }}>

                  <Suspense fallback={null}>

                      <OrbitControls
                        enableZoom={false} // Disable zooming
                        enableRotate={false} // Disable rotation
                        enablePan={true} // Allow panning
                        maxPolarAngle={Math.PI / 2} // Restrict upward rotation
                        minPolarAngle={0} // Restrict downward rotation
                      />

                      <ambientLight intensity={1.5} color={"0xffffff"} />

                      <directionalLight
                        position={[150, 150, 150]}
                        intensity={6}
                        color={"0xffffff"}
                      />
                      <spotLight
                        position={[100, 100, 100]} // Position of the light
                        angle={0.8} // Spread of the light beam
                        penumbra={1} // Soft edges
                        intensity={40} // Brightness
                        castShadow={false} // Enable shadows
                      />

{/* https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/master/src/assets/images/model.glb */}

                      <Model
                        modelPath={modelDraco}
                        isHovered={isHovered}
                        onLoad={() => setIsModelLoaded(true)}
                        // onLoad={() => console.log("Model loaded!")}                    
                      />
                  </Suspense>
                </Canvas>

                {/* )} */}

                

                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rectangular-oval-white-prop-2">
        <img className="w-100" src={modelShade} alt />
      </section>

      <section id="agence"
        className="sec-2"
        
        style={{ }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 order-2 order-md-1 text-center">
              <img
                className="img-fluid overlap-img"
                src={withMobile}
                alt
              />
            </div>
            <div className="col-12 col-lg-7 mb-5 mb-md-0 order-1 order-md-2">
              <div className="mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 pt-md-3 pt-lg-2 pt-xl-4 pt-xxl-5">
                <h4 className="text-white fw-light mt-md-0 ceo-sec-para">
                  {t("home-Section2.para1")}
                  <strong className="fw-semibold"> DIGITALY </strong>
                  {t("home-Section2.para2")}
                </h4>
                <h4 className="fw-semibold text-white text-end">
                  FORHRANI Mehdi
                </h4>
                <h5
                  className="text-end text-white fw-light"
                  style={{ fontStyle: "italic" }}
                >
                  {t("home-Section2.para3")}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileThreedModel;
