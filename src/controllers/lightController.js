const mqttService = require('../services/mqttService');

class LightController {
    getStatus(req, res) {
        // Lógica para obter o status da luz
        res.send('Status da luz');
    }

    turnOn(req, res) {
        const { channel } = req.body;
        const message = JSON.stringify({ action: 'turnOn', channel });
        console.log(`Ligando luz no canal ${channel}`);
        this.mqttService.publishMessage(process.env.LIGHT_CONTROL_TOPIC, message);
        res.send(`Luz no canal ${channel} ligada`);
    }

    turnOff(req, res) {
        const { channel } = req.body;
        const message = JSON.stringify({ action: 'turnOff', channel });
        console.log(`Desligando luz no canal ${channel}`);
        mqttService.publishMessage(process.env.LIGHT_CONTROL_TOPIC, message);
        res.send(`Luz no canal ${channel} desligada`);
    }
}

module.exports = new LightController(mqttService);