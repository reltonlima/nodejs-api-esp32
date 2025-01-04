const express = require('express');
const router = express.Router();
const lightController = require('../controllers/lightController');

// Rota para obter o status da luz
router.get('/status', lightController.getStatus);

// Rota para ligar a luz
router.post('/on', lightController.turnOn);

// Rota para desligar a luz
router.post('/off', lightController.turnOff);

module.exports = router;