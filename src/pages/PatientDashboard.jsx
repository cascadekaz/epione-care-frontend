import React from 'react';
import './PatientDashboard.css';

const PatientDashboard = () => {
  // Sample patient data (in a real app, this would come from an API or state)
  const patient = {
    name: "John Doe",
    age: 42,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA",
    bloodType: "A+",
    medicalHistory: [
      "Hypertension (diagnosed 2018)",
      "Type 2 Diabetes (diagnosed 2020)",
      "Allergies: Penicillin, Pollen",
      "Previous surgeries: Appendectomy (2010)",
      "Current medications: Metformin, Lisinopril"
    ],
    lastAppointment: "2023-05-15",
    nextAppointment: "2023-08-20"
  };

  return (
    <div className="patient-dashboard">
      <div className="patient-header">
        <h1>Patient Dashboard</h1>
        <div className="patient-basic-info">
          <div className="patient-avatar">
            <div className="avatar-placeholder">{patient.name.charAt(0)}</div>
          </div>
          <div className="patient-details">
            <h2>{patient.name}</h2>
            <p><strong>Age:</strong> {patient.age} years</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
          </div>
        </div>
      </div>

      <div className="patient-contact-info">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
        <p><strong>Address:</strong> {patient.address}</p>
      </div>

      <div className="patient-medical-info">
        <div className="info-card">
          <h3>Medical History</h3>
          <ul>
            {patient.medicalHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <h3>Vital Statistics</h3>
          <p><strong>Blood Type:</strong> {patient.bloodType}</p>
          <p><strong>Last Appointment:</strong> {patient.lastAppointment}</p>
          <p><strong>Next Appointment:</strong> {patient.nextAppointment}</p>
        </div>
      </div>

      <div className="patient-actions">
        <button className="primary-btn">Schedule Appointment</button>
        <button className="secondary-btn">Update Information</button>
        <button className="secondary-btn">View Reports</button>
        <button className="secondary-btn">View Bookings</button>
      </div>
    </div>
  );
};

export default PatientDashboard;