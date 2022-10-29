const Hng9 = require("../models/Hng");


exports.hngFlight = (req, res) => {
    //validate
    
    //create user details
    const hng = new Hng9({
        slackUsername: req.body.slackUsername ,
        backend: req.body.backend,
        age: req.body.age,
       bio: req.body.bio
    });

    //save into database
    hng.save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving your Hngi9 details.",
            });
        });
};

//retrieving all Hngi9 details
exports.findAll = (req, res) => {
    Hng9.find()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving Hngi9 details."
            });
        });
};

//find a single user with (Id)
exports.findOne = (req, res) => {
    Hng9.findById(req.params.Id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Hngi9 details not found with id " + req.params.Id,
                });
            }
            res.send(data);
        }).catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "hngI9 details not found with id " + req.params.Id,
               
                });
            }
            return res.status(500).send({
                message: "Error retrieving hngI9 details with id " + req.params.Id,
               
            });
        });
};


//update hngi9 user details
exports.hngUpdate = (req, res) => {
    Hng9.findByIdAndUpdate(req.params.Id, {
        slackUsername: req.body.slackUsername ,
        backend: req.body.backend,
        age: req.body.age,
       bio: req.body.bio
    }, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Hngi9 details not found with id " + req.params.Id,
                });
        
            } res.send(data);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Hngi9 details not found with id " + req.params.Id,
               
                });
            }
            return res.status(500).send({
                message: "Error updating user details with id " + req.params.Id,
               
            });
        });
};
