# IoT Light Control

This project allows you to control lights using an ESP32 and an 8-channel relay board through MQTT. The application is built with Node.js and utilizes Express for handling HTTP requests.

## Project Structure

```
iot-light-control
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── lightController.js # Handles light control logic
│   ├── routes
│   │   └── lightRoutes.js     # Defines routes for light control
│   ├── services
│   │   └── mqttService.js      # Manages MQTT connection
│   └── config
│       └── mqttConfig.js       # Configuration for MQTT
├── package.json               # npm configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/reltonlima/nodejs-api-esp32.git
   cd iot-light-control
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the environment:**
   Create a `.env` file in the root directory and add your MQTT broker credentials:
   ```
   MQTT_BROKER_URL=<your_broker_url>
   MQTT_BROKER_PORT=<your_broker_port>
   MQTT_USERNAME=<your_username>
   MQTT_PASSWORD=<your_password>
   ```

4. **Run the application:**
   ```
   npm start
   ```

## Usage

- To turn on a light, send a POST request to `/lights/on` with the channel number in the request body.
- To turn off a light, send a POST request to `/lights/off` with the channel number in the request body.

## Example

```json
POST /lights/on
{
  "channel": 1
}
```

This will turn on the light connected to channel 1 of the relay board.

## License

This project is licensed under the MIT License."