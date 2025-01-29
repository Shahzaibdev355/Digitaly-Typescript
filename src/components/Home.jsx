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

  return (
    <>
      <Header scrollToSection={handleScrollToSection} />

      <section
        className="rectangular-oval-white-prop"
        style={{ backgroundAttachment: "" }}
      >
        <img className="w-75" src="./images/Rectangle 9521.png" alt />
      </section>
    
      {/* ====================Model work in this section==================== */}
      <section
        className="sec-1"
        style={{ border: "", backgroundAttachment: "" }}
      >
        <div className="container" style={{ border: "" }} id="testing">
          <div className="row align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div
              className="col-12 col-lg-6 text-center text-lg-start"
              style={{ border: "3px solid red" }}
            >
              <h1 className="display-5 text-white fw-bold">
                {/* Construisons ensemble votre */}
                {t("section1.title1")}

                {/* <span className="gradient-text-sec-1">
                  {t("section1.title2")}
                </span> */}

                <span
                  className="gradient-text-sec-1"
                  ref={textRef}
                  
                >
                  {t("section1.title2")}
                </span>
              </h1>
              <p className="text-white fs-5 fw-light">
                {/* Découvrez nous au travers du digital  */}
                {t("section1.description")}
              </p>
            </div>

            <div
              className="col-12 col-lg-6 my-5 py-5 text-center text-lg-end"
              style={{ border: "3px solid pink" }}
            >
              {/* =================3d model will be place here================= */}
            </div>
          </div>
        </div>
      </section>

     

      <section className="rectangular-oval-white-prop-2">
        <img className="w-100" src="./images/Rectangle 9522.png" alt />
      </section>

      <section
        className="sec-2"
        id="agence"
        style={{ border: "3px solid green" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 order-2 order-md-1 text-center">
              <img
                className="img-fluid overlap-img"
                src="./images/man-effect2.png"
                alt
              />
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

      <section
        className="sec-3-services"
        id="animate-text"
        key={i18n.language + "-1"} // Forces component to re-render when language changes
        ref={(el) => (textRefs.current[0] = el)}
        style={{ position: "relative" }}
      >
        <div className="container" id="service">
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
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Dev App 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        {/* Développement
                        <br />
                        D'Applications Mobiles */}
                        {t("services-section.service-card1.para1")}
                        <br />
                        {t("services-section.service-card1.para2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Dev web  full stack 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        {t("services-section.service-card2.para1")}
                        <br />
                        {t("services-section.service-card2.para2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Web design 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        {t("services-section.service-card3.para1")}
                        <br />
                        {t("services-section.service-card3.para2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Graphic design 2.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        {t("services-section.service-card4.para1")}
                        <br />
                        {t("services-section.service-card4.para2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Audiovisual creation 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        {t("services-section.service-card5.para1")}
                        <br />
                        {t("services-section.service-card5.para2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Community management 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12" id="project">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        {t("services-section.service-card6.para1")}
                        <br />
                        {t("services-section.service-card6.para2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec-4-projects py-5"
        id="animate-text"
        key={i18n.language + "-2"}
        ref={(el) => (textRefs.current[1] = el)}
      >
        <div className="project-container">
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-5">
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
                  <h2 className="text-white fw-semibold">
                    {" "}
                    {t("project-section.heading1")}
                  </h2>
                </div>
              </div>
              <div className="text-white mt-4 mt-md-0 text-center text-md-start">
                <p className="projects-para">{t("project-section.para1")}</p>
              </div>
              <div className="text-center text-md-start">
                <button className="mt-5 py-2 px-5 btn fw-bold fs-4 rounded-3 project-sec-btn">
                  {t("project-section.btn")}
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6  align-self-center">
              <ProjectSlider />
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
