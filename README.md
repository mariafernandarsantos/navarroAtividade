#	Last Will and Testament (LWT)
O LWT é uma funcionalidade que permite que uma mensagem seja pré programada que será publicada automaticamente pelo broker caso haja uma desconexão inesperada. Um exemplo de aplicação é um Sistema de Alarme, onde caso o fio seja cortado ou tenha o sinal bloqueado ele automaticamente avisa que está ocorrendo uma tentativa de sabotagem.
Porque o LWT é importando no IOT? O LWT fortalece as redes MQTT com maior resiliência, integração perfeita e atualizações confiáveis, tornando-se uma ferramenta poderosa para diversas aplicações.

# Retain Flag
O Retain Flag é um comando que permite que ao ocorrer uma interrupção no sistema as mensagens dele ainda possam ser enviadas as armazenando para que ao religar o sistema as mesmas sejam enviadas evitando a perda de conteúdo. Poderíamos aplicar a Retain Flag em um sistema de iluminação inteligente, supondo que o interruptor envia o estado ON com a Retain Flag ligada e o celular do usuário está desligado. Ao ligar novamente o broker entrega a mensagem salva.
As Retain Flags desempenham um papel crucial na comunicação MQTT, resolvendo o problema da entrega incerta de mensagens e fornecendo acesso imediato ao último estado conhecido de um tópico.
