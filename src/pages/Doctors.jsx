// import React from 'react';
// import './Doctors.css';
// // Import images from assets folder
// import Doctor1Image from '../assets/Dr-Desmond-Fang.png';
// import Doctor2Image from '../assets/Dr-Laura-Profile-bio.png';
// import Doctor3Image from '../assets/Dr-Krishnan-Rasaratnam.png';

// const Doctors = () => {
//   const doctors = [
//     {
//       name: "Dr Desmond Fang",
//       image: Doctor1Image
//     },
//     {
//       name: "Dr Laura Robson",
//       image: Doctor2Image
//     },
//     {
//       name: "Dr Krishnan Rasaratham",
//       image: Doctor3Image
//     }
//   ];

//   return (
//     <div className="doctors-page">
//       <h1>Our Doctors</h1>
//       <div className="doctors-container">
//         {doctors.map((doctor, index) => (
//           <div key={index} className="doctor-card">
//             <div className="doctor-image-container">
//               <img 
//                 src={doctor.image} 
//                 alt={doctor.name} 
//                 className="doctor-image"
//               />
//             </div>
//             <h2 className="doctor-name">{doctor.name}</h2>
//             <a href="/doctor-dashboard" className="read-more">READ MORE</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Doctors;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctors.css';
import Doctor1Image from '../assets/Dr-Desmond-Fang.png';
import Doctor2Image from '../assets/Dr-Laura-Profile-bio.png';
import Doctor3Image from '../assets/Dr-Krishnan-Rasaratnam.png';

const Doctors = () => {
  const navigate = useNavigate();
  
  const doctors = [
    {
      id: 1,
      name: "Dr Desmond Fang",
      image: Doctor1Image,
      title: "MD, FRACGP",
      specialty: "Specialist General Practitioner",
      consults: "Monday and Thursday",
      interests: "Men's Health, Sexual Health, Preventative and Family Health, Dermatology",
      bio: "Dr Desmond Fang is an Australian-medical graduate from The University of Melbourne in 2018..."
    },
    {
      id: 2,
      name: "Dr Laura Robson",
      image: Doctor2Image,
      title: "MD, FRACGP",
      specialty: "Pediatric Specialist",
      consults: "Tuesday and Friday",
      interests: "Child Health, Vaccinations, Developmental Disorders",
      bio: "Dr Laura Robson specializes in pediatric care with over 10 years of experience..."
    },
    {
      id: 3,
      name: "Dr Krishnan Rasaratham",
      image: Doctor3Image,
      title: "MD, FRACGP",
      specialty: "Cardiology Specialist",
      consults: "Wednesday and Saturday",
      interests: "Heart Health, Cardiovascular Diseases, Preventive Cardiology",
      bio: "Dr Krishnan Rasaratham is a renowned cardiologist with extensive experience..."
    }
  ];

  const handleReadMore = (doctorId) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-image-container">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="doctor-image"
              />
            </div>
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <button 
              onClick={() => handleReadMore(doctor.id)} 
              className="read-more"
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;