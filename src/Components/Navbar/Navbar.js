import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'; 

import flag_kyrgyz from "../../assets/Images/Flags/kyrgyz.png";
import flag_russian from "../../assets/Images/Flags/russian.png";
import flag_usa from "../../assets/Images/Flags/usa.png";

const flags = [
  { id: "kyrgyz", img: flag_kyrgyz, alt: "Kyrgyz Flag", language: "ky" },
  { id: "russian", img: flag_russian, alt: "Russian Flag", language: "ru", default: true },
  { id: "usa", img: flag_usa, alt: "USA Flag", language: "en" },
];

const Navbar = () => {
  const [showFlagsDropdown, setShowFlagsDropdown] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(flags.find(flag => flag.default));
  const [dropdownFlags, setDropdownFlags] = useState(flags.filter(flag => !flag.default));
  const [currentLanguage, setCurrentLanguage] = useState(currentFlag.language);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for controlling login popup visibility
  const [username, setUsername] = useState(""); // State to store the username
  const [loggedInUsername, setLoggedInUsername] = useState(""); // State to display after login

  const toggleFlagsDropdown = () => {
    setShowFlagsDropdown(!showFlagsDropdown);
  };

  const selectFlag = (selectedId) => {
    const newCurrent = flags.find(flag => flag.id === selectedId);
    setCurrentFlag(newCurrent);
    setDropdownFlags(flags.filter(flag => flag.id !== selectedId));
    setCurrentLanguage(newCurrent.language);
    setShowFlagsDropdown(false);
  };

  // Mapping link texts based on current language
  const linkTexts = {
    home: { en: "Home", ru: "Главная", ky: "Башкы бет" },
    about: { en: "About Us", ru: "О нас", ky: "Жөнүндө" },
    services: { en: "For patients", ru: "Пациентам", ky: "Бейтап" },
    specialists: { en: "Doctors", ru: "Bрачам", ky: "Дарыгер" },
    contacts: { en: "Contacts", ru: "Контакты", ky: "Байланыш" },
  };

  const getLinkText = (key) => linkTexts[key][currentLanguage];

  const aboutDropdownOptions = ["О лаборатории", "Специалисты DOCLAB", "Команда DOCLAB", "Наши партнеры", "Отзывы", "Вакансии", "Лицензии и сертификаты"];

  const forPatientsDropdownOptions = ["Стоимость исследований", "Услуги", "Инструкция для пациента", "Заказать исследование", "Популярные вопросы"];
 
   const forDoctorsDropdownOptions = ["Памятка для клиента", "Стоимость лабораторных услуг"];

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  // Function to handle login action
  const handleLogin = () => {
    setLoggedInUsername(username); // Update the displayed username
    setShowLoginPopup(false); // Close the popup
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">DOCLAB</Link>

        <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-bgvioletColor transition-all cursor-pointer">
            {getLinkText("home")}
          </Link>
{/* About US drop down */}
                    <div className="about-dropdown" onMouseEnter={() => setShowFlagsDropdown(false)}> 
                      <Link to="/услуги" className="hover:text-bgvioletColor transition-all cursor-pointer"> 
                        {getLinkText("about")}
                      </Link>
                      <div className="about-dropdown-menu">
                        {aboutDropdownOptions.map((option, index) => (
                          <Link key={index} to={`/${option.replace(/\s+/g, '').toLowerCase()}`} className="about-dropdown-item">
                          {option}
                          </Link>
                    ))}
                      </div>
                    </div>
{/* For patients drop down */}
                  <div className="about-dropdown" onMouseEnter={() => setShowFlagsDropdown(false)}> 
                    <Link to="/стоимостьлабораторныхуслуг" className="hover:text-bgvioletColor transition-all cursor-pointer"> 
                      {getLinkText("services")}
                    </Link>
                    <div className="about-dropdown-menu">
                      {forPatientsDropdownOptions.map((option, index) => (
                        <Link key={index} to={`/${option.replace(/\s+/g, '').toLowerCase()}`} className="about-dropdown-item">
                        {option}
                        </Link>
                  ))}
                    </div>
                  </div>
{/* For doctors drop down */}
                  <div className="about-dropdown" onMouseEnter={() => setShowFlagsDropdown(false)}> 
                    <Link to="/стоимостьлабораторныхуслуг" className="hover:text-bgvioletColor transition-all cursor-pointer"> 
                      {getLinkText("specialists")}
                    </Link>
                    <div className="about-dropdown-menu">
                      {forDoctorsDropdownOptions.map((option, index) => (
                        <Link key={index} to={`/${option.replace(/\s+/g, '').toLowerCase()}`} className="about-dropdown-item">
                        {option}
                        </Link>
                  ))}
                    </div>
                  </div>

         {/*UPDATE THIS IS DONE HERE FOR LINK IS HEREw */}

          <Link to="/contacts" className="hover:text-bgvioletColor transition-all cursor-pointer">
              {getLinkText("contacts")}
          </Link>



        <div className="navbar-right">
          <div className="flags-dropdown" onClick={toggleFlagsDropdown}>
            <img src={currentFlag.img} alt="Selected Flag" className="flag" />
            {showFlagsDropdown && (
              <div className="flags-dropdown-content">
                {dropdownFlags.map((flag) => (
                  <img key={flag.id} src={flag.img} alt={flag.alt} className="flag" onClick={() => selectFlag(flag.id)} />
                ))}
              </div>
            )}
          </div>
          <div className="navbar-divider"></div>
          <button className="navbar-button">Search</button>
          <button className="navbar-button" onClick={toggleLoginPopup}>
            {loggedInUsername || "SignIn"}
          </button>
        </div>
        {showLoginPopup && (
          <div className="login-popup">
            <div className="login-popup-content">
              <span className="close-popup" onClick={toggleLoginPopup}>&times;</span>
              <h2>Login</h2>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" />
              <div className="popup-actions">
                <span className="cancel-action" onClick={toggleLoginPopup}>Cancel</span>
                <button onClick={handleLogin}>Login</button>
              </div>
              <div className="register-action">
                <span className="register-btn" onClick={toggleLoginPopup}>Register</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile menu and other content omitted for brevity */}
    </div>
  );
};

export default Navbar;