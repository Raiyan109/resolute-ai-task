import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './pages/Home/Purchase';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools/:id' element={<Purchase />}></Route>
      </Routes>

    </div>
  );
}

export default App;
