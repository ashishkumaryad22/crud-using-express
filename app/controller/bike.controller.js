const Bike = require("../models/bike.model.js");

exports.getAllBike = (req, res) => {
  Bike.find()
    .then((bikes) => {
      res.send(bikes);
    })
    .catch((err) => {
      res.status(500).send({ msg: "Error Occured while Fetching the Bikes" });
    });
};

exports.createBike = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Bike content cannot be empty...........",
    });
  }
  const bike = new Bike({
    name: req.body.name,
    price: req.body.price,
    c_c: req.body.c_c,
    mfy: req.body.mfy,
  });
  bike
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        msg: "Error Occured while creating records.........",
      });
    });
};

exports.updateBike = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Bike Data to update can not be Empty..........",
    });
  }
  let id = req.params.id;
  Bike.findByIdAndUpdate(id, req.body, { useFineAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Bike With id = ${id}.may be the data not found! `,
        });
      } else res.send({ message: "Bike was updated Successfully..." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error Update Bike with Id=" + id,
      });
    });
};

exports.deleteBike = (req, res) => {
  const id = req.params.id;
  Bike.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Bike with id=${id}. May be Bike was not found.... `,
        });
      } else {
        res.send({ message: "Bike was deleted Successfully........." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Bike with id = " + id,
      });
    });
};
