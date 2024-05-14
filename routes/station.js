const express = require('express');
const router = express.Router();
const path = require('path');
const { addStation, getStation, deleteStation } = require('../controllers/station');

//즐겨찾기 조회(/v1/stations/list)
router.post('/list', getStation);

//즐겨찾기 등록(/v1/stations/add)
router.post('/add',addStation);

//즐겨찾기 삭제(/v1/stations/delete:id)
router.delete('/remove',deleteStation);

module.exports = router;