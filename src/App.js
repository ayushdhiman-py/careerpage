import './App.css';
import Header from './components/Header.jsx';
import { Route, Routes  } from "react-router-dom"
import Softwarepage from './components/Softwarepage';
import { ContSec1 } from './components/ContSec1';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<ContSec1/>}/>
        <Route exact path="/softwarepage/:id" element={<Softwarepage/>}/>
      </Routes>
    </>
  );
}

export default App;
