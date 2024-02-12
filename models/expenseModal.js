const mongoose = require('mongoose');

const expenseScema = new mongoose.Schema({
    expenseType:{
        type : String,
    },
    expenserName:{
        type: String,
    },
    amount:{
        type : String,
    },
    isDelete:{
        type : Boolean,
    }
});

module.exports = mongoose.model('expense',expenseScema);