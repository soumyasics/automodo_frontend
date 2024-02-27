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
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Navbar/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/table-format' element={[<Navbar/>,<AdminTable/>,<Footer/>]}/>
      <Route path='/page-heading' element={[<Navbar/>,<Pageheading/>,<Footer/>]}/>
      <Route path='/user-login' element={[<Navbar/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/mechanic-login' element={[<Navbar/>,<LoginMechanic/>,<Footer/>]}/>
      <Route path='/workshop-login' element={[<Navbar/>,<LoginWorkshop/>,<Footer/>]}/> 
      <Route path='/user-signup' element={[<Navbar/>,<SignupUser/>,<Footer/>]}/>
      <Route path='/mechanic-signup' element={[<Navbar/>,<SignupMechanic/>,<Footer/>]}/>
       <Route path='/workshop-signup' element={[<Navbar/>,<SignupWorkshop/>,<Footer/>]}/>
       
     </Routes>
     </BrowserRouter>

  );
}

export default App;
