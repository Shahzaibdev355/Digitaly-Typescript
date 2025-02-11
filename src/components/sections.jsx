<section
className="sec-1"
>

<div className="section1-container" style={{ border: "" }} id="tailwind-container">
  <div className="flex flex-wrap items-center row mt-5 mt-lg-0 pt-5 pt-lg-0">
    <div
      className="w-full lg:w-1/2 text-center  text-lg-start"
      style={{ border: "" }}
    >
      <h1 className="display-5 text-white fw-bold">

        {t("section1.title1")}

      
        <span
          className="gradient-text-sec-1"
          ref={textRef}
          
        >
          {t("section1.title2")}
        </span>
      </h1>
      <p className="text-white fs-5 fw-light">
        {t("section1.description")}
      </p>
    </div>






    <div
      className="w-full lg:w-1/2  text-center text-lg-end"
      style={{ border: "" }}
    >
      {/* =================3d model will be place here================= */}

      <ThreedModel/>


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
        
        style={{ border: "3px solid green", height: '200vh' }}
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