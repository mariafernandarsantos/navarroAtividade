import mqtt from "mqtt";

// Adicionamos LWT
const client = mqtt.connect("mqtt://localhost:1883", {
  clientId: "sensor_nivel_01",
  will: {
    topic: "aula/status/nivel",
    payload: "OFFLINE",
    qos: 1,
    retain: true
  }
});

client.on("connect", () => {
  console.log("PUB QoS1 - Sensor Nível do Reservatório: conectado");
  let arr_nivel = ['Alto', 'Baixo', 'Médio'];

  const t = setInterval(() => {
    let index_nivel = Math.floor(Math.random() * arr_nivel.length);
    let nivel = arr_nivel[index_nivel];

    // Uso da Retain Flag
    client.publish("aula/qos", `msg ${nivel} (QoS1)`, { qos: 1, retain: true });
    console.log("PUB QoS1 enviou:", nivel);
    
  }, 30000);
});
