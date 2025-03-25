import React, { useEffect, useMemo, useState, useTransition } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import Slider from "react-infinite-logo-slider";

import {
  referenceLogo1,
  referenceLogo2,
  referenceLogo3,
  referenceLogo4,
  referenceLogo5,
  referenceLogo6,
  referenceLogo7,
} from "../assets/images";

const Testing = () => {
  const { t } = useTranslation();

  const reviews = [
    // in strong tag the text is bold

    {
      // text: "Nous avons conçu notre site web avec <strong>DIGITALY</strong>. C'est désormais notre prestataire en développement pour toutes les évolutions du sites.",
      text: t("testimonial-section.review-card1.text"),
      name: "Mrs. Van Hartmann",
      position: "PDG de Harmonia",
      image: "/images/client-review.png",
      rating: 5, // Add the rating here
    },
    {
      text: t("testimonial-section.review-card1.text"),
      name: "Mrs. Van Hartmann",
      position: "PDG de Harmonia",
      image: "/images/client-review.png",
      rating: 5,
    },
    {
      text: t("testimonial-section.review-card1.text"),
      name: "Mrs. Van Hartmann",
      position: "PDG de Harmonia",
      image: "/images/client-review.png",
      rating: 5,
    },
    {
      text: t("testimonial-section.review-card1.text"),
      name: "Mrs. Van Hartmann",
      position: "PDG de Harmonia",
      image: "/images/client-review.png",
      rating: 5,
    },
    // Add more reviews here
  ];

  const CompanyLogo = [
    referenceLogo1,
    referenceLogo2,
    referenceLogo3,
    referenceLogo4,
    referenceLogo5,
    referenceLogo6,
    referenceLogo7,
  ];

  //   useEffect(() => {
  //     const slideTrack = document.querySelector(".review-slide-track");
  //     const slides = document.querySelectorAll(".review-slide");

  //     slides.forEach((slide) => {
  //       const clone = slide.cloneNode(true);
  //       slideTrack.appendChild(clone);
  //     });
  //   }, []);

    const duplicatedLogos = [...CompanyLogo, ...CompanyLogo, ...CompanyLogo];

  //   console.log('duplicatedLogos recalculated:', duplicatedLogos.length);

  //   const duplicatedLogos2 = [...CompanyLogo, ...CompanyLogo];



//   const duplicatedLogos = useMemo(
//     () => [...CompanyLogo, ...CompanyLogo, ...CompanyLogo],
//     [CompanyLogo]
//   );



  const MobileReferenceLogos = useMemo(
    () => [...CompanyLogo, ...CompanyLogo],
    [CompanyLogo]
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return !isMobile ? (
    <>
      <div className="review-slider">
        <div className="review-slide-track">
          {duplicatedLogos.map((logo, index) => (
            <div className="review-slide" key={`review-slide-${index}`}>
              <img
                key={`original-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="review-slider2">
        <div className="review-slide-track2">
          {duplicatedLogos.map((logo, index) => (
            <div className="review-slide2" key={`review-slide-${index}`}>
              <img
                key={`original-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <OwlCarousel
                className="owl-theme"
                loop
                center
                items={3}
                margin={30}
                autoplay
                dots
                nav
                autoplayTimeout={8500}
                smartSpeed={450}
                navText={[
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]}
                responsive={{
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1170: {
                        items: 3
                    }
                }}
            >
                {reviews.map((review, index) => (
                    <div className="item review-card1-col" key={index}>
                        <div className="shadow-effect gradient-box-cus px-4 py-2 mx-2 my-3">
                            <div className="review-card1">
                                <div className='review-card1-ratingrow'>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FontAwesomeIcon icon={faStar} key={i} />
                                    ))}
                                </div>
                               
                                <p className='review-card1-para' dangerouslySetInnerHTML={{ __html: review.text }} />
                                <div className='review-card1-clientDetails'>
                                    <img src={review.image} alt={review.name} />
                                    <div className='review-card1-clientDetails-col'>
                                        <h4>{review.name}</h4>
                                        <p>{review.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel> */}
    </>
  ) : (
    <>
      <div className="review-slider" >
        <div className="review-slide-track">
          {MobileReferenceLogos.map((logo, index) => (
            <div className="review-slide" key={`review-slide-${index}`}>
              <img
                key={`original-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="review-slider2">
        <div className="review-slide-track2">
          {MobileReferenceLogos.map((logo, index) => (
            <div className="review-slide2" key={`review-slide-${index}`}>
              <img
                key={`original-${index}`}
                src={logo}
                alt={`Logo ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testing;
