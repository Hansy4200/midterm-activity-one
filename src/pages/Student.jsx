import { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';
function Students() {
const [students, setStudents] = useState([]);
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
setStudents(studentData);
}, []);
return (
<div>
<h2>Student List</h2>
<table border="1">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Course</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{students.map((student) => (
<StudentList key={student.id} student={student} />
))}
</tbody>
</table>
</div>
);
}
export default Students