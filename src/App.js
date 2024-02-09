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
function App() {
  return (
    <div>
      <Navbar/>
      {/* <SignupMechanic/> */}
      {/* <LoginMechanic/> */}
      
      {/* <LoginUser/> */}
      {/* <LoginWorkshop/> */}
      <Pageheading/>

     
    </div>
  );
}

export default App;
