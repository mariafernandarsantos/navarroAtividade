import mqtt from "mqtt";

const options = {
  clientId: "subscriber_01", 
  clean: true 
};

const client = mqtt.connect("mqtt://localhost:1883", options);

client.on("connect", (connack) => {
  console.log(`SUB QoS1: conectado (Sessão recuperada: ${connack.sessionPresent})`);
  
  client.subscribe("aula/status/nivel", { qos: 1 });
});

// Alteração para o LWT
client.on("message", (topic, msg) => {
  if (topic === "aula/qos") {
  console.log("SUB QoS1 recebeu:", msg.toString());
  }

  if (topic === "aula/status/nivel") {
    console.log("STATUS:", msg.toString());
  }
});
