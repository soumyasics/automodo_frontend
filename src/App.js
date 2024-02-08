import logo from './logo.svg';
import './App.css';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import LoginMechanic from './Components/Mechanic/LoginMechanic';
function App() {
  return (
    <div>
      <Navbar/>
      <LoginMechanic/>
    </div>
  
  );
}

export default App;
