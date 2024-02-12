const expense = require("../models/expenseModal.js");

 const expenseCreate = async (req, res) => {
  try {
    // console.log("create : "+ JSON.stringify(req.body));
    const expenseData = new expense({
      expenserName:req.body.expenserName,
      expenseType:req.body.expenseType,
      amount:req.body.amount,
      isDelete:false,
    });
    const savedexpense = await expenseData.save();
    res.status(200).json(savedexpense);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

 const expenseGetAll = async (req, res) => {
  try {
    const expenseAllData = await expense.find({"isDelete":false});
    res.status(200).json(expenseAllData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

 const expenseUpdate = async (req, res) => {
  try {
    const id = req.params.id;

    const expenseUpdatedData = await expense.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(expenseUpdatedData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

 const expenseDelete = async (req, res) => {
  try {
    const id = req.params.id;
    // const update = { isDelete: true };
    console.log(id);
    await expense.findByIdAndUpdate(id,req.body,{
        new:true
    });
    res.status(201).json({ message: "expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = {
    expenseCreate,
    expenseGetAll,
    expenseDelete,
    expenseUpdate
    // Add other exported functions if any
  };