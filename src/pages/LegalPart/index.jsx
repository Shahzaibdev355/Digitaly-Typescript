import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

import {
  legalHeroImg,
  legalCard1Img,
  legalCard2Img,
  legalCard3Img,
  legalCard4Img,
} from "../../assets/images";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const LegalDigitaly = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
    });
  }, []);

  return (
    <>
      <Header />

      {/* ====================Model work in this section==================== */}
      <section
        className="sec-1"
        style={{ border: "", backgroundAttachment: "" }}
      >
        <div className="container" style={{ padding: "0px", border: "" }} id="">
          <div className="align-items-center mt-5">
            <div
              className="col-12 col-lg-12 col-md-12 LegalHeroImg"
              style={{ border: "" }}
            >
              <img src={legalHeroImg} />
              <h1> DIGITALY Corporate, External, and Legal Affairs Group </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-1 mt-5">
        <div className="container" style={{ border: "" }}>
          <div className="align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div
              className="col-12 col-lg-12 col-md-12 LegalHeading"
              style={{ border: "" }}
            >
              <span ref={textRef} className="gradient-text-Legal-heading">
                Welcome to DIGITALYLEGAL
              </span>
              <p>
                DIGITALY Legal is dedicated to ensuring that all of our
                activities are compliant and legally protected. As a key partner
                in our company's growth, we manage contracts, protect our
                digital rights, and maintain a solid legal framework to support
                our ambitions, both locally and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================Model work in this section==================== */}
      <section
        className="sec-1"
        style={{ border: "", backgroundAttachment: "" }}
      >
        <div className="legalCard-container" style={{ border: "" }} id="">
          <div className="legalCard-row align-items-center justify-content-between mt-5">
            <div
              className="col-12 col-md-3 text-center text-lg-start legalCard-1"
              style={{ border: "" }}
            >
              <img src={legalCard1Img} alt="" />

              <div className="legalCard-1-text">
                <h2>Conformity & Regulations</h2>
                <p>
                  DIGITALY Legal ensures all our operations comply with local
                  and international laws. Our team stays ahead of global
                  regulatory changes, safeguarding DIGITALY's growth and
                  reputation.
                </p>
              </div>
            </div>
           
            <div
              className="col-12 col-md-3 text-center text-lg-start legalCard-2"
              style={{ border: "" }}
            >
              <img src={legalCard2Img} alt="" />

              <div className="legalCard-1-text">
                <h2>Intellectual Property</h2>
                <p>
                  We protect DIGITALY's innovations, trademarks, and intellectual assets. DIGITALY Legal secures our creative and technical achievements through robust intellectual property strategies.
                </p>
              </div>
            </div>

            <div
              className="col-12 col-md-3 text-center text-lg-start legalCard-3"
              style={{ border: "" }}
            >
              <img src={legalCard3Img} alt="" />

              <div className="legalCard-1-text">
                <h2>Contract Management</h2>
                <p>
                  From drafting to negotiating agreements, DIGITALY Legal ensures all contracts align with our objectives and legal requirements, fostering trust and clarity.
                </p>
              </div>
            </div>

            <div
              className="col-12 col-md-3 text-center text-lg-start legalCard-4"
              style={{ border: "" }}
            >
              <img src={legalCard4Img} alt="" />

              <div className="legalCard-1-text">
                <h2>Strategic Support</h2>
                <p>
                  DIGITALY Legal advises all departments on legal best practices. Our proactive approach ensures ethical and compliant decisions across the organization.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default LegalDigitaly;
