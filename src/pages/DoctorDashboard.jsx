// import React from 'react';
// import './DoctorDashboard.css';
// import Doctor1Image from '../assets/Dr-Desmond-Fang.png';

// const DoctorDashboard = () => {
//   return (
//     <div className="doctor-dashboard">
//         <div className="doctor-title">
//         <div className="doctor-image-container">
//           <img 
//             src={Doctor1Image} 
//             alt="Dr Desmond Fang" 
//             className="doctor-image"
//           />
//         </div>
//       <div className="doctor-header">
//         <h1>Dr Desmond Fang</h1>
//         <button>VIEW BOOKINGS</button>
//         <h2>MD, FRACGP.</h2>
//         <h3>Specialist General Practitioner</h3>
//       </div>
//       </div>

//       <div className="doctor-details">
//         <p><strong>Consults:</strong> Monday and Thursday.</p>
//         <p><strong>Interests:</strong> Men's Health, Sexual Health, Preventative and Family Health, Dermatology.</p>
//       </div>

//       <div className="divider"></div>

//       <div className="appointment-section">
//         <button>BOOK APPOINTMENT</button>
        
//         <p className="doctor-bio">
//           Dr Desmond Fang is an Australian-medical graduate from The University of Melbourne in 2018, 
//           having worked across both metropolitan and rural hospitals before embarking on GP training, 
//           obtaining RACGP fellowship in 2024.
//           <br /><br />
//           Dr Desmond Fang is a generalist practitioner having done most of his training in a rural setting and is adept at managing acute and chronic medical issues from newborns to the elderly. He enjoys mental health and ADHD management and is happy to work with local psychiatrists for your ADHD diagnosis/treatment plans, including taking on S8 permits. He has a keen interest in sexual health and LGBTQ+ health, and is comfortable with STI testing, contraception, PREP and other men’s health issues. If you require an urgent appointment due to illness, STI testing, post-exposure prophylaxis or another time-sensitive issue, he will do his best to ensure that you can be attended to.

// He is well versed in skin health and can provide opinion and management of common troubling skin conditions such as eczema, acne and rosacea, and provides skin checks and performs simple skin procedures. He is also comfortable with discussing wellbeing and weight management, including discussion of eligible weight loss medications.

// Desmond also works after-hours at certain Priority Care GP clinics that provide urgent care, and is happy to follow-up patients at Elevate Medical Clinic to review their progress and discuss further management if required.

// Desmond is known for being thorough, detail-oriented and empathetic. As a person who has sat on the other side of the doctor’s desk, he appreciates the anxiety and challenges of being a patient navigating an increasingly complicated healthcare system.

// As a young General Practitioner, he is a proud new addition at Elevate Medical Clinic, focusing on delivering high quality, patient-centred healthcare. He works closely with nearby specialists and allied health professionals, ensuring an integrated approach to your care.

// He currently works 3 days a week and is able to do telehealth consults for eligible requests. He lives locally in Burwood and in his free time enjoys playing classical piano, badminton and training his Shiba inu Bibi.
//         </p>
//       </div>
      
//     </div>
//   );
// };

// export default DoctorDashboard;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';
import Doctor1Image from '../assets/Dr-Desmond-Fang.png';
import Doctor2Image from '../assets/Dr-Laura-Profile-bio.png';
import Doctor3Image from '../assets/Dr-Krishnan-Rasaratnam.png';

const DoctorDashboard = () => {
  const { id } = useParams();
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

  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="doctor-dashboard">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Doctors
      </button>
      
      <div className="doctor-title">
        <div className="doctor-image-container">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="doctor-image"
          />
        </div>
        <div className="doctor-header">
          <h1>{doctor.name}</h1>
          <button className="view-bookings">VIEW BOOKINGS</button>
          <h2>{doctor.title}</h2>
          <h3>{doctor.specialty}</h3>
        </div>
      </div>

      <div className="doctor-details">
        <p><strong>Consults:</strong> {doctor.consults}</p>
        <p><strong>Interests:</strong> {doctor.interests}</p>
      </div>

      <div className="divider"></div>

      <div className="appointment-section">
        <button className="book-appointment">BOOK APPOINTMENT</button>
        <p className="doctor-bio">
          {doctor.bio}
        </p>
      </div>
    </div>
  );
};

export default DoctorDashboard;