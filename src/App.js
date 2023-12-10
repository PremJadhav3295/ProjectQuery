
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigationbar } from './components/NavigationBar.jsx';

function App() {
  return (
    <BrowserRouter>
       <Navigationbar></Navigationbar>
        <Routes>
           {/* <Route path='/' element={<Home/>}></Route>
           <Route path='/About' element={<About/>}></Route>
           <Route path='/Login' element={<Login/>}></Route>
           <Route path='/Registration' element={<Registration/>}></Route> */}
           <Route path='/customerlist' element={<Customerlist/>}></Route>
          
           {/* <Route path='/Flightdetails' element={<Flightdetails/>}></Route> */}
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
