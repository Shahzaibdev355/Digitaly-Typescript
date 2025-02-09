import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LargeScreenModel = () => {
  const containerRef = useRef(null);

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
      model.scale.set(3, 4, 3.5);
      model.position.set(5, -2, 0);

      const scrollAnimations = gsap.timeline();
      scrollAnimations
        .to(model.position, {
          y: "-=0.3",
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        })
        .to(model.rotation, {
          y: "+=6.9",
          duration: 15,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-one",
            scrub: 3,
            start: "50% 60%",
            end: "0% 65%",
          },
        })
        .to(model.scale, {
          x: 5,
          y: 5.5,
          z: 5,
          scrollTrigger: {
            trigger: ".section-one",
            scrub: 5,
            start: "top top",
            end: "20% 70%",
          },
        })
        .to(model.scale, {
          x: 3.4,
          y: 3.5,
          z: 3,
          duration: 3,
          scrollTrigger: {
            trigger: ".section-one",
            scrub: 5,
            start: "80% 55%",
            end: "100% 100%",
          },
        });

      gsap.to(camera.position, {
        x: 7,
        z: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".section-one",
          endTrigger: ".section-two",
          scrub: 3,
          start: "top top",
          end: "bottom bottom",
        },
      });

      scene.add(model);
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

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);


















  
  return (










    <div>
      <div className="scene one" ref={containerRef}></div>
      <section className="section-one" style={{ height: "100vh" }}></section>
      <section className="section-two" style={{ height: "100vh" }}></section>
    </div>
  );
};

export default LargeScreenModel;
