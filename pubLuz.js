import mqtt from "mqtt";

// const brokerUrl = "mqtt://friendly-zebra-6xjjx6j96vqh5gvx-1883.app.github.dev/";
// const client = mqtt.connect(brokerUrl);
const client = mqtt.connect("mqtt://localhost:1883");

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