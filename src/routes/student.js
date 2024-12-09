import express from 'express'
import studentController from '../controller/student.js'
const router =express.Router()
  
  router.post('/create',studentController.createStudent)
  router.get('/getstudents',studentController.getStudents)
  router.get('/getstudents/:id',studentController.getstudentbyId)
  router.put('/edit/:id',studentController.editstudent)
  router.delete('/delete/:id',studentController.deletestudent)


export default router