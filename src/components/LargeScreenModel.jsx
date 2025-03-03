import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

import { a, useSpring } from "@react-spring/three";

import { ScrollTrigger } from "gsap/ScrollTrigger";


// import facebook from "../assets/Updated Icons/Facebook-1.png";
// import instagram from "../assets/Updated Icons/Instagram-1.png";
// import twitter from "../assets/Updated Icons/Twitter-1.png";
// import dribble from "../assets/Updated Icons/Dribble1.png";
// import Tiktok from "../assets/Updated Icons/Tiktok-1.png";
// import LinkedIn from "../assets/Updated Icons/LinkedIn-1.png";


const facebook = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Facebook-1.png";
const instagram = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Instagram-1.png";
const twitter = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Twitter-1.png";
const dribble = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Dribble1.png";
const Tiktok = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/Tiktok-1.png";
const LinkedIn = "https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/src/assets/Updated%20Icons/LinkedIn-1.png";



import withMobile from "../assets/images/with-mobile.png";
import withOutMobile from "../assets/images/without-mobile.png";

import Tilt from "react-parallax-tilt";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { modelShade } from "../assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const LargeScreenModel = () => {
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

  const containerRef = useRef(null);

  const [isImageReplaced, setIsImageReplaced] = useState(false);
  console.log(isImageReplaced, "image replace");

  const [isHovered, setIsHovered] = useState(false); // Hover state for icons

  const icons = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: Tiktok, alt: "TikTok" },
    { src: LinkedIn, alt: "LinkedIn" },
    { src: twitter, alt: "Twitter" },
    { src: dribble, alt: "Dribble" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const scene = new THREE.Scene();
    const fov = 80;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.9;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const raycaster = new THREE.Raycaster(); // Raycaster for hover detection
    const pointer = new THREE.Vector2();

    let model;
    const loader = new GLTFLoader();
    loader.load("https://raw.githubusercontent.com/Shahzaibdev355/Digitaly-Typescript/refs/heads/master/public/images/Digitally%20Iphone%20Mock%20up%203D.gltf", (gltf) => {
      model = gltf.scene;
      model.name = "iphoneModel"; // Set a name for the model

      // Apply transformations

      model.rotation.set(-0.2, -0.6, -0.2); // Adjusted rotation
      model.scale.set(2.8, 4, 3); // Adjusted uniform scale
      model.position.set(5, -2.5, 0); // Adjusted position

      // Traverse the scene and update material properties
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 1; // Increase shininess
          child.material.roughness = 0;
          child.material.color.set("0xffffff");
        }
      });

      scene.add(model);

      const car_anim = gsap.timeline();

      car_anim

        .to(model.rotation, {
          x: "+=0.5",
          y: "+=6.9",
          z: "+=0.5",
          duration: 15, // Increase duration to slow down the animation
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-one",
            endTrigger: ".section-two",
            scrub: 3, // Increase scrub to make the animation follow the scroll more slowly
            start: "50% 60%", // Animation starts when top of sec-2 reaches 80% of the viewport
            end: "0% 65%",
          },
        })
        .to(model.scale, {
          x: 5,
          y: 6,
          z: 5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-one",
            scrub: 8, // Increase scrub to slow down the scroll-based animation
            start: "top top", // Start zoom-in when the scroll starts
            end: "50% 70%",
            invalidateOnRefresh: true,
          },
        })
        // Reduce the scale slowly as you enter section two
        .to(model.scale, {
          x: 3.4,
          y: 3.5,
          z: 3,

          duration: 5,
          // Keep this slow for smooth effect
          ease: "power1.inOut",

          scrollTrigger: {
            trigger: ".section-one",
            scrub: 4,
            start: "80% 55%",
            end: "100% 100%", // End somewhere in section two

            invalidateOnRefresh: true,
          },
        })
        .to(model.scale, {
          x: 3.4,
          y: 3.5,
          z: 3,

          scrollTrigger: {
            trigger: ".section-two",
            scrub: 5, // Increase scrub to slow down the scroll-based animation
            start: "70% 100%", // Continue shrinking further down
            end: "65% 100%",
            // markers: true,
            invalidateOnRefresh: true,
            ease: "power1.inOut",
            onEnter: () => {
              setIsImageReplaced(true, "true");
              console.log("Model reached the end point!");
            },
            onLeaveBack: () => {
              gsap.delayedCall(0, () => {
                setIsImageReplaced(false);
                console.log(
                  "Scrolled back, image replaced is now false with delay."
                );
              });
            },
          },
        })

        .to(model.rotation, {
          x: "+=0",

          duration: 5, // Increase duration to slow down the animation
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-two",
            scrub: 3, // Increase scrub to make the animation follow the scroll more slowly
            start: "0% 60%", // Animation starts when top of sec-2 reaches 80% of the viewport
            end: "10% 65%",
          },
        })
        .to(model.position, {
          y: "-=0.3",
          x: "-=5.1",
          z: "-=0.6",
          duration: 5, // Increase duration to slow down the animation
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: ".section-two",

            scrub: 5, // Increase scrub to slow down the scroll-based animation
            start: "0% 80%", // Animation starts when top of sec-2 reaches 80% of the viewport
            end: "10% 65%",
          },
        });
      // NEW: Camera movement based on scroll
      gsap.to(camera.position, {
        x: 7,
        z: 15, // Move the camera farther away as you scroll down
        ease: "none",
        scrollTrigger: {
          trigger: ".section-one",
          endTrigger: ".section-two",
          scrub: 3,

          start: "top top", // Start moving camera when scroll starts
          end: "bottom bottom", // Stop when scroll reaches the end of section-two
          onUpdate: () => {
            camera.updateProjectionMatrix(); // Ensure camera updates during movement
          },
        },
      });
      gsap.to(container, {
        y: "-100vh",
        willChange: "transform",
        ease: "none",
        scrollTrigger: {
          scrolled: "body",

          trigger: ".section-two",
          start: "3% 60%",
          end: "10% 100%",

          scrub: true,
        },
      });

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // Strong white light
      directionalLight.position.set(150, 150, 150);
      directionalLight.castShadow = true; // Enable shadows for more realism
      directionalLight.shadow.mapSize.width = 2048; // Increase shadow quality
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      const spotLight = new THREE.SpotLight(0xffffff, 40); // Increase intensity
      spotLight.position.set(100, 100, 100);
      spotLight.castShadow = true;
      spotLight.angle = 0.8; // Spotlight cone angle
      spotLight.penumbra = 5; // Softer edges
      spotLight.shadow.mapSize.width = 2048;
      spotLight.shadow.mapSize.height = 2048;
      scene.add(spotLight);

      // Spotlight target (can be a specific point or object)
      spotLight.target.position.set(100, 100, 100); // Target the center of the scene (or adjust to your model)
      scene.add(spotLight.target);

      const onPointerMove = (event) => {
        if (!model) return;


        // Get the element that the pointer is currently hovering over
        const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
        

        // Check if the hovered element is inside your specific div
        if (hoveredElement && (hoveredElement.closest('.language-change-dropdown-column') ||  hoveredElement.closest('.lenterprise-sub-dropdown'))  ) {
          // If hovering over the div, prevent raycaster interaction
          setIsHovered(false);
          return;
        }

        // Update pointer coordinates
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Cast ray and check intersections
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(model, true); // Check against the model
        setIsHovered(intersects.length > 0); // Set hover state based on intersection
      };

      window.addEventListener("pointermove", onPointerMove);
    });

    camera.position.set(0, 1.25, 5.5);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
      if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);

        //     const aspect = container.clientWidth / container.clientHeight;
        // camera.aspect = aspect;
        // camera.updateProjectionMatrix();
        // renderer.setSize(container.clientWidth, container.clientHeight);
      }
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose(); // Ensure renderer resources are freed
    };
  }, []);

  useEffect(() => {
    // Set hover state to true initially for a few seconds
    setIsHovered(true);
    const timer = setTimeout(() => setIsHovered(false), 4000); // Revert after 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const AnimatedIcons = ({ isHovered, icons }) => {
    const iconVariants = {
      hidden: { opacity: 0, scale: 0.5, y: 0 },
      visible: (i) => {
        const scatterX = Math.cos(i) * 250;
        const scatterY = Math.sin(i) * 200 - 100;

        const customOffsets = {
          2: { x: scatterX - 80, y: scatterY + 20 },
          1: { x: scatterX + 60, y: scatterY },
          5: { x: scatterX + 100, y: scatterY - 0 },
        };

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
      exit: {
        opacity: 0,
        scale: 0.5,
        y: 0, // Hide with same vertical position as "hidden"
        transition: { delay: 0.1, type: "spring", stiffness: 100 }, // Same type and stiffness
      },
    };

    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "",
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
              left: "60%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            variants={iconVariants}
            custom={i}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            exit="exit"
          />
        ))}
      </div>
    );
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
      <section className="sec-1 section-one">
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
                  <Link to="/Contact" className="section1-contactus-btn">Contact Us</Link>
                  
                  <div className="section1-Presentation-row"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                    <FontAwesomeIcon icon={faPlay} ref={playIconRef}/>
                    <Link to="/" ref={linkTextRef} >Presentation Video</Link>

                  </div>
                  
              </div>

            </div>

            <div
              className="w-full lg:w-1/2  text-center text-lg-end testing-3d"
              style={{ border: "" }}
            >
              {/* =================3d model will be place here================= */}

              {/* <div
                style={{
                  border: "",
                  width: "100%",
                  height: "100vh",
                  position: "relative",
                  zIndex: 0,
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                {isHovered && (
                  <AnimatedIcons isHovered={isHovered} icons={icons} />
                )}

                <div
                  style={{ border: "" }}
                  className="scene one"
                  ref={containerRef}
                ></div>




              </div> */}



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
                  key={isImageReplaced ? "withMobile" : "withOutMobile"}
                  className="img-fluid overlap-img"
                  src={isImageReplaced ? withMobile : withOutMobile}
                  alt={isImageReplaced ? "With Mobile" : "Without Mobile"}
                  initial={{ opacity: 0, x: isImageReplaced ? 20 : -20 }} // Adjust based on the condition
                  animate={{ opacity: 1, x: 0 }} // Fade in and center position
                  exit={{ opacity: 0, x: isImageReplaced ? -20 : 20 }} // Adjust based on the condition
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

export default LargeScreenModel;
