import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import BrowseEvent from './pages/BrowseEvents/BrowseEvent';
import Help from './pages/Help/Help';
import Organize from './pages/Organize/Organize';
import Login from './pages/User/Login/Login';
import SignUp from './pages/User/SignUp/SignUp';
import NotFound from './pages/Shared/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/browse-events' element={<BrowseEvent />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/organize' element={<Organize />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
