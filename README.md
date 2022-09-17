# PAY CashBack #

### Sobre o projeto ###

* Aplicação Mobile para pagamento de boletos via escaneamento de código de barras e ganho de cashback.
* Referente ao segundo projeto do primeiro módulo do curso DevInHouse - SENAI - Turma EDP
* Versão 1.0.0

### Como foi feito? ###

* React Native 0.69
* Expo 46
* Json Server 0.17
* Ngrok

### Configuração de ambiente ###

1. Abra um terminal de preferência e faça o clone do código via repositório remoto:

    `git clone https://leocluca@bitbucket.org/leocluca/modulo-1-projeto-2.git`


2. No terminal abra o diretório onde foi clonado o projeto e instale as dependências do projeto: 

    `npm install`

3. No diretório em que se encontra o projeto execute o comando para iniciar o json-server:

    `npm run api`

4. Em uma nova janela de terminal execute o comando para iniciar o Ngrok:

    `npm run ngrok`

5. Copie a url (Ex. `http://6fc3-177-124-98-246.ngrok.io`) gerada no terminal, abra o arquivo `../src/services/api.js` e substitua o endereço da variável `API` pelo nova url e salve o arquivo.

6. Em um novo terminal execute o comando abaixo:

    `expo start`

7. Em um celular deve ser baixado o aplicativo Expo Go na store de seu sistema operacional. Após o app aberto, escolher a opção de escanear QR code e escanear o QR code gerado no terminal pelo comando anterior.

### Desenvolvedor ###

* https://www.linkedin.com/in/leonardo-cirimbelli-de-luca-3b779612b/
* leocluca@gmail.com