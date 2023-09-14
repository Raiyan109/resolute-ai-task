import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './pages/Home/Purchase';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/tools/:id' element={<Purchase />}></Route>
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
