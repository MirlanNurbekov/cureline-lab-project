import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home';

import About from './Pages/About';
import ButtonsPage from './Pages/ButtonsPage';
import Contacts from './Pages/Contacts';
import OurHistory from './Pages/OurHistory';
import Specialists from './Pages/Specialists';
import Vacancies from './Pages/Vacancies';
import LicensesCertificates from './Pages/LicensesCertificates';


import PriceList from './Pages/PriceList';
import Services from './Pages/Services';
import PatientInstructions from './Pages/PatientInstructions';
import OrderResearch from './Pages/OrderResearch';
import PopularQuestions from './Pages/PopularQuestions';


import ClientMemo from './Pages/ClientMemo';
import LabServicePrice from './Pages/LabServicePrice';



import OurMission from './Pages/OurMission';
import OurTeam from './Pages/OurTeam';
import Careers from './Pages/Careers';
import OurPartners from './Pages/OurPartners';
import Reviews from './Pages/Reviews';


import Error from './Pages/Error';


function App() {
  return (
    <div className="App">
      <Router>
      <div className="top-section">
         <Navbar/>
    </div>
    <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
    <div className="top-white-section">
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/олаборатории' element={<About/>}/>
        <Route path='/командаdoclab' element={<OurTeam/>} />
        <Route path='/специалистыdoclab' element={<Specialists/>} />
        <Route path='/нашипартнеры' element={<OurPartners/>} />
        <Route path='/отзывы' element={<Reviews/>} />
        <Route path='/вакансии' element={<Vacancies/>} />
        <Route path='/лицензииисертификаты' element={<LicensesCertificates/>} />
        
        <Route path='/стоимостьисследований' element={<PriceList/>} />
        <Route path='/услуги' element={<Services/>} />
        <Route path='/инструкциядляпациента' element={<PatientInstructions/>} />
        <Route path='/заказатьисследование' element={<OrderResearch/>} />
        <Route path='/популярныевопросы' element={<PopularQuestions/>} />
        
        <Route path='/памяткадляклиента' element={<ClientMemo/>} />
        <Route path='/стоимостьлабораторныхуслуг' element={<LabServicePrice/>} />
        

        <Route path='/buttonspage' element={<ButtonsPage/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/ourhistory' element={<OurHistory/>} />
        <Route path='/ourmission' element={<OurMission/>} />
        
        <Route path='/careers' element={<Careers/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <div className="bottom-white-section">
      </div>
      <div class="wave-bottom">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="footer">
      <Footer/>
      </div>
    </Router>
    </div>
  );
}

export default App;