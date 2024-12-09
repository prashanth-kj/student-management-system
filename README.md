Student Management System

Description
The Student Management System is a backend application designed to manage academic data effectively. It provides features to handle student records, subjects, marks, and generate detailed report cards for students.

Features
Add, update, view, and delete student records.
Create and manage subjects.
Record and view students' marks.
Generate report cards for individual students.

Technologies Used
Backend: Node.js with Express.js
Database: MongoDB with Mongoose
Authentication: JWT (JSON Web Token) for secure API access

API Endpoints:

Student Routes:

POST /student/create - Add a new student.

GET /student/getstudents - Retrieve all students.

GET /student/getstudents/:id - Retrieve a specific student by ID.

PUT /student/edit/:id - Update a specific student's details.

DELETE /student/delete/:id - Remove a specific student.

Subject Routes:

POST /subject/create - Add a new subject.

GET /subject/getsubjects - Retrieve all subjects.

Marks Routes:

POST /marks/create - Record marks for a student.

GET /marks/getmarks - Retrieve all recorded marks.

Report Card Routes:

GET /reportcard/:id - Generate a report card for a specific student.

Postman Collection
You can test all the API endpoints using this Postman Collection.



