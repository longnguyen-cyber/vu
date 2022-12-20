import express from 'express'
import gasStationCtrl from '../controllers/gasStationCtrl'

const router = express.Router()

router.post('/gas', gasStationCtrl.createGas)
router.get('/gas', gasStationCtrl.getAllGas)

export default router
