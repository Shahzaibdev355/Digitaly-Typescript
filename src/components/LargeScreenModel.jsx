import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import facebook from "../assets/Updated Icons/Facebook-1.png";
import instagram from "../assets/Updated Icons/Instagram-1.png";
import twitter from "../assets/Updated Icons/Twitter-1.png";
import dribble from "../assets/Updated Icons/Dribble1.png";
import Tiktok from "../assets/Updated Icons/Tiktok-1.png";
import LinkedIn from "../assets/Updated Icons/LinkedIn-1.png";
import Image2 from "../assets/images/newImage.png";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion"; // Import Framer Motion
import { useTranslation } from "react-i18next";

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

    let model;
    const loader = new GLTFLoader();
    loader.load("/images/Digitally Iphone Mock up 3D.gltf", (gltf) => {
      model = gltf.scene;
      model.name = "iphoneModel"; // Set a name for the model
      

      // Apply transformations

      model.rotation.set(-0.2, -0.6, -0.2); // Adjusted rotation
      model.scale.set(2.8, 4, 3); // Adjusted uniform scale
      model.position.set(5,-2.3, 0); // Adjusted position

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
        .to(model.position, {
          y: "-=0.3", // Move down
          duration: 2,

          yoyo: true, // Enable the model to go back up
          repeat: -1, // Repeat indefinitely for continuous floating
          ease: "power1.inOut",
        })

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
          y: 5.5,
          z: 5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-one",
            scrub: 5, // Increase scrub to slow down the scroll-based animation
            start: "top top", // Start zoom-in when the scroll starts
            end: "20% 70%",
            invalidateOnRefresh: true,
          },
        })
        // Reduce the scale slowly as you enter section two
        .to(model.scale, {
          x: 3.4,
          y: 3.5,
          z: 3,

          duration: 3,
          // Keep this slow for smooth effect
          ease: "power1.inOut",

          scrollTrigger: {
            trigger: ".section-one",
            scrub: 5,
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
            start: "50% 90%", // Continue shrinking further down
            end: "65% 100%",
            // markers: true,
            invalidateOnRefresh: true,
            ease: "power1.inOut",
            onEnter: () => {
              setIsImageReplaced(true, "true");
              console.log("Model reached the end point!");
            },
            onLeaveBack: () => {
              setIsImageReplaced(false);
              console.log("Scrolled back, image replaced is now false");
            },
          },
        })
        .to(model.rotation, {
          x: "+=0",

          duration: 15, // Increase duration to slow down the animation
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-two",
            scrub: 3, // Increase scrub to make the animation follow the scroll more slowly
            start: "0% 80%", // Animation starts when top of sec-2 reaches 80% of the viewport
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

     


      window.addEventListener("pointermove");
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

  const AnimatedIcons = ({ isHovered, icons }) => {
    const iconVariants = {
      hidden: { opacity: 0, scale: 0.5, y: 0 },
      visible: (i) => {
        const scatterX = Math.cos(i) * 200;
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
      exit: { opacity: 0, scale: 0.5, y: 0, transition: { type: "spring" } },
    };

    return (
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
              left: "73%",
              top: "60%",
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
              className="w-full lg:w-1/2  text-center text-lg-end testing-3d"
              style={{ border: "2px solid red" }}
            >
              {/* =================3d model will be place here================= */}

              {isHovered && <AnimatedIcons isHovered={isHovered} icons={icons} />}

              <div
                style={{ border: "3px solid red" }}
                className="scene one"
                ref={containerRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rectangular-oval-white-prop-2">
        <img className="w-100" src="./images/Rectangle 9522.png" alt />
      </section>

      <section
        id="agence"
        className="sec-2 section-two"
        style={{ border: "3px solid green" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 order-2 order-md-1 text-center">
              {/* <img
                className="img-fluid overlap-img"
                src="./images/man-effect2.png"
                alt
              /> */}

              {isImageReplaced ? (
                <img className="img-fluid overlap-img" src={Image2} alt />
              ) : (
                <img
                  className="img-fluid overlap-img"
                  src="./images/man-effect2.png"
                  alt
                />
              )}
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
