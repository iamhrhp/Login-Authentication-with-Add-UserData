import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Otp from './components/Otp';
import DashBoard from './components/DashBoard';
import { DataContextProvider } from './components/context/DataContext';
import UserData from './components/UserData';

function App() {
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/user" element={<UserData />} />
        </Routes>
      </DataContextProvider>
    </>
  );
}

export default App;
