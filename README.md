# Ecoleta

O projeto Ecoleta é uma Aplicação multiplataforma (Web, Android e IOS) para encontrar através de geolocalização pontos de coletas de resíduos específicos, assim o usuário consegui encontrar os pontos próximos de sua localização.

O projeto foi dividido em três pastas:
- Server: onde esta toda a configuração do servidor tanto para web como para mobile
- Web: esta a parte de cadastro dos pontos de coleta
- Mobile: você consegui visualizar todos os pontos de coleta

Inicializando o projeto:
- Faça o clone do repositório 
- Abra as três pasta no terminal e utilize o comando npm i em cada uma delas para baixar as dependencias
- Na pasta SERVER será preciso criar o naco de dados, 1º comando npm knex:migrate (criar as tabelas), 2º npm knex:seed (inserir  os dados na tabela items).
- Entre na pasta SERVER e com o comando npm run dev, isso para com que o back-end da aplicação comece a funcionar
- Para iniciar o MOBILE: npm start - OBS no arquivo api.ts - é necessario trocar o localhost pelo IP da sua maquina
- Para iniciar o WEB : npm start  - OBS no arquivo api.ts - é necessario trocar o localhost pelo IP da sua maquina

