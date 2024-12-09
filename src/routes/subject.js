import express from 'express'
import subjectController from '../controller/subject.js'
const router =express.Router()
  
router.post('/create',subjectController.createSubject)
router.get('/getsubjects',subjectController.getSubjects)

export default router