import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Servicos } from './pages/Servicos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Logo/>
        <Routes>
          <Route path ='/'element={<Home/>}/>
          <Route path ='/services'element={<Servicos/>}/>
          <Route path ='/contacts'element={<Contact/>}/>
          <Route path ='/' element={<Logo/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
