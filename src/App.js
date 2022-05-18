import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequiredAuth from './components/Login/RequiredAuth';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
