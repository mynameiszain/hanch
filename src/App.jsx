import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SoapBox from './pages/Soapbox.jsx';

function App() {
  

  return (
    <>
      <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/soapbox'} element={<SoapBox />} />
        </Routes>
    </>
  )
}

export default App
