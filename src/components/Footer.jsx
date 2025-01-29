import { faDiscord, faInstagram, faLinkedinIn, faTiktok, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {

    const { t, i18n } = useTranslation();
    

    return (
        <>

            <section className="sec-5" id="footer" >
                <div className="containe  footer-contact-div">
                    <div className="gradient-cus-box-sty p-5 my-5 mt-0">
                        <div className="row py-3">
                            <div className="col-12 col-md-9">
                                <h1 className="fw-bold text-center text-lg-start" style={{ color: '#1F324E' }}>{t("footer.heading")}</h1>
                                <p className="text-center text-md-start footer-contact-div-para">
                                {t("footer.para1")}
                                <span><br /></span> 
                                {t("footer.para2")}</p>
                            </div>
                            <div className="col-12 col-md-3 text-center text-lg-start m-auto">
                                <button className="py-2 py-lg-4 px-5 mt-2 text-white btn fs-5 rounded-3 footer-contact-div-contactBtn">{t("footer.btn")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sec-6" id="footer">
                <div className="footer-container">
                    <div className="footer-links-row">
                        {/* <div className="col-12 col-md-3 text-center text-md-start">
                            <img className="img-fluid text-center" src="./images/Group 1.png" alt />
                            <p className="text-white fw-lighter" style={{ fontSize: 14 }}> {t("footer.para3")}</p>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/Facebook.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/Twitter.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/Instagram.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/LinkedIn.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/YouTube.png" alt /></a>
                        </div> */}
                        <div className="col-12 col-md-2 text-center text-md-start footer-links">
                            <h4 className="text-white mt-5 mt-md-0"> {t("footer.subHeading1")}</h4>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link1")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link2")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link3")}</a>

                        </div>
                        <div className="col- text-center text-md-start footer-links footer-links-2">
                            <h4 className="text-white mt-5 mt-md-0">{t("footer.subHeading2")}</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="#">{t("footer.link6")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link7")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link8")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link9")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link10")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link11")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link12")}</a>
                           
                        </div>
                        <div className=" text-center text-md-start footer-links footer-links-3">
                            <h4 className="text-white mt-5 mt-md-0">{t("footer.subHeading3")}</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="#">{t("footer.link13")}</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">{t("footer.link14")}</a>
                        </div>


                        <div className=" text-center text-md-start footer-links footer-links-4">
                            <h4 className="text-white mt-5 mt-md-0"> STORE</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="mailto:contact@digitaly.fr">Suivi de Commande</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="tel:0426707067">Livraison & Retour</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="tel:0426707067">FAQ - Service Client</a>

                           

                        </div>

                        <div className=" text-center text-md-start footer-links footer-links-5">
                            <h4 className="text-white mt-5 mt-md-0">MEDIA</h4>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Newsroom</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Espace Presse</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Blog</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Media Library</a>

                            
                        </div>


                        <div className="text-center text-md-start footer-links footer-links-6">
                            <h4 className="text-white mt-5 mt-md-0">SUPPORT</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="#">Gestion Compte</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">FAQ - Support</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Live Chat</a>
                        </div>

                        

                        </div>




                        <footer className="mt-5  text-md-start footer-sec">

                            <div className="footer-sec-icons">
                                <Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faXTwitter} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faDiscord} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faTiktok} /></Link>
                                {/* <p className="mt-1 footer-copyright-para" style={{ color: 'rgba(255, 255, 255, 0.781)' }}>© 2024 DIGITALY - Agence digitale &amp; marketing</p> */}
                            </div>

                            <div className="footer-link-div footer-links">
                          
                                <a className="text-decoration-none mt-2 mx-2 mx-md-" href="#">Confidentialité et cookies</a>
                                <a className="text-decoration-none mt-2 mx-2 mx-md-" href="#">Gérer les cookies</a>
                                <a className="text-decoration-none mt-2 mx-2 mx-md-" href="#">Marque</a>
                                <a className="text-decoration-none mt-2 mx-2 mx-md-" href="#">Accessibilité</a>
                                <a className="text-decoration-none mt-2 mx-2 mx-md-" href="#">Plan du site</a>

                                <a className="text-decoration-none mt-2 mx-2 mx-md-" href="#">© DIGITALY</a>
                              

                            </div>



                        </footer>
                    {/* </div> */}
                </div>
            </section>

        </>
    );
}

export default Footer;



