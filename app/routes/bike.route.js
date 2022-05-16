module.exports = (app) => {
  const bike = require("../controller/bike.controller.js");

  app.post("/create-bike", bike.createBike);
  app.get("/get-bike", bike.getAllBike);
  app.put("/update-bike/:id", bike.updateBike);
  app.delete("/delete-bike/:id", bike.deleteBike);
};
