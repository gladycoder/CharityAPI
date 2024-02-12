const express = require('express');

const expenseRoute = require('../controllers/expenseController.js');

const router = express.Router();

router.get("/expenseFetch",expenseRoute.expenseGetAll);
router.post("/expenseCreate",expenseRoute.expenseCreate);
router.put("/expenseUpdate/:id",expenseRoute.expenseUpdate);
router.put("/expenseDelete/:id",expenseRoute.expenseDelete);

module.exports = router;
