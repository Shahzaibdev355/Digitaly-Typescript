import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Header from "./Header";

import { faArrowUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";


import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import { Button } from "@/components/ui/button"; // ShadCN Button
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Label } from "@/components/ui/label"; // ShadCN Label
import { Checkbox } from "@/components/ui/checkbox"; // ShadCN Checkbox
import { Textarea } from "@/components/ui/textarea"; // ShadCN Textarea


import Swal from "sweetalert2";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const initialFormValues = {
    fname: "",
    Lname: "",
    phone: "",
    email: "",
    fonction: "",
    enterprise: "",
    object: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phone: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // API calls
    // const isSuccess = true; // Change this to `false` to test error popup

    try {
      const response = axios.post(
        "http://localhost:5000/contactus",
        formValues
      );

      if (response === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your form has been submitted successfully.",
          confirmButtonText: "OK",
          willClose: () => {
            window.dispatchEvent(new Event("resize")); // Forces ResizeObserver to complete
          },
        });
      }

      console.log("Form submitted:", formValues);

      setFormValues(initialFormValues);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        confirmButtonText: "OK",
      });

      console.error("Error submitting form:", error);
    }
  };

  // const resizeObserverErrorHandler = (e) => {
  //   if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
  //     return;
  //   }
  //   console.error(e);
  // };

  // window.addEventListener("error", resizeObserverErrorHandler);
  // window.addEventListener("unhandledrejection", resizeObserverErrorHandler);

  // if (window.ResizeObserver) {
  //   const ro = new ResizeObserver(() => {});
  //   ro.observe(document.body);
  //   ro.disconnect();
  // }

  return (
    <>
      <Header />

      <section className="contact-sec1" style={{ backgroundColor: "" }}>
        <div className="contact-container" id="tailwind-container">
          <div className="flex flex-wrap items-center  contact-row mt-lg-0 pt-5 pt-lg-0">
            <div className="w-full md:w-1/2 lg:text-left contact-form-col1">
              <h2 className="contact-col1-heading">
                {t("contactPage.heading")}
              </h2>

              <strong className="contact-col1-heading2">
                {t("contactPage.strong")}
              </strong>
              <p className="contact-col1-para">
                {t("contactPage.para1Line1")}

                <span>
                  <br />
                </span>
                {t("contactPage.para1Line2")}
                <span>
                  <br />
                </span>
                {t("contactPage.para1Line3")}
                <span>
                  <br />
                  <br />
                </span>
                {t("contactPage.para1Line4")}
                <span>
                  <br />
                </span>
                {t("contactPage.para1Line5")}
              </p>

              <strong className="contact-col1-heading2">
                {t("contactPage.strong2")}
              </strong>

              <p className="contact-col1-para">
                {t("contactPage.para2Line1")}
                <span>
                  <br />
                </span>

                {t("contactPage.para2Line2")}
                <span>
                  <br />
                </span>
              </p>

              <strong className="contact-col1-heading2">
                Quels services propose DIGITALY ?
              </strong>

              <p className="contact-col1-para">
                De la création de sites web innovants à la stratégie digitale,
                en passant par le webdesign
                <span>
                  <br />
                </span>
                et le développement 3D, nos services sont conçus pour propulser
                votre entreprise
                <span>
                  <br />
                </span>
                au niveau supérieur.
                <span>
                  <br />
                </span>
              </p>

              <strong className="contact-col1-heading2">
                Envie d’en savoir plus ?
              </strong>

              <p className="contact-col1-para">
                Prenez rendez-vous dès aujourd'hui pour une consultation
                gratuite avec l’un de nos
                <span>
                  <br />
                </span>
                experts.
                <span> Appelez-nous au 09 74 56 69 69</span> ou remplissez
                simplement le formulaire à
                <span>
                  <br />
                </span>
                droite c'est rapide et facile !
                <span>
                  <br />
                </span>
              </p>

              <p className="contact-col1-para">
                Nos experts sont impatients de vous rencontrer et de transformer
                vos idées en succès.
                <span>
                  <br />
                </span>
                Ensemble, faisons de votre vision digitale une réalité !
              </p>
              {/* </p> */}
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center contact-form-col2">
              <form onSubmit={handleSubmit} className="w-[96%]">
                <div className="contact-us-row-formField">
                  <div className="col-12 col-md-6 contact-us-input-left">
                    <Label htmlFor="fname" className="contact-form-input-label">
                      Prénom<span>*</span>
                    </Label>
                    <Input
                      id="fname"
                      placeholder="Example: André"
                      type="text"
                      name="fname"
                      value={formValues.fname}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="col-12 col-md-6 contact-us-input-right">
                    <Label htmlFor="Lname" className="contact-form-input-label">
                      Nom<span>*</span>
                    </Label>
                    <Input
                      id="Lname"
                      placeholder="Example: Dupont"
                      type="text"
                      name="Lname"
                      value={formValues.Lname}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-us-row-formField">
                  <div
                    
                    className="col-md-6 contact-phoneNumberInput-div contact-us-input-left"
                  >
                    <Label htmlFor="" className="contact-form-input-label">
                      Téléphone<span>*</span>
                    </Label>

                    

                    

<PhoneInput
        defaultCountry="fr"
        onChange={handlePhoneChange}
        value={formValues.phone}
      />
                  </div>

                  <div className="col-12 col-md-6 contact-us-input-right">
                    <Label htmlFor="email" className="contact-form-input-label">
                      Email<span>*</span>
                    </Label>
                    <Input
                      id="email"
                      placeholder="Exemple : contact@digitaly.fr"
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-us-row-formField">
                  <div className="col-12 col-md-6 contact-us-input-left">
                    <Label
                      htmlFor="fonction"
                      className="contact-form-input-label"
                    >
                      Fonction<span>*</span>
                    </Label>
                    <Input
                      id="fonction"
                      placeholder="Exemple : Chargé de communication"
                      type="text"
                      name="fonction"
                      value={formValues.fonction}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>

                  <div className="col-12 col-md-6 contact-us-input-right">
                    <Label
                      htmlFor="enterprise"
                      className="contact-form-input-label"
                    >
                      Enterprise<span>*</span>
                    </Label>
                    <Input
                      id="enterprise"
                      placeholder="Exemple : Le nom de votre entreprise"
                      type="text"
                      name="enterprise"
                      value={formValues.enterprise}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="col-md-12   contact-us-input-objet">
                  <Label htmlFor="object" className="contact-form-input-label">
                    Objet<span>*</span>
                  </Label>
                  <Input
                    id="object"
                    placeholder="Choississez votre type de demande"
                    type="text"
                    name="object"
                    value={formValues.object}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="col-md-12 contact-us-message">
                  <Label htmlFor="message" className="contact-form-input-label">
                    Message<span>*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your Query"
                    rows={4}
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="col-md-12 contact-us-checkbox ">
                  {/* <Checkbox {...label} style={{ paddingLeft: "0px" }} /> */}

                  <Checkbox style={{ paddingLeft: "0px" }} />

                  <p>
                    En envoyant ce formulaire, je donne mon accord pour être
                    recontacté par la société{" "}
                    <span>
                      <br />
                    </span>{" "}
                    DIGITALY et j'accepte la politique de confidentialité de
                    l'entreprise.
                  </p>
                </div>

                <div className="col-md-12 contact-us-submitBtn">
                  {/* <button type="submit">Envoyer le message</button> */}
                  <Button type="submit">Envoyer le message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="rectangular-oval-white-sec1" style={{ border: "" }}>
        <img
          className="lagence-sec1-img1-2"
          src="./images/Rectangle 9543-new.png"
          alt
          style={{ border: "" }}
        />
      </section>
      {/* </section> */}

      <Footer />

      {/* Back to Top */}
      {/* <a
        href="#"
        className={`btn btn-lg btn-lg-square rounded-circle back-to-top ${
          isVisible ? "show" : "hide"
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
      </a> */}
    </>
  );
};

export default Contact;
