import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
function StudentDetails() {
const { id } = useParams();
const [student, setStudent] = useState(null);
const studentData = [
{ id: 1, name: "Maria Santos", course: "BSIT" },
{ id: 2, name: "Juan dela Cruz", course: "BSCS" },
{ id: 3, name: "Ana Reyes", course: "BSIT" },
{ id: 4, name: "Carlo Mendoza", course: "BSCS" },
{ id: 5, name: "Bianca Torres", course: "ACT" },
{ id: 6, name: "Miguel Ramos", course: "BSIT" },
{ id: 7, name: "Sofia Villanueva", course: "BSCS" },
{ id: 8, name: "Luis Garcia", course: "ACT" },
{ id: 9, name: "Isabella Cruz", course: "BSIT" },
{ id: 10, name: "Rafael Aquino", course: "BSCS" },
];
useEffect(() => {
const found = studentData.find((s) => s.id === parseInt(id));
setStudent(found);
}, [id]);
if (!student) {
return <p>Student not found.</p>;
}
return (
<div>
<h2>Student Details</h2>
<p>ID: {student.id}</p>
<p>Name: {student.name}</p>
<p>Course: {student.course}</p>
<Link to="/students">Back to Students</Link>
</div>
);
}
export default StudentDetails