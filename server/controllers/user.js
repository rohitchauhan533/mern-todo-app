const User = require("../models/user");


exports.getAllUser = (req, res) => {
    User.find()
        .then((user) => res.json(user))
        .catch((err) => 
            res
            .status(404)
            .json({message: "user not found", error: err.message})
            );
};
 

exports.postAllUser = (req, res) => {
    User.create(req.body)
        .then((data) => res.json({message: "user added successfully", data}))
        .catch((err) => 
           res
           .status(400)
           .json({message: "failed to add user", error: err.message})
        );
};

exports.putAllUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({message: "updated successfully", data}))
        .catch((err) =>
        res
          .status(400)
          .json({message: "failed to update user", error: err.message})
        );
};
 
exports.deleteAllUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then((data) => res.json({message: "deleted successfully", data}))
        .catch((err) =>
         res 
            .status(404)
            .json({message: "user not found", error: err.message})
        );
};