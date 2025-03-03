import { useState, useEffect, useRef, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faStar } from "@fortawesome/free-solid-svg-icons";
// import { Parallax } from "react-scroll-parallax";

import { useTranslation } from "react-i18next";

// import SimpleParallax from "simple-parallax-js";

import Header from "./Header";
import ProjectSlider from "./ProjectSlider";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

import gsap from "gsap";
import SplitType from "split-type";





import Scene from "./MobileThreedModel";

import LargeScreenModel from "./LargeScreenModel";
import MobileThreedModel from "./MobileThreedModel";
import { robotProject } from "../assets/images";






import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCards from "./SeviceCards";
import StaticThreedModel from "./StaticThreedModel";

gsap.registerPlugin(ScrollTrigger);





const Home = () => {
  const { t, i18n } = useTranslation();

  // Log the current language when the component mounts or language changes
  useEffect(() => {
    console.log("Current Language in Home:", i18n.language);
    console.log("Title 1:", t("section1.title1"));
    console.log("Title 2:", t("section1.title2"));
    console.log("Description:", t("section1.description"));
    console.log(t("services-section.para1"));
  }, [i18n.language]);

  const textRefs = useRef([]);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);


  


  // useEffect(() => {
  //   const sections = document.querySelectorAll("#animate-text");

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting && animationsEnabled) {
  //         const splitText = new SplitType(
  //           entry.target.querySelector(".text-to-animate")
  //         );

  //         gsap.fromTo(
  //           splitText.chars,
  //           { opacity: 0 },
  //           {
  //             opacity: 1,
  //             stagger: 0.07,
  //             ease: "power2.out",
  //             onComplete: () => {
  //               entry.target.classList.add("animated");
  //             },
  //           }
  //         );
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.1, // Adjust as needed
  //   });

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, [animationsEnabled]); // Add animationsEnabled as a dependency

  const runAnimations = () => {
    const sections = document.querySelectorAll("#animate-text");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && animationsEnabled) {
          const splitText = new SplitType(
            entry.target.querySelector(".text-to-animate")
          );

          gsap.fromTo(
            splitText.chars,
            { opacity: 0 },
            {
              opacity: 1,
              stagger: 0.07,
              ease: "power2.out",
              onComplete: () => {
                entry.target.classList.add("animated");
              },
            }
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust as needed
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  };

  // Re-run animations whenever the language changes
  useEffect(() => {
    runAnimations();
  }, [i18n.language]); // Trigger animation re-initialization on language change

  useEffect(() => {
    runAnimations();
  }, []); // Initial animation on component mount

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
    });
  }, []);

  // Header Links Function passed as prop (To disable animation while scroll on specific section)
  const handleScrollToSection = (id) => {
    setAnimationsEnabled(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setAnimationsEnabled(true), 1000);
    }
  };

  // Back to top functionality
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToTop = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // To disable scroll animation when backing up
  const scrollToTop = (e) => {
    e.preventDefault();
    setAnimationsEnabled(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => setAnimationsEnabled(true), 1000);
  };




  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const render3DModel = () => {
    if (screenSize > 1080) {
      return <StaticThreedModel/>;
    } else if(screenSize < 768) {
      return <MobileThreedModel/>;
    }
  };


  const sectionRef = useRef(null);

  useEffect(() => {
    const buttons = sectionRef.current.querySelectorAll(
      ".project-sec-btn4, .project-sec-btn3, .project-sec-btn2"
    );

    gsap.fromTo(
      buttons,
      {
        scale: 0.5, // Start smaller
        opacity: 0, // Start invisible
      },
      {
        scale: 1, // Zoom to normal size
        opacity: 1, // Fade in
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2, // Animate buttons one after another
        scrollTrigger: {
          trigger: sectionRef.current, // Trigger animation when section is visible
          start: "top 80%", // Start animation when top of section is 80% into the viewport
        },
      }
    );
  }, []);






  return (
    <>
      <Header scrollToSection={handleScrollToSection} />

      {/* <section
        className="rectangular-oval-white-prop"
      >
        <img className="w-75" src="./images/Rectangle 9521.png" alt />
      </section> */}
    
      {/* ====================Model work in this section==================== */}


      {render3DModel()}

     

     

      <section
        className="sec-3-services"
        id="animate-text"
        key={i18n.language + "-1"} // Forces component to re-render when language changes
        ref={(el) => (textRefs.current[0] = el)}
        style={{ position: "relative", border: '' }}
        
      >
        <div className="services-container" id="service">
          <div className="rectangular-oval-white-prop-3">
            <img className="img-fluid" src="./images/Rectangle 9544.png" alt />
          </div>
          <div
            className="text-overlay-services my-5"
            style={{ position: "relative" }}
          >
            <h1
              className="fw-bold fs-cus-sty service-heading"
              style={{ color: "rgba(255, 255, 255, 0.192)" }}
            >
              {t("services-section.service-heading")}
            </h1>

            <div className="p-text-adjust-sty text-to-animate">
              <h2 className="text-white fw-light servive-overlap-para">
                {t("services-section.para1")}{" "}
                <strong> {t("services-section.para2")} </strong>
              </h2>
            </div>
          </div>

          <ServiceCards/>
         
        </div>
      </section>




      <section
        className="sec-4-projects py"
        id="animate-text"
        key={i18n.language + "-2"}
        ref={(el) => (textRefs.current[1] = el)}

        
      >
        <div className="project-container" >
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-7 align-self-center community-column-div">
              <div
                className="text-overlay-projects mt-0 mt-md-1 mt-lg-0  project-heading-div"
                style={{ position: "relative" }}
              >
                <h1
                  className="fw-bold fs-cus-sty-projects"
                  style={{ color: "rgba(255, 255, 255, 0.192)" }}
                 
                >
                  {t("project-section.main-heading")}
                </h1>
                <div className="p-text-adjust-sty-project text-to-animate">
                  <h2 className="text-white fw-semibold "
                   dangerouslySetInnerHTML={{ __html: t("project-section.heading1") }}
                  >
                    
                  </h2>
                </div>
              </div>
              <div className="text-white mt-4 mt-md-0 text-center text-md-start">
                <p className="projects-para" dangerouslySetInnerHTML={{ __html: t("project-section.para1") }}></p>


               

              </div>
              <div className="text-center text-md-start community-btn-row">
                <button className="mt-4 py-2 px-5 btn fw-bold fs-4 rounded-3 project-sec-btn">
                  {t("project-section.btn")}
                </button>


               
              </div>
            </div>

            <div className="col-12 col-lg-5  align-self-end community-section" ref={sectionRef}>
              {/* <ProjectSlider /> */}

              <button className=" py-2 px-4 btn rounded-3 project-sec-btn4">
                  {t("project-section.btn4")}
                </button>

              <img src={robotProject} alt="" className="community-section-img"/>

              <button className=" py-2 px-4 btn rounded-3 project-sec-btn3">
                  {t("project-section.btn3")}
                </button>


              <button className=" py-2 px-4 btn rounded-3 project-sec-btn2">
                  {t("project-section.btn2")}
                </button>
            </div>
          </div>
        </div>
      </section>








      <section
        className="sec-3-services"
        id="animate-text"
        key={i18n.language + "-3"}
        ref={(el) => (textRefs.current[2] = el)}
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="rectangular-oval-white-prop-3">
            <img className="img-fluid" src="./images/Rectangle 9544.png" alt />
          </div>
          <div
            className="text-overlay-reference my-5"
            style={{ position: "relative" }}
          >
            <h1
              className="fw-bold fs-cus-sty-testimonial"
              style={{ color: "rgba(255, 255, 255, 0.192)" }}
            >
              {t("testimonial-section.heading1")}
            </h1>
            <div className="p-text-adjust-sty-testimonial-div  text-to-animate">
              <h2 className="text-white fw-light p-text-adjust-sty-testimonial">
                {t("testimonial-section.heading2")}{" "}
                <strong> {t("testimonial-section.heading3")} </strong>
              </h2>
            </div>
          </div>

          <div className="row">
            <Testimonial />
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      <a
        href=""
        className={`btn btn-lg btn-lg-square rounded-circle back-to-top ${
          isVisible ? "show" : "hide"
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
      </a>

      {/* {isVisible && (
          <a
            href="#"
            className="btn btn-lg btn-lg-square rounded-circle back-to-top show"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-white" />
          </a>
        )} */}
      {/* </SmoothScrollbarWrapper> */}
    </>
  );
};

export default Home;
