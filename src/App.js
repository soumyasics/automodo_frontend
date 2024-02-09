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
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Navbar/>,<MainAdmin/>,<Footer/>]}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
