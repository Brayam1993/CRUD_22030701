
const user = require('../models/user.model');

exports.create = function (req, res) {
    const new_user = new user(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
       res.status(400).send({ error:true, message: 'Please provide all required field' }); 
    }else{
        user.create(new_user, function(err, user){
            if (err)
            res.send(err);
            res.json({error:false,message:"User added successfully!",data:user});
        });
    };
};