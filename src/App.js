import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Home from './Components/Home/Home';
import Login from './Components/Login/login.jsx';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
