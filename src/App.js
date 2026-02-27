import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CardDetails from './Components/CardDetails';
import HomePage from './HomePage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path='/card/:id' element={<CardDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
