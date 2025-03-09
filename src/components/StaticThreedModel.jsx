import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion

const facebook = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Facebook-1.png";
const instagram = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Instagram-1.png";
const twitter = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Twitter-1.png";
const dribble = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Dribble1.png";
const Tiktok = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Tiktok-1.png";
const LinkedIn = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/LinkedIn-1.png";


import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { modelShade } from "../assets/images";

import withMobile from "../assets/images/with-mobile.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Model = ({ modelPath, isHovered, onHoverStart, onHoverEnd }) => {
  useGLTF.preload(modelPath); // Preload the model
  const { scene } = useGLTF(modelPath);

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
    scale: isHovered ? 3 : 3.2,
    config: { mass: 1, tension: 200, friction: 20 }, // Adjust spring physics for smoothness
  });

  return (
    <a.primitive
      object={scene}
      // Adjust the model's position
      position={[0, -1.8, 0]} // [x, y, z] to position the model in 3D space
      // Adjust the model's rotation (in radians)
      rotation={[-0.1, -0.4, -0.1]} // [x, y, z] - x=tilt forward/back, y=rotate sideways, z=spin
      // scale={3.2} // Optional: Adjust the size of the model

      scale={scale} // Bind animated scale
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

const StaticThreedModel = () => {
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

  useEffect(() => {
    // Set hover state to true initially for a few seconds
    setIsHovered(true);
    const timer = setTimeout(() => setIsHovered(false), 3000); // Revert after 3 seconds

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
    hidden: { opacity: 0, scale: 0.5, y: 0 },
    visible: (i) => {
      // Default scatter logic
      const scatterX = Math.cos(i) * 200;
      const scatterY = Math.sin(i) * 200 - 100;

      // Define custom offsets for specific icons (based on index)
      const customOffsets = {
        2: { x: scatterX - 80, y: scatterY + 20 },
        1: { x: scatterX + 60, y: scatterY }, // Adjust Facebook
        5: { x: scatterX + 100, y: scatterY - 0 }, // Adjust Instagram
        // Add more custom offsets for other icons if needed
      };

      // Apply custom offsets if defined, otherwise use default scatter logic
      const x = customOffsets[i]?.x || scatterX;
      const y = customOffsets[i]?.y || scatterY;

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



  const playIconRef = useRef(null);
  const linkTextRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(playIconRef.current, {
      x: 180, // Slide to the right
      duration: 0.4,
      ease: "power1.out",
    });
    gsap.to(linkTextRef.current, {
      opacity: 0, // Fade out the text
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(playIconRef.current, {
      x: 0, // Reset position
      duration: 0.4,
      ease: "power1.in",
    });
    gsap.to(linkTextRef.current, {
      opacity: 1, // Bring back the text
      duration: 0.4,
      ease: "power1.in",
    });
  };

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
              className="w-full lg:w-1/2 text-center  text-lg-start section1-first-column"
              style={{ border: "" }}
            >
              <h1 className="section-1-main-outline text-white fw-bold">
                {t("section1.title1")}

                <span className="gradient-text-sec-1" ref={textRef}>
                  {t("section1.title2")}
                </span>
              </h1>
              <p className="text-white fs-5 fw-light">
                {t("section1.description")}
              </p>

              <div className="section1-contactus-row"
              
              >
                  <Link to="/Contact" className="section1-contactus-btn">{t("section1.btn1")}</Link>
                  
                  <div className="section1-Presentation-row"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                    <FontAwesomeIcon icon={faPlay} ref={playIconRef}/>
                    <Link to="/" ref={linkTextRef} >{t("section1.btn2")}</Link>

                  </div>
                  
              </div>

            </div>

            

            <div
              className="w-full lg:w-1/2  text-center text-lg-end"
              style={{ border: "" }}
            >
              {/* =================3d model will be place here================= */}

              <div
                style={{ width: "100%", height: "100vh", position: "relative" }}
                onMouseEnter={() => {
                  console.log("Hover started on outer div");
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  console.log("Hover ended on outer div");
                  setIsHovered(false);
                }}
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
                  {icons.map((icon, i) => (
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

                <Canvas>
                  {/* Add interaction controls */}
                  <OrbitControls
                    enableZoom={false} // Disable zooming
                    enableRotate={false} // Disable rotation
                    enablePan={true} // Allow panning
                    maxPolarAngle={Math.PI / 2} // Restrict upward rotation
                    minPolarAngle={0} // Restrict downward rotation
                  />
                  {/* Add lighting */}
                  <ambientLight intensity={1.5} color={"0xffffff"} />{" "}
                  {/* General ambient light */}
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
                    castShadow={true} // Enable shadows
                  />
                  {/* Load the GLTF model */}
                  <Model
                    modelPath="https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/public/images/Digitally%20Iphone%20Mock%20up%203D.gltf"
                    isHovered={isHovered}

                    // onHoverStart={() => setIsHovered(true)} // Set hover state on
                    // onHoverEnd={() => setIsHovered(false)} // Set hover state off
                  />
                </Canvas>

                
              </div>
            </div>



          </div>
        </div>
      </section>

      <section className="rectangular-oval-white-prop-2">
        <img className="w-100" src={modelShade} alt />
      </section>

      <section id="agence" className="sec-2 section-two" style={{ border: "" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 order-2 order-md-1 text-center">
             
              <AnimatePresence>
                <motion.img
                  key={"withMobile"}
                  className="img-fluid overlap-img"
                  src={withMobile}
                  alt={"With Mobile"}
                 
                  transition={{
                    duration: 0.5, // Smooth transition duration
                    ease: "easeInOut", // Smooth easing
                  }}
                />
              </AnimatePresence>
            </div>
            <div className="col-12 col-lg-7 mb-5 mb-md-0 order-1 order-md-2">
              <div className="mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 pt-md-3 pt-lg-2 pt-xl-4 pt-xxl-5">
                <h4 className="text-white fw-light mt-3 mt-md-0 ceo-sec-para">
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

export default StaticThreedModel;
