const express = require('express');
const router = express.Router();
const memberRoute = require('../controllers/memberController');
const fileUpload = require('../middleware/fileupload');

router.get('/members',memberRoute.memberGetAll);
router.post('/memberCreate',fileUpload,memberRoute.memberCreate);
router.put('/memberUpdate/:id',fileUpload,memberRoute.memberUpdate);
router.delete('/memberDelete/:id',memberRoute.memberDelete);

module.exports = router;