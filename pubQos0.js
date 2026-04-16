import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("PUB QoS0 - Sensor Temperatura Ambiente: conectado");
  let temp = 0;

  const t = setInterval(() => {
    temp = Math.floor(Math.random() * 100)
    client.publish("aula/qos", `msg ${temp} (QoS0)`, { qos: 0 });
    console.log("PUB QoS0 enviou:", temp);
  }, 5000);
});
