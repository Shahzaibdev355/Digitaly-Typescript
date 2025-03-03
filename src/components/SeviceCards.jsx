import { useTranslation } from "react-i18next";

import {useState, useEffect, useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServiceCards = () => {
  const { t, i18n } = useTranslation();

  const [isCarousel, setIsCarousel] = useState(false);

  const [isMobileView, setIsMobileView] = useState(false);


  useEffect(() => {
    const handleResize = () => {
    //   setIsCarousel(window.innerWidth < 1280);
    const width = window.innerWidth;

    setIsCarousel(width < 1280 && width >= 768); // Carousel for tablet-sized screens
    setIsMobileView(width < 768); // Mobile view for smaller screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      image: "./images/-_Dev App 1.png",
      para1: t("services-section.service-card1.para1"),
      para2: t("services-section.service-card1.para2"),
    },
    {
      image: "./images/-_Dev web  full stack 1.png",
      para1: t("services-section.service-card2.para1"),
      para2: t("services-section.service-card2.para2"),
    },
    {
      image: "./images/-_Web design 1.png",
      para1: t("services-section.service-card3.para1"),
      para2: t("services-section.service-card3.para2"),
    },
    {
      image: "./images/-_Graphic design 2.png",
      para1: t("services-section.service-card4.para1"),
      para2: t("services-section.service-card4.para2"),
    },
    {
      image: "./images/-_Audiovisual creation 1.png",
      para1: t("services-section.service-card5.para1"),
      para2: t("services-section.service-card5.para2"),
    },
    {
      image: "./images/-_Community management 1.png",
      para1: t("services-section.service-card6.para1"),
      para2: t("services-section.service-card6.para2"),
    },
    {
      image: "./images/-_Community management 1.png",
      para1: t("services-section.service-card7.para1"),
      para2: t("services-section.service-card7.para2"),
    },
    {
      image: "./images/-_Community management 1.png",
      para1: t("services-section.service-card8.para1"),
      para2: t("services-section.service-card8.para2"),
    },
  ];




  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2; // Half of the total width (due to duplication)
    const scrollSpeed = 1; // Adjust speed for smoother or faster scrolling

    const scroll = () => {
      if (slider.scrollLeft >= totalWidth) {
        // Reset to start without visual jump
        slider.scrollLeft = 0;
      }
      slider.scrollLeft += scrollSpeed;
      requestAnimationFrame(scroll);
    };

    const scrollAnimation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(scrollAnimation); // Cleanup on unmount
  }, []);





  return (
   

    <div className="row">

      {
        isMobileView ? (
            // Render mobile grid layout
            <div className="row  service-mobile-cards-row">
              {services.map((service, index) => (
                <div className="col-12 col-sm-6 col-md-3" key={index}>
                  <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                    <div className="row">
                      <div className="col-12">
                        <img
                          className="service-card-img"
                          src={service.image}
                          alt={`Service ${index + 1}`}
                        />
                      </div>
                      <div className="col-12">
                        <div className="mx-4">
                          <p className="fw-bold" style={{ color: "#1F324E" }}>
                            {t(`services-section.service-card${index + 1}.para1`)}
                            <br />
                            {t(`services-section.service-card${index + 1}.para2`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ):
      
      
      isCarousel ? (


        Array.from({ length: Math.ceil(services.length / 4) }).map(
          (_, carouselIndex) => {
            const group = services.slice(
              carouselIndex * 4,
              carouselIndex * 4 + 4
            );
            return (
              <Carousel
                key={carouselIndex}
                
                className="w-full my-4"
                id={`tailwind-container`}
                style={{border: ''}}
               
              >
                <CarouselContent  
                // ref={sliderRef} 
                className="service-tester">
                  {group.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 service-slider"
                      style={{border: ''}}
                    >
                      <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                        <div className="row">
                          <div className="col-12">
                            <img
                              className="service-card-img"
                              src={service.image}
                              alt={`Service ${index + 1}`}
                            />
                          </div>
                          <div className="col-12">
                            <div className="mx-4">
                              <p
                                className="fw-bold"
                                style={{ color: "#1F324E" }}
                              >
                                {service.para1}
                                <br />
                                {service.para2}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            );
          }
        )


      ) : (
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
                    src="./images/-_Dev App 1.png"
                    alt
                  />
                </div>
                <div className="col-12">
                  <div className="mx-4">
                    <p className="fw-bold" style={{ color: "#1F324E" }}>
                      {t("services-section.service-card1.para1")}
                      <br />
                      {t("services-section.service-card1.para2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
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
          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
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

          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
                    src="./images/-_Web design 1.png"
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

          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
                    src="./images/-_Graphic design 2.png"
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
          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
                    src="./images/-_Audiovisual creation 1.png"
                    alt
                  />
                </div>
                <div className="col-12">
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
          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
                    src="./images/-_Community management 1.png"
                    alt
                  />
                </div>
                <div className="col-12" id="project">
                  <div className="mx-4">
                    <p className="fw-bold" style={{ color: "#1F324E" }}>
                      {t("services-section.service-card7.para1")}
                      <br />
                      {t("services-section.service-card7.para2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
              <div className="row">
                <div className="col-12">
                  <img
                    className="service-card-img"
                    src="./images/-_Community management 1.png"
                    alt
                  />
                </div>
                <div className="col-12" id="project">
                  <div className="mx-4">
                    <p className="fw-bold" style={{ color: "#1F324E" }}>
                      {t("services-section.service-card8.para1")}
                      <br />
                      {t("services-section.service-card8.para2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCards;
