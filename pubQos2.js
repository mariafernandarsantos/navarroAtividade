import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("PUB QoS2 - Sensor Detector de Incêndio: conectado");
  let temp = 0;
  let fumaca = false;

  const t = setInterval(() => {
    temp = Math.floor(Math.random() * 100)
    if(temp > 60){
      fumaca = true

      // Retain flag
      client.publish("aula/qos", `msg Início de incêndio (QoS2)`, { qos: 2,  retain: true });
      console.log("PUB QoS2 enviou: Início de incêndio");
    }

  }, 1000);
});
