// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Marquee from "react-fast-marquee";

import {
  referenceLogo1,
  referenceLogo2,
  referenceLogo3,
  referenceLogo4,
  referenceLogo5,
  referenceLogo6,
  referenceLogo7,
} from "../assets/images";

const Testimonial = () => {
  const CompanyLogo = [
    referenceLogo1,
    referenceLogo2,
    referenceLogo3,
    referenceLogo4,
    referenceLogo5,
    referenceLogo6,
    referenceLogo7,
  ];

  return (

    <>
      <div className="review-slider">
        <Marquee direction="left" speed={80} delay={0} pauseOnHover={true}>
          {CompanyLogo.map((logo, index) => (
            <div className="review-slide" key={`review-slide-${index}`}>
              <img
                key={`original-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="review-slider2">
        <Marquee direction="right" speed={80} delay={0} pauseOnHover={true}>
          {CompanyLogo.map((logo, index) => (
            <div className="review-slide2" key={`review-slide2-${index}`}>
              <img
                key={`original-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Testimonial;


