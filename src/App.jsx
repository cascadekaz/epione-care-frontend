// import './App.css'

// function App() {
  
// }


// import React from "react";
// import Navbar from './components/Navbar';
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Footer/>
//       {/* Other components like Routes, Pages, etc. */}
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Aboutus from "./pages/Aboutus";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";
import Login from './pages/Login';
import Signup from "./pages/Signup"; // Add this line
import Book from './pages/Book';
// import AddPatient from "./pages/AddPatient";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";

import "./index.css"; // Ensuring global styles are included

const App = () => {
  return (
    <Router>
      <Navbar/>
      {/* <Body/> */}
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book-now" element={<Book />} />
        {/* <Route path="/add-patient" element={<AddPatient />} />? */}
        {/* <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> */}
        <Route path="/doctors/:id" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;