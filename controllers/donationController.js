const Donation = require("../models/donationModel");

 const donationCreate = async (req, res) => {
  console.log(req.body);
  try {
    const donationData = new Donation({
      name:req.body.name,
      address:req.body.address,
      amount:req.body.amount,
      phoneno:req.body.phoneno,
      buyer:req.body.buyer,
    });

    const savedDonation = await donationData.save();
    console.log("Donation data : "+ donationData);
    console.log("savedDonation data : "+ savedDonation);
    res.status(200).json(savedDonation);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

 const donationGetAll = async (req, res) => {
  try {
    const donationAllData = await Donation.find();
    res.status(200).json(donationAllData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

 const donationUpdate = async (req, res) => {
  try {
    const id = req.params.id;
console.log("Donation update : "+ id);
    const donationUpdatedData = await Donation.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(donationUpdatedData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

 const donationDelete = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await Donation.findByIdAndDelete(id);
    res.status(201).json({ message: "donation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = {
    donationCreate,
    donationGetAll,
    donationDelete,
    donationUpdate
    // Add other exported functions if any
  };