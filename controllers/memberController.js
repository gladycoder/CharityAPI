const { log } = require('console');
const Member = require('../models/memberModel');
const fs = require('fs');
const DIR = "./uploads/";
const memberGetAll = async(req,res)=>{
    try{
        const allUserInfo = await Member.find();
        
  
        //return console.log(singleUserInfo);
        return res.status(200).json(allUserInfo);
        //return console.log(singleUserInfo)
      }
      catch(error){
        res.status(501).json({
          code: 501,
          message: error.message,
          error: true,
        });
      }
}

const memberCreate = async(req,res)=>{
    console.log(req.body);
    let payload = req.body;
    console.log("create Member: ", payload);

    //Image check if have then include image into payload
    var imgUrl = "";
    if (req.file) var imgUrl = `${req.file.filename}`;
    payload.avater = imgUrl;
    try{
        const memberData = new Member({
            name:req.body.name,
            address:req.body.address,
            dob:req.body.dob,
            phoneno:req.body.phoneno,
            avatar:imgUrl,
        })
        const savedMember = await memberData.save();
    console.log("Donation data : "+ memberData);
    console.log("savedDonation data : "+ savedMember);
    res.status(200).json(savedMember);
    }
    catch(error){
res.status(500).json({error:"Internal Server Error"})
    }

};

const memberUpdate = async(req,res)=>{
    const id = req.body._id;
    let reqBody = req.body;

    //If File have then push file into reqBody then process update
    var imgUrl = '';
    if(req.file) var imgUrl = `${req.file.filename}`;
    reqBody.avatar = imgUrl;
    
    //Check user have photo/image. if had then first delete local file then database
    const userInfo = await Member.find({_id: req.body._id});
    const userPhotoInfo = userInfo[0].avatar;
    console.log("userInfo : ",userInfo);
    console.log("userphotInfo : ",userPhotoInfo);
    console.log("imgurl : ",imgUrl);
    console.log("id : ",id);
    console.log("reqBody: ",reqBody);
    if(userPhotoInfo){
      fs.unlinkSync( "./uploads/"+ userPhotoInfo);
    }

    try{
      const memberData = {
        name:req.body.name,
        address:req.body.address,
        dob:req.body.dob,
        phoneno:req.body.phoneno,
        avatar:imgUrl,
    };
       
        const updateItem = await Member.findByIdAndUpdate( id, reqBody, {
            new: true,
          } );
        return res.status(200).json(updateItem);


    }catch(error){
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }

}

const memberDelete = async(req,res)=>{
    const id = req.params.id;
  console.log(id)
    try{
     
        const userDeleteinfo = await Member.findByIdAndDelete({_id: id});
        const {avatar} = userDeleteinfo
        
        if(avatar){
          fs.unlinkSync(DIR + avatar);
        }

        //const userDelete = await User.deleteOne({_id: id});
        return res.status(200).json({
          code: 200,
          message: "User Delete Successfully",
          data: userDeleteinfo,
        });
    }catch(error){
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
}

module.exports={
    memberGetAll,
    memberCreate,
    memberUpdate,
    memberDelete,
};