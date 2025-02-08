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
import Tilt from 'react-parallax-tilt';
gsap.registerPlugin(ScrollTrigger);
const LargeScreenModel = () => {
  const containerRef = useRef(null);

  const [isImageReplaced, setIsImageReplaced] = useState(false);
  console.log(isImageReplaced, "image replace");

  const [isIntersecting, setIsIntersecting] = useState(false);
  console.log(isIntersecting, "intersect");
  const twitterRef = useRef();
  const facebookRef = useRef();
  const dribbleRef = useRef();
  const instaRef = useRef();
  const tiktokRef = useRef();
  const LinkedInRef = useRef();
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // Strong white light
    directionalLight.position.set(150, 150, 150);
    directionalLight.castShadow = true; // Enable shadows for more realism
    directionalLight.shadow.mapSize.width = 2048; // Increase shadow quality
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffffff, 39); // Increase intensity
    spotLight.position.set(100, 100, 100);
    spotLight.castShadow = true;
    spotLight.angle = Math.PI / 4; // Spotlight cone angle
    spotLight.penumbra = 5; // Softer edges
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;
    scene.add(spotLight);

    // Spotlight target (can be a specific point or object)
    spotLight.target.position.set(100, 100, 100); // Target the center of the scene (or adjust to your model)
    scene.add(spotLight.target);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let model;
    const loader = new GLTFLoader();
    loader.load("/images/Digitally Iphone Mock up 3D.gltf", (gltf) => {
      model = gltf.scene;
      model.name = "iphoneModel"; // Set a name for the model
      model.rotation.x = -0.1;
      model.rotation.y = -0.5;
      model.rotation.z = -0.1;
    
   
  
          
          model.scale.set(3, 4, 3.5);
          model.position.set(5, -2, 0);
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
        
      scene.add(model);
   

      window.addEventListener("pointermove", onMouseMove);
    });
    camera.position.set(0, 1.25, 5.5);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        setIsIntersecting(true); // Set the boolean to true
        console.log("Intersecting:", intersects[0].object.name);
      } else {
        setIsIntersecting(false); // Set the boolean to false
      }
    };
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
  useEffect(() => {
    // Run the animation based on intersection state
    if (isIntersecting) {
      gsap.set(
        [
          twitterRef.current,
          facebookRef.current,
          LinkedInRef.current,
          tiktokRef.current,
          dribbleRef.current,
          instaRef.current,
        ],
        { visibility: "visible" }
      );
      gsap.to(twitterRef.current, {
        x: 100,
        y: -10,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(facebookRef.current, {
        y: 10,
        x: -130,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(LinkedInRef.current, {
        y: 300,
        x: -230,

        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(tiktokRef.current, {
        y: 270,
        x: 50,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(dribbleRef.current, {
        y: 50,
        x: -290,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(instaRef.current, {
        y: 160,
        x: 210,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // gsap.set([twitterRef.current, facebookRef.current, LinkedInRef.current, tiktokRef.current, dribbleRef.current, instaRef.current], {visibility:"hidden" });

      gsap.to(twitterRef.current, {
        x: 0,
        y: 0, // Reset to original position when not intersecting
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(facebookRef.current, {
        x: 0,
        y: 0, // Reset to original position when not intersecting
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(LinkedInRef.current, {
        y: 0,
        x: 0,

        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(dribbleRef.current, {
        y: 0,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(instaRef.current, {
        y: 0,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(tiktokRef.current, {
        y: 0,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isIntersecting]);
  return (
    <>
    <div>
   
      <div
        className="scene one"
        ref={containerRef}
    
      ></div>
    
    </div>
      <section
        className="section-one"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="stylediv">
          <h1 className="display-5 text-white fw-bold">
            Construisons ensemble votre{" "}
            <span className="gradient-text-sec-1">futur en ligne</span>
          </h1>
          <p className="text-white fs-5 fw-light">
            Découvrez nous au travers du digital
          </p>
          <div className="icons_styling">
            <div>
              <img
                src={facebook}
                alt=""
                className="facebook"
                ref={facebookRef}
              />
              <img
                src={instagram}
                alt=""
                className="instagram"
                ref={instaRef}
              />

              <img src={Tiktok} alt="" className="instagram" ref={tiktokRef} />
            </div>
            <div>
              <img
                src={LinkedIn}
                alt=""
                className="instagram"
                ref={LinkedInRef}
              />

              <img src={twitter} alt="" className="twitter" ref={twitterRef} />
              <img src={dribble} alt="" className="dribble" ref={dribbleRef} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-two"
        id="agence"
        style={{ border: "3px solid green" }}
      >
        <div className="container">
          <div className="row">
            <div className="smScreen col-12 col-lg-5 order-2 order-md-1 text-center">
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
              <div className="alignment mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 pt-md-3 pt-lg-2 pt-xl-4 pt-xxl-5">
                <h4 className="text-white fw-light mt-3 mt-md-0 ceo-sec-para">
                  “Nous sommes passionnés par le succès de nos clients, et nous
                  sommes fiers de leur fournir des résultats qui ont un impact
                  positif sur leur entreprise. Que vous cherchiez à augmenter
                  vos ventes, à attirer plus de trafic sur votre site web, ou à
                  améliorer votre présence en ligne,{" "}
                  <strong className="fw-semibold"> DIGITALY </strong>
                  est là pour vous aider.”
                </h4>
                <h4 className="fw-semibold text-white text-end">
                  FORHRANI Mehdi
                </h4>
                <h5
                  className="text-end text-white fw-light"
                  style={{ fontStyle: "italic" }}
                >
                  Directeur Général DIGITALY
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
