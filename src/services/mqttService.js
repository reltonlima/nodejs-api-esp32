const mqtt = require('mqtt');
const client = mqtt.connect(`mqtt://${process.env.MQTT_BROKER_URL}:${process.env.MQTT_BROKER_PORT}`);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

exports.publishMessage = (topic, message) => {
  client.publish(topic, message, (err) => {
    if (err) {
      console.error('Failed to publish message', err);
    } else {
      console.log('Message published to topic', topic);
    }
  });
};