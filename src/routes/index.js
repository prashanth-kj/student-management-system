import express from 'express'
import studentroutes from './student.js'
import subjectroutes from './subject.js'
import marksroutes from './marks.js'
import reportroutes from './report.js'
const router =express.Router()
 
 router.use('/student',studentroutes)
 router.use('/subject',subjectroutes)
 router.use('/marks',marksroutes)
 router.use('/report',reportroutes)
 
export default router