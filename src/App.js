
import './App.css';
import HireMe from './HireMe/HireMe';
import MyProject from './MyProject/MyProject';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App bg-[#000000]">

      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <MyProject></MyProject>
      <HireMe></HireMe>



    </div>
  );
}

export default App;
