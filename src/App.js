
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';

import ProjectCCC from './MyProject/ProjectCCC';
import Home from './Pages/Home/Home';


import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App bg-[#000000]">

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/projectCCC' element={<ProjectCCC></ProjectCCC>}></Route>
      </Routes>



    </div>
  );
}

export default App;
