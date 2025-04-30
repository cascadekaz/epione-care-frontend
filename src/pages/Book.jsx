// import React from 'react';
// import { useState } from 'react';
// import './Book.css';

// const Book = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     return (
//         <div className="booking-page">
//             <h2 className="title">Book an appointment</h2>
//             <div className="booking-container">
//                 <div className="appointment-section">
                
//         <input
//         type="text"
//         placeholder="Search Doctors..."
//         className="search-bar"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//                     <div className="doctor-list">
//                         <div className="doctor-card">
//                             {/* <img src="https://via.placeholder.com/80" alt="Doctor" /> */}
//                             <div className="doctor-info">
//                                 <h4>Yi (Peter) Cheng</h4>
//                                 <p>General Practitioner, Male, BPharm, FRACGP, MBBS (Hons)</p>
//                                 <p>Peter completed his Medical Degree with Honours from Monash University in 2013. Prior to that, he had been working as a Pharmacist since 2008.</p>
//                                 <button className="view-btn">View Yi (Peter) Cheng</button>
//                                 <p className="availability">Appointments available from: Today, 9:45 am</p>
//                             </div>
//                         </div>
//                         <div className="doctor-card">
//                             {/* <img src="https://via.placeholder.com/80" alt="Doctor" /> */}
//                             <div className="doctor-info">
//                                 <h4>Vicki Zhang</h4>
//                                 <p>Physiotherapist, Female</p>
//                                 <p>Speaks Cantonese, English, and Mandarin</p>
//                                 <p>Vicki holds a post-graduate certificate in Pelvic Floor Physiotherapy and has extensive experience in pelvic health physiotherapy.</p>
//                                 <button className="view-btn">View Vicki Zhang</button>
//                                 <p className="availability">Appointments available from: Mon, 9:00 am</p>
//                             </div>
//                         </div>
//                         <div className="doctor-card">
//                             {/* <img src="https://via.placeholder.com/80" alt="Nurse" /> */}
//                             <div className="doctor-info">
//                                 <h4>Nurse</h4>
//                                 <p>Nurse Practitioner</p>
//                                 <button className="view-btn">View Nurse</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Book;


import React from 'react';
import { useState } from 'react';
import './Book.css';

const Book = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="booking-page">
            <div className="booking-container">
                <h1 className="title">Book an appointment</h1>
                <input
                    type="text"
                    placeholder="Search Doctors..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="doctor-list">
                    <div className="doctor-card">
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr Desmond Fang</h3>
                            <p className="doctor-qualifications">General Practitioner, Male,<br />BPharm, FRACGP, MBBS (Hons)</p>
                            <p className="doctor-bio">Peter completed his Medical Degree with Honours from Monash University in 2013. Prior to that, he had been working as a Pharmacist since 2008.</p>
                            <button className="view-btn">Book Appointment</button>
                            <p className="availability">Appointments available from:<br /><strong>Today: 9:45 am</strong></p>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr Laura Robson</h3>
                            <p className="doctor-qualifications">General Practitioner, Female,<br />BSc (Hons) MD SCHP DRANZOG FPAA, FRACGP</p>
                            <p className="doctor-bio">Peter completed his Medical Degree with Honours from Monash University in 2013. Prior to that, he had been working as a Pharmacist since 2008.</p>
                            <button className="view-btn">Book Appointment</button>
                            <p className="availability">Appointments available from:<br /><strong>Today: 9:45 am</strong></p>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr Krishnan Rasaratham</h3>
                            <p className="doctor-qualifications">General Practitioner, Male,<br />MBBS (Hons), SCHP, FRACGP, MSportsMed</p>
                            <p className="doctor-bio">Peter completed his Medical Degree with Honours from Monash University in 2013. Prior to that, he had been working as a Pharmacist since 2008.</p>
                            <button className="view-btn">Book Appointment</button>
                            <p className="availability">Appointments available from:<br /><strong>Today: 9:45 am</strong></p>
                        </div>
                    </div>
                    {/* Other doctor cards would go here */}
                </div>
            </div>
        </div>
    );
};

export default Book;