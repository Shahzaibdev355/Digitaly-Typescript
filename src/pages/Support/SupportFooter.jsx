import { faDiscord, faInstagram, faLinkedinIn, faTiktok, faTwitter, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SupportFooter = () => {

    const { t, i18n } = useTranslation();
    

    return (
        <>

            <section className="sec-5" id="footer" >
                <div className="containe  footer-contact-div">
                    <div className="support-assistance-bg">

                        <div className="flex flex-col md:flex-row py-3 gap-4">

                            
                            <div className="flex-1 space-y-4  support-assistance-column">
                               
                               <p className="support-assistance-column-para1">ASSISTANCE PRIORITAIRE</p>
                               <p className="support-assistance-column-para2">Saisissez votre code client pour déclencher la procédure d’assistance prioritaire</p>
                               <Input className="support-enable-input" />

                                <div className="flex items-center gap-2 support-enableBtn-row">
                                   
                                        <Button type="submit" className="support-EnableBtn">Activer</Button>
                                    

                                    <p>
                                    Vous pouvez également contacter la ligne dédier, un de nos opérateurs prendra en charge votre demande d’assistance.
                                    </p>
                                </div>


                            </div>



                            <div className="flex-1 flex flex-col justify-end md:justify-end items-end support-assistance-column2">
                                <Link to="/contact" className="support-Enable-div-Btns mb-3">Les Services d’Assistances</Link>
                                <Link to="/contact" className="support-Enable-div-Btns mb-3">Je ne trouve pas mon code Client</Link>
                                <Link to="/contact" className="support-Enable-div-Btns mb-3">Parcourir mon historique d’assistance</Link>
                                <Link to="/contact" className="support-Enable-div-Btns">En Savoir plus</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className="sec-6" id="footer">
                <div className="footer-container">
                    <div className="footer-links-row">
                       
                    <div className="footer-sec-icons footer-sec-icons-mobile">
                                <Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faXTwitter} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faYoutube} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faDiscord} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to="#"><FontAwesomeIcon icon={faTiktok} /></Link>
                            </div>

                        <div className="col-12 col-md-2 text-center text-md-start footer-links">
                            <h4 className="text-white mt-4 mt-md-0"> {t("footer.subHeading1")}</h4>
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

export default SupportFooter;



