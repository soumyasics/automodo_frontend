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
import Workshopreuest from './Components/Admin/Workshoprequest';
import WorkshopRequestApproval from './Components/Admin/WorkshopRequestApproval';
import Loginnav from './Components/Common/Loginnav'
import Userhomenav from './Components/Common/Userhomenav';
import Viewservices from './Components/User/Viewservices';
import Adminlogin from './Components/Admin/Adminlogin';

import SparepartsList from './Components/User/SparepartsList';
import SpareIndividualpage from './Components/User/SpareIndividualpage';

import Bookservice from './Components/User/Bookservice';
import SparepartsWorkshop from './Components/Workshop/SparepartsWorkshop';
import UserProfileMain from './Components/User/UserProfileMain';


const url = "http://localhost:4010";


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={[<Navbar/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/table-format' element={[<Navbar/>,<AdminTable/>,<Footer/>]}/>
      <Route path='/page-heading' element={[<Navbar/>,<Pageheading/>,<Footer/>]}/>
      <Route path='/Aboutus' element={[<AboutUs/>,<Footer/>]}/>

      {/* user */}
      <Route path='/user-login' element={[<Loginnav/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/user-signup' element={[<Navbar/>,<SignupUser/>,<Footer/>]}/>
      <Route path='/userhome' element={[<Userhomenav/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/viewservices' element={[<Userhomenav/>,<Viewservices/>,<Footer/>]}/>

      <Route path='/Sparepartslist' element={[<Userhomenav/>,<SparepartsList/>,<Footer/>]}/>
      <Route path='/SparepartsInd/:id' element={[<Userhomenav/>,<SpareIndividualpage/>,<Footer/>]}/>

      <Route path='/bookservices/:id' element={[<Userhomenav/>,<Bookservice url={url}/>,<Footer/>]}/>
      <Route path='/user-profile' element={[<Userhomenav/>,<UserProfileMain  data="viewprof"/>,<Footer/>]}/>



      {/* Mechanic */}
      <Route path='/mechanic-login' element={[<Loginnav/>,<LoginMechanic/>,<Footer/>]}/>
    

      {/* Workshop */}
      <Route path='/workshop-login' element={[<Loginnav/>,<LoginWorkshop/>,<Footer/>]}/> 
      <Route path='/workshop-signup' element={[<Adminnav/>,<SignupWorkshop/>,<Footer/>]}/>
      <Route path='/forgotpass-user' element={[<Adminnav/>,<ForgotpassUser/>,<Footer/>]}/>
      <Route path='/forgotpass-workshop' element={[<Adminnav/>,<ForgotpassWorkshop/>,<Footer/>]}/>
      <Route path='/forgotpass-mechanic' element={[<Adminnav/>,<ForgotpassMechanic/>,<Footer/>]}/>
      <Route path='/workshop-sidebar' element={[<Adminnav/>,<Workshopsidebar/>,<Footer/>]}/>
      <Route path='/workshop-dashboard' element={[<Adminnav/>,<Workshopmain data="workshopdashboard"/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-addMechanic' element={[<Adminnav/>,<Workshopmain data="addmechanic"/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-addservice' element={[<Adminnav/>,<Workshopmain data="addservice"/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-myservices' element={[<Adminnav/>,<Workshopmain data="myservices"/>,<Footer/>]}/>
      <Route path='/workshop-spareparts' element={[<Adminnav/>,<SparepartsWorkshop/>,<Footer/>]}/>


      {/* Admin */}
      <Route path='/admin-login' element={[<Loginnav/>,<Adminlogin/>,<Footer/>]}/>
      <Route path='/admin-dashboard' element={[<Adminnav/>,<AdminDashboard/>,<Footer/>]}/>
      <Route path='/req' element={<Workshopreuest/>}/>
      <Route path='/dashboard-workshop-approval/:id' element={[<Navbar/>,<WorkshopRequestApproval url={url}/>,<Footer/>]}/>
      <Route path='/nav' element={<Loginnav/>}/>
      


     </Routes>
     </BrowserRouter>
   

  );
}

export default App;
