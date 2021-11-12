const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((drones) => {
      //console.log(drones); 
      res.render('../views/drones/list.hbs', {drones})
    }).catch((err) => {
      next('failed to find drones')
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body
  DroneModel.create({name, propellers, maxSpeed})
  .then((result) => {
    res.redirect('/drones')
  }).catch((err) => {
    next('drones creation failed')
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;

  DroneModel.findById(id)
  .then((drone) => {
    console.log(drone);
    res.render('../views/drones/update-form.hbs', {drone})
  }).catch((err) => {
    next('drones find failed')
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body

  DroneModel.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(() => {
      res.redirect('/drones')
  }).catch((err) => {
      next('Todo edit failed')
  });
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params;

  DroneModel.findByIdAndDelete(id)
  .then(() => {
      res.redirect('/drones')
  }).catch((err) => {
      next('Todo edit failed')
  });
});

module.exports = router;
