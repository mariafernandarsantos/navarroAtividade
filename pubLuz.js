import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883", {
  clientId: "sensor_fogo_mosquitto_" + Math.random().toString(16).slice(2),
  clean: true,
  will: {
    topic: "casa/sala/presenca",
    payload: JSON.stringify({ 
        sistema: "off"
    }),
    qos: 2,
    retain: true
  }
});

client.on("connect", () => {
  console.log("Sensor de Presença (Codespace) conectado!");

  let presenca = false;

  setInterval(() => {
    presenca = Math.random() < 0.3; 
    
    const payload = JSON.stringify({ 
        presenca: presenca,
        local: "Sala" 
    });

    client.publish("casa/sala/presenca", payload);

    if(presenca){
        console.log(`Presença detectada: ${presenca}`);
    }
  }, 5000);
});