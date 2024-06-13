import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/navbar/nav';
import Footer from './components/footer/footer';
import { mycontext } from './components/context';
import { useState } from 'react';
import { aboutdet, projects, servicedet } from './components/datafile';

function App() {

  const [project,setproject] = useState(projects)
  const [about,setabout] = useState(aboutdet)
  const [services,setservices] = useState(servicedet)

  const values={
    project,setproject,about,setabout,services,setservices
  }
  return (
    <div className="App">
      <BrowserRouter>
      <mycontext.Provider value={values}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nav' element={<Nav />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
        <Footer />
        </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
