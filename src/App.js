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
import SignupWorkshop from './Components/Workshop/signupWorkshop';
import SignupUser from './Components/User/SignupUser';
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Navbar/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/' element={[<Navbar/>,<Pageheading/>,<Footer/>]}/>
      <Route path='/' element={[<Navbar/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/' element={[<Navbar/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/' element={[<Navbar/>,<LoginWorkshop/>,<Footer/>]}/> 
      <Route path='/' element={[<Navbar/>,<SignupMechanic/>,<Footer/>]}/>
       <Route path='/' element={[<Navbar/>,<SignupWorkshop/>,<Footer/>]}/>
       <Route path='/' element={[<Navbar/>,<SignupUser/>,<Footer/>]}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
