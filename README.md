# Cnkt2
Cnkt2 - Onde clientes encontram provedores.

<hr>

### Diego Anestor Coutinho's
<p style="margin:0.5rem; margin-top: -1rem;width: 100%; font-size: 100%" >
  <a href="https://www.researchgate.net/profile/Diego-Coutinho-4">
  <img style="margin:1rem 0.5rem; height: 47%; float: left;" src="https://img.shields.io/badge/ResearchGate-%20-04ccbc?style=for-the-badge&logo=researchgate">
  </a>
  <a href="https://www.linkedin.com/in/diego-anestor-coutinho">
  <img style="margin:1rem 0.5rem; height: 47%;" src="https://img.shields.io/badge/LinkedIn-%20-blue?style=for-the-badge&logo=linkedin">
  </a>
</p>

### Tiago de Morais Pereira's
<p style="margin:0.5rem; margin-top: -1rem;width: 100%; font-size: 100%" >
  <a href="https://github.com/TiagoMPereira">
  <img style="margin:1rem 0.5rem; height: 47%; float: left;" src="https://img.shields.io/badge/GitHub-%20-darkgray?style=for-the-badge&logo=github">
  </a>
  <a href="https://www.linkedin.com/in/tiago-pereira-demorais/">
  <img style="margin:1rem 0.5rem; height: 47%;" src="https://img.shields.io/badge/LinkedIn-%20-blue?style=for-the-badge&logo=linkedin">
  </a>
</p>

<hr>

## Instalação do Connect 2

Você deve ter instalado o `Node >16.15.0` : https://nodejs.org/.   
E também o `Python >3.10.4` ou mais recente: https://www.python.org/.   <br><br>


<p style="text-align: justify; text-justify: inter-word;">

No diretório raiz do projeto, execute o comando `npm install` para instalar todos os pacotes necessários. Para garantir que tudo esteja atualizado com o seu pacote, reconstrua o projeto executando o arquivo `BUILD.bat`. Depois, execute o arquivo `EXECUTE.bat` para iniciar o servidor. O Servidor de testes irá inicializar no endereço http://localhost:3000.

</p>


## Visão geral da estrutura do projeto:
```
Cnkt2
│   EXECUTE.bat 
│   BUILD.bat 
│   package-lock.json
│   tsconfig.json
│   package.json
│   Grapher.py
│   README.md
│   LICENCE
│   
└─── src
│   │   *.ts (fonte) (backend) (APIs)
│
└─── build
│   │   *.js (compilado)
│
└─── public
│   └─── images
│   │
│   └─── javascript
│   │
│   └─── styles
│   │   │   *.css (estilos)
│   │
│   │   *.html (páginas)
│   
└─── utils
    │   database.py (B.D.)

```
<hr>

### Connect 2:

> Connect 2 é uma aplicação WEB que conecta os provedores de internet aos clientes, de forma rápida, intuitiva e dinâmica, e apresenta todos os planos oferecidos, além de juntar os instaladores cadastrados na plataforma, para que o cliente possa ter total controle sobre sua escolha, pois com serviço de internet não se brinca.

### A framework:
> Para construirmos o aplicativo WEB, fizemos uso da framework Express do NODEJS, e todo o back-end do sistema foi escrito em typescript, que é compilado para javascript ao executar a aplicação. Já o front-end foi escrito em HTML e estilizado usando CSS, além de apresentar funcionalidades extras através do  javascript integrado. Ou seja, todas as telas, funcionalidades e API 's foram construídas na framework Express, e trazem todas as funcionalidades server-side necessárias para o funcionamento do aplicativo.  

### As funcionalidades do mapa:
> Na geração do mapa, o sistema busca pela localização do usuário logado, e calcula a distância entre a área de cobertura do provedor de internet, e a posição do cliente, retornando apenas a lista de provedores cuja área de cobertura abrange a localização do cliente.

### As funcionalidades de instalador:
> Para a tela do instalador, o sistema considera tanto a localização do provedor, quanto a do cliente, então o sistema busca pelos instaladores cuja área de deslocamento máximo abrange a localização do cliente, e retorna a lista de todos os trabalhadores cadastrados que atendem a localização do cliente.

### Funcionalidades de login, cadastro e confirmação:
> E para prover uma experiência segura para os clientes, instaladores, e provedores, foram criadas telas de login, cadastro e confirmação, com as funcionalidades de verificar a identidade do usuário, cadastrar novos clientes, e criar relações entre clientes, planos e instaladores. Além disso, todas as telas já estão integradas ao back-end do sistema, que interage com um banco de dados através de uma API personalizada.
