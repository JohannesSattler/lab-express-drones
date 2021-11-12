// Iteration #1
require('../db')

const mongoose = require('mongoose');

let DroneModel = require('../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

DroneModel.insertMany(drones)
.then((result) => {
    console.log('sucess data mockig');
    mongoose.connection.close()
}).catch((err) => {
    console.log('failed data mockig', err);
    mongoose.connection.close()
});