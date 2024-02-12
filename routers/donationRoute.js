const express = require('express');

const donateRoute = require('../controllers/donationController.js');

const router = express.Router();

router.get("/fetch",donateRoute.donationGetAll);
router.post("/create",donateRoute.donationCreate);
router.put("/update/:id",donateRoute.donationUpdate);
router.delete("/delete/:id",donateRoute.donationDelete);

module.exports = router;
