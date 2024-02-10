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
      <Route path='/1' element={[<Navbar/>,<AdminTable/>,<Footer/>]}/>
      <Route path='/2' element={[<Navbar/>,<Pageheading/>,<Footer/>]}/>
      <Route path='/3' element={[<Navbar/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/4' element={[<Navbar/>,<LoginMechanic/>,<Footer/>]}/>
      <Route path='/5' element={[<Navbar/>,<LoginWorkshop/>,<Footer/>]}/> 
      <Route path='/6' element={[<Navbar/>,<SignupMechanic/>,<Footer/>]}/>
       <Route path='/7' element={[<Navbar/>,<SignupWorkshop/>,<Footer/>]}/>
       <Route path='/8' element={[<Navbar/>,<SignupUser/>,<Footer/>]}/>
     </Routes>
     </BrowserRouter>

  );
}

export default App;
