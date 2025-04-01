import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useMemo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGlobe,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import gsap from "gsap";

import { useTranslation } from "react-i18next";

import "../../assets/css/mobile-nav.css";
import { useLanguage } from "../../components/LanguageContext";

import {
  deIcon,
  digitalyLogo,
  enIcon,
  esIcon,
  frIcon,
  hiIcon,
  LEnterpriseImg1,
  LEnterpriseImg2,
  LEnterpriseImg3,
  serviceImg1,
  serviceImg2,
  serviceImg3,
  serviceImg4,
  serviceImg5,
  serviceImg6,
  serviceImg7,
  serviceImg8,
  zhIcon,
} from "../../assets/images";

const SupportHeader = ({ scrollToSection }) => {
  

  // ============================ // L'Enterprise Dropdown work============================ //

  const { t, i18n } = useTranslation();

  const [showLEnterpriseDropdown, setShowLEnterpriseDropdown] = useState(false); // State to control dropdown visibility
  const [LEnterpriseImageSrc, LEnterpriseSetImageSrc] =
    useState(LEnterpriseImg1); // Default image
  const [currentLink, setCurrentLink] = useState("Découvrez-nous"); // Track current active link
  const LEnterpriseImgRef = useRef(null); // Reference to the image element

  const LEnterpriseImageMap = {
    "Découvrez-nous": LEnterpriseImg1,
    "Leadership": LEnterpriseImg2,
    "Développement durable": LEnterpriseImg3,
  };

  // Handle hover event to change the image
  const LEnterprisehandleMouseEnter = (linkName) => {
    if (linkName === currentLink) {
      return;
    }

    setCurrentLink(linkName);

    LEnterpriseImgRef.current.classList.add("fade-out");

    setTimeout(() => {
      LEnterpriseSetImageSrc(LEnterpriseImageMap[linkName]);
      LEnterpriseImgRef.current.classList.remove("fade-out");
    }, 100);
  };

  const handleMouseEnterLink = () => {
    clearTimeout(closeTimeout.current);
    setShowLEnterpriseDropdown(true);

    setShowAllDigitalyDropdown(false);
    setShowServiceDropdown(false);
  };

  const handleMouseLeaveLink = () => {
    closeTimeout.current = setTimeout(
      () => setShowLEnterpriseDropdown(false),
      200
    );
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(closeTimeout.current);
    setShowLEnterpriseDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    closeTimeout.current = setTimeout(
      () => setShowLEnterpriseDropdown(false),
      200
    );
  };

  // ============================ //Service Dropdown work============================ //

  const ServiceImageMap = {
    "Développement Web": serviceImg1,
    "Développement mobile": serviceImg2,
    "Optimisation SEO": serviceImg3,
    "Conception UX / UI": serviceImg4,
    "Logiciel personnalisé": serviceImg5,
    "Développement MVP": serviceImg6,
    "Conseil Web": serviceImg7,
    "Support & Maintenance": serviceImg8,
  };

  const serviceKeys = Object.keys(ServiceImageMap);

  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [serviceImageSrc, serviceSetImageSrc] = useState(serviceImg1);
  const [serviceCurrentLink, setServiceCurrentLink] =
    useState("Développement Web");
  const serviceImgRef = useRef(null);

  const servicehandleMouseEnter = (linkName) => {
    if (linkName === serviceCurrentLink) {
      return;
    }

    setServiceCurrentLink(linkName);

    serviceImgRef.current.classList.add("fade-out");

    setTimeout(() => {
      serviceSetImageSrc(ServiceImageMap[linkName]);
      serviceImgRef.current.classList.remove("fade-out");
    }, 100);
  };

  const handleServiceMouseEnterLink = () => {
    clearTimeout(closeTimeout.current);
    setShowServiceDropdown(true);

    setShowAllDigitalyDropdown(false);
    setShowLEnterpriseDropdown(false);
  };

  const handleServiceMouseLeaveLink = () => {
    closeTimeout.current = setTimeout(() => setShowServiceDropdown(false), 200);
  };

  const handleServiceMouseEnterDropdown = () => {
    clearTimeout(closeTimeout.current);
    setShowServiceDropdown(true);
  };

  const handleServiceMouseLeaveDropdown = () => {
    closeTimeout.current = setTimeout(() => setShowServiceDropdown(false), 200);
  };

  // ============================ //All Digitaly Dropdown work============================ //
  const AllDigitalyLinkArray = {
    Company: ["Discover Us", "Leadership", "Sustainability"],
    Services: ["Development", "Design", "Consulting", "Maintenance"],
    Community: ["Forum", "Events", "Creator Program", "Resources"],
    Careers: ["Opportunities", "Benefits", "Culture"],
    Store: ["New Arrivals", "Special Offers", "Collections", "Gift & Cards"],
    Legal: ["Terms", "Intellectual Property", "More Resources"],
    Other: ["News", "Media", "Support"],
  };

  const [showAllDigitalyDropdown, setShowAllDigitalyDropdown] = useState(false);

  const closeTimeoutAllDigitaly = useRef(null);

  const handleAllDigitalyMouseEnterDropdown = () => {
    clearTimeout(closeTimeoutAllDigitaly.current); // Clear any existing timeout
    setShowAllDigitalyDropdown(true);

    setShowServiceDropdown(false);
    setShowLEnterpriseDropdown(false);
    setLangDropDown(false);
  };

  const handleAllDigitalyMouseLeaveDropdown = () => {
    closeTimeoutAllDigitaly.current = setTimeout(() => {
      setShowAllDigitalyDropdown(false);
    }, 200); // 200ms delay
  };

  // console.log(t("navbar.link1"));

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const [langDropDown, setLangDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const closeTimeout = useRef(null);

  const handleMouseClick = () => {
    setLangDropDown((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      // Only enable hover for non-mobile screens
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
      setLangDropDown(true);
      setShowServiceDropdown(false);
      setShowAllDigitalyDropdown(false);
      setShowLEnterpriseDropdown(false);

      console.log("hovered");
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      // Only enable hover for non-mobile screens
      closeTimeout.current = setTimeout(() => {
        setLangDropDown(false);
      }, 200); // Add a small delay
    }
  };

  const languages = [
    { name: "DE", code: "de", flag: deIcon },
    { name: "ES", code: "es", flag: esIcon },
    { name: "HI", code: "hi", flag: hiIcon },
    { name: "EN", code: "en", flag: enIcon },
    { name: "FR", code: "fr", flag: frIcon },
    { name: "ZH", code: "zh", flag: zhIcon },
  ];

  const { selectedLang, changeLanguage } = useLanguage(); // Use the language context

  const availableLanguages = languages.filter(
    (lang) => lang.code !== selectedLang
  );

  // Get the selected language object
  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);
  console.log(selectedLanguage);

  // ================================Mobile Menu Working================================

  const MOBILE_NAV_ITEMS = [
    {
      id: 0,
      navTitle: t("navbar.link1"),
      path: "#", // Add path for navigation
      hasDropdown: true,
      dropdownItems: [
        { id: 1, title: "Découvrez-nous", path: "/service1" },
        { id: 2, title: "Leadership", path: "/service2" },
        { id: 3, title: "Développement durable", path: "/service3" },
      ],
    },
    {
      id: 1,
      navTitle: t("navbar.link2"),
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { id: 1, title: "Développement Web", path: "#" },
        { id: 2, title: "Développement mobile", path: "#" },
        { id: 3, title: "Optimisation SEO", path: "#" },
        { id: 4, title: "Conception UX / UI", path: "#" },
        { id: 5, title: "Logiciel personnalisé", path: "#" },
        { id: 6, title: "Développement MVP", path: "#" },
        { id: 7, title: "Conseil Web", path: "#" },
        { id: 8, title: "Support & Maintenance", path: "#" },
      ],
    },
    {
      id: 2,
      navTitle: t("navbar.link3"),
      path: "#services",
    },
    {
      id: 3,
      navTitle: t("navbar.link4"),
      path: "#",
    },
    {
      id: 4,
      navTitle: t("navbar.link5"),
      path: "#",
    },
    {
      id: 5,
      navTitle: t("navbar.link6"),
      path: "#",
    },
  ];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [mobileNavOpen]);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const dropdownVariant = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  
  const handleClickOutside = (event) => {
    if (window.innerWidth < 768) {
    if ( dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLangDropDown(false);
      // console.log("mobile");
      
      }
      // console.log("clckk");
      
    }
  };

  // if (window.innerWidth > 768) {
  useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  // }

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (navItemId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [navItemId]: !prev[navItemId],
    }));
  };

  const [openAllDigitalyDropdowns, setOpenAllDigitalyDropdowns] = useState({
    AllDigitaly: false,
    Company: false,
    Services: false,
    Community: false,
    Careers: false,
    Store: false,
    Legal: false,
    Other: false,
  });

  // Add new state to track if we're in All Digitaly view
  const [isAllDigitalyView, setIsAllDigitalyView] = useState(false);

  // Modify the toggle function
  const toggleAllDigitalyDropdown = (category) => {
    if (category === "AllDigitaly") {
      setIsAllDigitalyView(true); // Set view to All Digitaly
    }
    setOpenAllDigitalyDropdowns((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleBackFromAllDigitaly = () => {
    setIsAllDigitalyView(false);
    setOpenAllDigitalyDropdowns((prev) => ({
      ...prev,
      AllDigitaly: false,
    }));
    // Reset all dropdowns
    setOpenDropdowns({});
    setOpenAllDigitalyDropdowns({
      AllDigitaly: false,
      Company: false,
      Services: false,
      Community: false,
      Careers: false,
      Store: false,
      Legal: false,
      Other: false,
    });
  };

  const handleCloseMenu = () => {
    setMobileNavOpen(false);
    // Reset all dropdowns
    setOpenDropdowns({});
    setOpenAllDigitalyDropdowns({
      AllDigitaly: false,
      Company: false,
      Services: false,
      Community: false,
      Careers: false,
      Store: false,
      Legal: false,
      Other: false,
    });
    setIsAllDigitalyView(false);
  };

  return (
    <>
      <div className="main-subheader" style={{ border: "" }}>
        <p>{t("navbar.subheader-para")}</p>
      </div>

      {/* <nav className={`navbar navbar-expand-lg ${isScrolled ? 'fixed-top fade-in' : ''}`} id="header"> */}

      <nav
        className="navbar navbar-expand-lg new-navbar"
        style={{ border: "" }}
      >
        <div className="containe  new-navbar-div">
          <Link className="nav-brand" to="/">
            <img className="digitaly-logo" src={digitalyLogo} alt />
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="hidden md:flex flex-grow-0 items-end justify-end space-x-6"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
             
             
              <li className="nav-item">
                <a
                  className="nav-link text-white mx-md-2"
                  onClick={() => scrollToSection("#footer")}
                  href="#footer"
                >
                  {t("navbar.link4")}
                </a>
                <div className="links-border"></div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white mx-md-2"
                  onClick={() => scrollToSection("#footer")}
                  href="#footer"
                >
                  {t("navbar.link5")}
                </a>
                <div className="links-border"></div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white mx-md-2"
                  onClick={() => scrollToSection("#footer")}
                  href="#footer"
                >
                  {t("navbar.link6")}
                </a>
                <div className="links-border"></div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ border: "" }} className="header-All-Digitaly-btn-div">
          <Link
            className="btn header-All-Digitaly-btn"
            to="#"
            onMouseEnter={handleAllDigitalyMouseEnterDropdown}
            onMouseLeave={handleAllDigitalyMouseLeaveDropdown}
          >
            All Digitaly
          </Link>
        </div>

        <div
          style={{ border: "" }}
          className="language-change-dropdown-column"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="language-change-dropdown">
            {selectedLanguage && (
              <>
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  className="language-change-dropdown-icon"
                />
                <p>{selectedLanguage.name}</p>
              </>
            )}
          </div>

          {langDropDown && (
            <motion.div
              className="language-change-dropdown-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {availableLanguages.map((language) => (
                <p
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={language.flag} alt={language.name} />
                  {language.name}
                </p>
              ))}
            </motion.div>

            // </div>
          )}
        </div>

        <div style={{ border: "" }}>
          <Link className="btn header-login-btn" to="/">
            <FontAwesomeIcon icon={faUser} style={{paddingRight: '5px'}}/>
            Log In
          </Link>
        </div>
      </nav>

      {/* =================================================Links DropDowns works================================================= */}

      {/* Enterprise Dropdown content */}
      {showLEnterpriseDropdown && (
        <div
          className="container"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <motion.div
            className="lenterprise-sub-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* <div className="lenterprise-sub-dropdown"> */}
            <div className="lenterprise-sub-dropdown-row">
              <div>
                <img
                  className="dropdown-image"
                  src={LEnterpriseImageSrc}
                  alt="Image"
                  ref={LEnterpriseImgRef}
                />
              </div>

              <div className="lenterprise-sub-dropdown-column">
                <ul>
                  {Object.keys(LEnterpriseImageMap).map((linkName) => (
                    <li key={linkName}>
                      <a
                        href="#"
                        onMouseEnter={() =>
                          LEnterprisehandleMouseEnter(linkName)
                        }
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      )}

      {/* Service Dropdown content */}
      {showServiceDropdown && (
        <div
          className="container"
          onMouseEnter={handleServiceMouseEnterDropdown}
          onMouseLeave={handleServiceMouseLeaveDropdown}
        >
          <motion.div
            className="lenterprise-sub-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* <div className="lenterprise-sub-dropdown"> */}
            <div className="lenterprise-sub-dropdown-row">
              <div>
                <img
                  className="dropdown-image"
                  src={serviceImageSrc}
                  alt="Image"
                  ref={serviceImgRef}
                />
              </div>

              <div className="lenterprise-sub-dropdown-column">
                <ul>
                  {serviceKeys.slice(0, 5).map((linkName) => (
                    <li key={linkName}>
                      <a
                        href="#"
                        onMouseEnter={() => servicehandleMouseEnter(linkName)}
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lenterprise-sub-dropdown-column2">
                <ul>
                  {serviceKeys.slice(5).map((linkName) => (
                    <li key={linkName}>
                      <a
                        href="#"
                        onMouseEnter={() => servicehandleMouseEnter(linkName)}
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      )}

      {/* All Digitaly Dropdown Content */}
      {showAllDigitalyDropdown && (
        <div
          className="container"
          onMouseEnter={handleAllDigitalyMouseEnterDropdown}
          onMouseLeave={handleAllDigitalyMouseLeaveDropdown}
        >
          <motion.div
            className="lenterprise-sub-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="DigitalyAll-sub-dropdown-column">

            <div className="DigitalyAll-sub-dropdown-digitaly">
              <Link to="/"> DIGITALY </Link>
            </div>

            <div className="DigitalyAll-sub-dropdown-row">
              {Object.entries(AllDigitalyLinkArray).map(
                ([heading, links], index) => (
                  <div
                    key={heading}
                    className={`${
                      index % 2 === 0
                        ? "DigitalyAll-sub-dropdown-column1"
                        : "DigitalyAll-sub-dropdown-column2"
                    }`}
                  >
                    <h4>{heading}</h4>
                    <ul>
                      {links.map((linkName) => (
                        <li key={linkName}>
                          <a href="#">{linkName}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
            <div className="DigitalyAll-sub-dropdown-sitemap">
              <Link to="#"> View Sitemap </Link>
            </div>
            </div>
          </motion.div>
        </div>
      )}














      {/* ================================Mobile Menu Working================================ */}

      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="mobile-nav"
      >
        <div className="logo-container">
          {/* <motion.h1 variants={hideNavItemsVariant}>Design Agency</motion.h1> */}
          <Link className="nav-brand" to="/">
            <motion.img
              className="img-fluid mobile-logo"
              src={digitalyLogo}
              alt
              variants={hideNavItemsVariant}
            />
          </Link>
        </div>

        <motion.div
          style={{ border: "" }}
          className="language-change-dropdown-column"
          ref={dropdownRef}
          onClick={handleMouseClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variants={hideNavItemsVariant}
        >
          <div className="language-change-dropdown">
            {selectedLanguage && (
              <>
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  className="language-change-dropdown-icon"
                />
                <p>{selectedLanguage.name}</p>
              </>
            )}
          </div>

          {langDropDown && (
            <motion.div
              className="language-change-dropdown-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {availableLanguages.map((language) => (
                <p
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={language.flag} alt={language.name} />
                  {language.name}
                </p>
              ))}
            </motion.div>

            // </div>
          )}
        </motion.div>

        <div className="menu-container">
          <motion.button
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="open-menu-icon"
          >
            <FontAwesomeIcon icon={faBars} /> {/* Menu icon */}
          </motion.button>
        </div>

        <motion.div variants={mobileMenuVariant} className="mobile-menu">
          {!isAllDigitalyView ? (
            // Regular close button when not in All Digitaly view
            <motion.button
              variants={fadeInVariant}
              onClick={handleCloseMenu}
              className="close-menu-icon"
            >
              <FontAwesomeIcon icon={faXmark} />
            </motion.button>
          ) : (
            // Back button when in All Digitaly view
            <motion.button
              variants={fadeInVariant}
              onClick={handleBackFromAllDigitaly}
              className="back-menu-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FontAwesomeIcon icon={faChevronLeft} /> Back
            </motion.button>
          )}

          {/* Conditional rendering based on view */}
          {!isAllDigitalyView ? (
            // Regular navigation menu
            <motion.ul variants={ulVariant}>
              {MOBILE_NAV_ITEMS.map((navItem) => (
                <motion.li key={navItem.id}>
                  <Link
                    className="nav-link active text-white fw-semibold mx-md-4"
                    aria-current="page"
                    to={navItem.path}
                    onClick={() => {
                      if (navItem.hasDropdown) {
                        toggleDropdown(navItem.id);
                      }
                    }}
                  >
                    {navItem.navTitle}
                    {navItem.hasDropdown && (
                      <FontAwesomeIcon
                        icon={
                          openDropdowns[navItem.id]
                            ? faChevronUp
                            : faChevronDown
                        }
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                      />
                    )}
                  </Link>
                  {navItem.hasDropdown && (
                    <motion.div
                      initial="closed"
                      animate={openDropdowns[navItem.id] ? "open" : "closed"}
                      variants={dropdownVariant}
                      style={{ overflow: "hidden" }}
                      className="mobile-dropdown-content"
                    >
                      <ul>
                        {navItem.dropdownItems?.map((item) => (
                          <li key={item.id}>
                            <Link to={item.path}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            // All Digitaly content with fade-in animation
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="dropdown-content"
            >
              <ul>
                {Object.keys(AllDigitalyLinkArray).map((category) => (
                  <motion.li key={category}>
                    <div
                      className="nav-link active text-white fw-semibold"
                      onClick={() => toggleAllDigitalyDropdown(category)}
                      style={{ cursor: "pointer" }}
                    >
                      {category}
                      <FontAwesomeIcon
                        icon={
                          openAllDigitalyDropdowns[category]
                            ? faChevronUp
                            : faChevronDown
                        }
                        style={{ marginLeft: "8px" }}
                      />
                    </div>

                    {openAllDigitalyDropdowns[category] && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        variants={dropdownVariant}
                        className="sub-dropdown-content"
                      >
                        <ul>
                          {AllDigitalyLinkArray[category].map(
                            (subItem, index) => (
                              <motion.li key={index}>
                                <Link to="#" className="text-white">
                                  {subItem}
                                </Link>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </motion.div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* All Digitaly Mobile Dropdown */}
          {!isAllDigitalyView && ( // Only show button when not in All Digitaly view
            <div style={{ border: "" }} className="header-All-Digitaly-btn-div">
              <Link
                className="btn header-All-Digitaly-btn"
                to="#"
                onClick={() => toggleAllDigitalyDropdown("AllDigitaly")}
              >
                All Digitaly
              </Link>
            </div>
          )}

          {!isAllDigitalyView && (
            <div className="header-login-btn-div">
              <Link className="btn header-login-btn px-md-5" to="/Contact">
              <FontAwesomeIcon icon={faUser} style={{paddingRight: '5px'}}/>
                Log In
              </Link>
            </div>
          )}

          {/* <motion.div variants={fadeInVariant} className="contact">
              <h5>+852 5650 2233</h5>
              <h5>hi@designagency.com</h5>
            </motion.div> */}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default SupportHeader;
