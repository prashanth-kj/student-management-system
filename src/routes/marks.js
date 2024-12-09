import express from 'express'
import marksController from '../controller/marks.js'
const router =express.Router()

router.post('/:studentid/:subjectid/create',marksController.createMarks)
router.get('/getmarks',marksController.getmarks)

export default router