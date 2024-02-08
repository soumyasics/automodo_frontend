import logo from './logo.svg';
import './App.css';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import MainAdmin from './Components/Admin/MainAdmin';
function App() {
  return (
    <div>
      {[<Navbar/>,<MainAdmin/>]}
    </div>
  );
}

export default App;
