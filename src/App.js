import logo from './logo.svg';
import './App.css';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import MainAdmin from './Components/Admin/MainAdmin';
import LoginMechanic from './Components/Mechanic/LoginMechanic';
import SignupMechanic from './Components/Mechanic/SignupMech';
import Pageheading from './Components/Admin/Pageheading';
import LoginUser from './Components/User/LoginUser';
import LoginWorkshop from './Components/Workshop/LoginWorkshop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTable from './Components/Admin/AdminTable';
import SignupUser from './Components/User/SignupUser';
import SignupWorkshop from './Components/Workshop/signupWorkshop'
import ForgotpassUser from './Components/User/ForgotpassUser';
import AdminDashboard from './Components/Admin/AdminDashboard';

import Workshopsidebar from './Components/Workshop/Adminsidebar';
import Workshopmain from './Components/Workshop/Workshopmain';
import ForgotpassWorkshop from './Components/Workshop/ForgotpassWorkshop';
import ForgotpassMechanic from './Components/Mechanic/ForgotpassMechanic';

import Adminnav from './Components/Admin/Adminnav';
import AboutUs from './Components/Common/AboutUs';
import Workshopreuest from './Components/Admin/Workshopreuest';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Navbar/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/table-format' element={[<Navbar/>,<AdminTable/>,<Footer/>]}/>
      <Route path='/page-heading' element={[<Navbar/>,<Pageheading/>,<Footer/>]}/>
      <Route path='/Aboutus' element={[<Navbar/>,<AboutUs/>,<Footer/>]}/>

      {/* user */}
      <Route path='/user-login' element={[<Navbar/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/user-signup' element={[<Navbar/>,<SignupUser/>,<Footer/>]}/>

      {/* Mechanic */}
      <Route path='/mechanic-login' element={[<Navbar/>,<LoginMechanic/>,<Footer/>]}/>
      <Route path='/mechanic-signup' element={[<Navbar/>,<SignupMechanic/>,<Footer/>]}/>

      {/* Workshop */}
      <Route path='/workshop-login' element={[<Navbar/>,<LoginWorkshop/>,<Footer/>]}/> 
      <Route path='/workshop-signup' element={[<Navbar/>,<SignupWorkshop/>,<Footer/>]}/>
      <Route path='/forgotpass-user' element={[<Navbar/>,<ForgotpassUser/>,<Footer/>]}/>
      <Route path='/forgotpass-workshop' element={[<Navbar/>,<ForgotpassWorkshop/>,<Footer/>]}/>
      <Route path='/forgotpass-mechanic' element={[<Navbar/>,<ForgotpassMechanic/>,<Footer/>]}/>
      <Route path='/workshop-sidebar' element={[<Navbar/>,<Workshopsidebar/>,<Footer/>]}/>
      <Route path='/workshop-dashboard' element={[<Navbar/>,<Workshopmain data="workshopdashboard"/>,<Footer/>]}/>

      {/* Admin */}
      <Route path='/admin-dashboard' element={[<Adminnav/>,<AdminDashboard/>,<Footer/>]}/>
      <Route path='/req' element={<Workshopreuest/>}/>


     </Routes>
     </BrowserRouter>
   

  );
}

export default App;
