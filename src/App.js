
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Rooms from '../src/Pages/Rooms';
import Error from '../src/Pages/Error';
import Singleroom from './Pages/Singleroom';
import Navbar from './component/Navbar';
import "../src/App.css";


function App() {
  return (
    <>
      {/* <Navbar/> */}
     <BrowserRouter>
     <Navbar/>
      <Routes>
   
    < Route exact path="/"  element={<Home/>}/>
    <Route path="/rooms" element={<Rooms/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/rooms/:slug" element={<Singleroom/>}/>
    </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App;
