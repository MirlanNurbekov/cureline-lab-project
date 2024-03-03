import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './Navbar.css'; 
import flag_kyrgyz from "../../Assets/Images/Flags/kyrgyz.png";
import flag_russian from "../../Assets/Images/Flags/russian.png";
import flag_usa from "../../Assets/Images/Flags/usa.png";

// Flag data with language codes
const flags = [
  { id: "kyrgyz", img: flag_kyrgyz, alt: "Kyrgyz Flag", language: "ky" },
  { id: "russian", img: flag_russian, alt: "Russian Flag", language: "ru", default: true },
  { id: "usa", img: flag_usa, alt: "USA Flag", language: "en" },
];


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showFlagsDropdown, setShowFlagsDropdown] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(flags.find(flag => flag.default));
  const [dropdownFlags, setDropdownFlags] = useState(flags.filter(flag => !flag.default));
  const [currentLanguage, setCurrentLanguage] = useState(currentFlag.language);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

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
    home: { en: "Home", ru: "Главная" , ky: "Башкы бет"},
    about: { en: "About Us", ru: "О нас", ky: "Жөнүндө"},
    services: { en: "For patients", ru: "Пациентам", ky: "Бейтап" },
    specialists: { en: "Doctors", ru: "Bрачам", ky: "Дарыгер"  },
    contacts: { en: "Contacts", ru: "Контакты", ky: "Байланыш"  },
  };

  const getLinkText = (key) => linkTexts[key][currentLanguage];

  // Dropdown options for "About Us"
  const aboutDropdownOptions = ["О лаборатории", "Специалисты DOCLAB", "Команда DOCLAB", "Наши партнеры", "Отзывы", "Вакансии", "Лицензии и сертификаты"];
 // Dropdown options for "For patients"
  const forPatientsDropdownOptions = ["Стоимость исследований", "Услуги", "Инструкция для пациента", "Заказать исследование", "Популярные вопросы"];
   // Dropdown options for "For patients"
   const forDoctorsDropdownOptions = ["Памятка для клиента", "Стоимость лабораторных услуг"];

  return (
<div className="navbar">
  <div className="navbar-content">
    <Link to="/" className="navbar-logo">DOCLAB</Link>
          <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-bgvioletColor transition-all cursor-pointer">
            {getLinkText("home")}
          </Link>
{/* About US drop down */}
                    <div className="about-dropdown" onMouseEnter={() => setShowFlagsDropdown(false)}> 
                      <Link to="/олаборатории" className="hover:text-bgvioletColor transition-all cursor-pointer"> 
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
                    <Link to="/олаборатории" className="hover:text-bgvioletColor transition-all cursor-pointer"> 
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
                    <Link to="/олаборатории" className="hover:text-bgvioletColor transition-all cursor-pointer"> 
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
              <button className="navbar-button">SignIn</button>
          </div>
      </div>
      {/* Mobile menu and other content */}
    </div>
  );
};

export default Navbar;