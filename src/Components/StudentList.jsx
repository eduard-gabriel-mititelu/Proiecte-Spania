import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h2>Proiecte elevi Erasmus+ Spania 2026</h2>
      <ul className="student-list-items">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <iframe src={student.link} title={student.Nume} className="student-iframe"></iframe>
            <div className="student-info">
              <h3>{student.Nume}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;