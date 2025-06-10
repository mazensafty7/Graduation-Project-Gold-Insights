import React from "react" ;
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider } from "../src/pages/Authcontext";
import Navbar from "./components/Navbar";
import './App.css';
import {
  Home,
  Login,
  Register,
  Experts,
  News,
  Learn,
  Books,
  Forecasting,
  Analysis,
  Goldprice,
  Dollarprice,
  Silverprice,
  Oilprice,
 
  Sandp,

  GoldAnalysis,
  Seasons,
  Correlation,
  General

  
  
  

} from"./pages";




import './App.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/news" element={<News />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/books" element={<Books />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/goldprice" element={<Goldprice />} />
          <Route path="/silverprice" element={<Silverprice />} />
          <Route path="/oilprice" element={<Oilprice />} />
          <Route path="/dollarprice" element={<Dollarprice />} />
          <Route path="/sandp" element={<Sandp />} />
          <Route path="/externalevent" element={<GoldAnalysis />} />
          <Route path="/season" element={<Seasons />} />
          <Route path="/correlation" element={<Correlation />} />
          <Route path="/general" element={<General />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
