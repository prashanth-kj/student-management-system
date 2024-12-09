import express from 'express'
import reportcard from '../utils/reportcard.js'
const router= express.Router()

router.get('/reportcard/:id',reportcard.reportCard)

export default router