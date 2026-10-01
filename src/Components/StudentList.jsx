import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h2>Student Directory</h2>
      <ul className="student-list-items">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <a href={student.link} target="_blank" rel="noopener noreferrer" className="student-link">
              {student.Nume}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;