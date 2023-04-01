
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import HireMe from './HireMe/HireMe';
import MyProject from './MyProject/MyProject';
import ProjectCamCove from './MyProject/ProjectCamCove';

import ProjectCCC from './MyProject/ProjectCCC';
import ProjectTravelo from './MyProject/ProjectTravelo';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';


import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className='bg-[#000000]'>
      <div className="App  lg:w-[1512px] mx-auto">

        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/myProject' element={<MyProject></MyProject>}></Route>
          <Route path='/contact' element={<HireMe></HireMe>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/projectCCC' element={<ProjectCCC></ProjectCCC>}></Route>
          <Route path='/projectCamCove' element={<ProjectCamCove></ProjectCamCove>}></Route>
          <Route path='/travelo' element={<ProjectTravelo></ProjectTravelo>}></Route>
        </Routes>



      </div>
    </div>
  );
}

export default App;
