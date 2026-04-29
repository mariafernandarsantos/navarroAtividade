import mqtt from "mqtt";

const client = mqtt.connect({
  host: "eafaf16c3a9f48f7aa7a9c83646fe667.s1.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "teste",
  password: "Teste123",
  rejectUnauthorized: false
});

client.on("connect", () => {
  console.log("Portão da Garagem: Online");
  client.subscribe("casa/garagem/portao/comando");
});

client.on("message", (topic, message) => {
  if (topic === "casa/garagem/portao/comando") {

    const comando = message.toString();
    console.log(`Recebido: ${comando}`);

    if (comando === "ABRIR") {

      console.log("Abrindo portão");
      
      const status = JSON.stringify({ status: "Aberto", timestamp: new Date() });
      client.publish("casa/garagem/portao/status", status, { qos: 2, retain: false });

    }else if (comando === "FECHAR") {

      console.log("Fechando portão");
      const status = JSON.stringify({ status: "Fechado", timestamp: new Date() });
      client.publish("casa/garagem/portao/status", status, { qos: 2, retain: false });

    }
  }
});