import mqtt from "mqtt";

const options = {
  host: "eafaf16c3a9f48f7aa7a9c83646fe667.s1.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "teste",
  password: "",
  rejectUnauthorized: false
};

const client = mqtt.connect(options);

client.on("connect", () => {
  console.log("Sistema de Ventilador online");

  setInterval(() => {
    const temp = Math.floor(Math.random() * 40);
    const msg = JSON.stringify({ temp, ventilador: temp > 25 ? 'Ligado' : 'Desligado' });

    client.publish("casa/sala/ventilador", msg, { qos: 2, retain: true });
    if(temp > 25){
        console.log('Ventilador Ligado');
    }else{
        console.log('Ventilador Desligado');
    }
  }, 3000);
});