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
import "../assets/css/style.css";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const mountRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle window resizing
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for resizing
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // Strong white light
    directionalLight.position.set(150, 150, 150);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff, 39); // Increase intensity
    spotLight.position.set(100, 100, 100);
      spotLight.target.position.set(100, 100, 100); // Target the center of the scene (or adjust to your model)
    scene.add(spotLight.target);
    directionalLight.shadow.mapSize.width = 2048; // Increase shadow quality
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    let model;

    loader.load("/images/Digitally Iphone Mock up 3D.gltf", (gltf) => {
      model = gltf.scene;

      // Default scale
      model.scale.set(3.5, 4, 3.5);

      // Set position and rotation based on window width (breakpoints)


        model.position.set(0, 0, 0);
        model.rotation.set(-0.1, -0.5, -0.1);

        // GSAP animation with ScrollTrigger
        gsap.fromTo(
          model.position,
          { x: 4, y: -3.5 },
          {
            x: 2.2,
            duration: 3,
            ease: "power1.out",
            scrollTrigger: {
              trigger: "#model-section",
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );

        const car_anim = gsap.timeline();
        car_anim.to(model.rotation, {
          x: "+=0",
          y: "+=6.5",
          z: "+=0",
          duration: 15,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-one",
            endTrigger: ".section-two",
            scrub: 3,
            start: "50% 60%",
            end: "0% 65%",
       
          },
        });
      
   
      scene.add(model);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [windowWidth]); // Re-run effect when windowWidth changes

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

const MediumModel = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled, 'Scroll');
  

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const iconsRef = useRef([]);
 
  useEffect(() => {
    if (iconsRef.current[0] && isScrolled) {
      gsap.to(iconsRef.current[0], {
        y: -100,
        x: 350,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
      // Repeat for other icons as needed...
    }
    
  }, [isScrolled, iconsRef]);
  useEffect(() => {
    if (iconsRef.current[1] && isScrolled) {
      gsap.to(iconsRef.current[1], {
        x: 180,
        y: -230,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
      // Repeat for other icons as needed...
    }
    
  }, [isScrolled, iconsRef]);
  useEffect(() => {
    if (iconsRef.current[2] && isScrolled) {
      gsap.to(iconsRef.current[2], {
        y: 30,
        x: 300,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
      // Repeat for other icons as needed...
    }
    
  }, [isScrolled, iconsRef]);
  useEffect(() => {
    if (iconsRef.current[3] && isScrolled) {
      gsap.to(iconsRef.current[3], {
        y: 10,
        x: 60,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
      // Repeat for other icons as needed...
    }
    
  }, [isScrolled, iconsRef]);
  useEffect(() => {
    if (iconsRef.current[4] && isScrolled) {
      gsap.to(iconsRef.current[4], {
        y: -190,
        x: 90,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
      // Repeat for other icons as needed...
    }
    
  }, [isScrolled, iconsRef]);
  useEffect(() => {
    if (iconsRef.current[5] && isScrolled) {
      gsap.to(iconsRef.current[5], {
        y: 70,
       x: 150,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      });
      // Repeat for other icons as needed...
    }
    
  }, [isScrolled, iconsRef]);
  // Dynamic scroll limit based on window width
  const getScrollLimit = () => {
    if (windowWidth >= 768) {
      console.log(windowWidth , 'window');
      
      return 400;
    } else if (windowWidth >= 425) {
      return 550;
    }
    else if (windowWidth >= 375) {
      return 750;
    }
    else {
      return 700;
    }
  };

  const scrollLimit = getScrollLimit();
  console.log(window.scrollY);
      
  const handleScroll = () => {
    if (window.scrollY > scrollLimit) {
     
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLimit]);

  const divRef = useRef(null);

  const myFunction = () => {
    if (divRef.current) {
      divRef.current.classList.add("mystyle");
    }
  };

  return (
    <div className="section">
      <div ref={divRef} className={isScrolled ? "mystyle" : "canvas"}>
        <section
          id="model-section"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection:"column",
            justifyContent: "center",
          }}
        >
          <p onClick={myFunction}></p>
          <div style={{ height: "500px", width: "500px" , position:"relative", left:"3rem" }}>
            <ThreeScene />
          </div>

          <div>
          {isScrolled && (
   <div className="iconStyle">
   <img ref={(el) => (iconsRef.current[0] = el)} src={facebook} alt="Facebook" style={{ width: "40px", height: "40px" }} />
             <img ref={(el) => (iconsRef.current[1] = el)} src={dribble} alt="Dribbble" style={{ width: "40px", height: "40px" }} />
             <img ref={(el) => (iconsRef.current[2] = el)} src={twitter} alt="Twitter" style={{ width: "40px", height: "40px" }} />

             <img ref={(el) => (iconsRef.current[3] = el)} src={Tiktok} alt="Facebook" style={{ width: "40px", height: "40px" }} />
             <img ref={(el) => (iconsRef.current[4] = el)} src={LinkedIn} alt="Dribbble" style={{ width: "40px", height: "40px" }} />
             <img ref={(el) => (iconsRef.current[5] = el)} src={instagram} alt="Twitter" style={{ width: "40px", height: "40px" }} />
          
   </div>
)}
          </div>
        </section>
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
        </div>
      </section>

      <section
  className="section-two"
  id="agence"
  // style={{ border: "3px solid green" }}
>
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-6 col-lg-7 mb-5 mb-md-0 order-1 order-md-2">
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

    </div>
  );
};

export default MediumModel;
