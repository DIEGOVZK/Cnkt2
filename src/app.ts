// Importa dependências - Express, path, body-parser, parser
import bodyParser from 'body-parser';
import * as parse from './parser';
import * as ct from './coreTools';
import express from 'express';
import * as DBA from './dba';
import path from 'path';

// Cria o app express
const app = express();

// Configura o app para usar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// ============================= ROOT ============================= //

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/', (req, res) => {
    parse.index(req, res);
});

// ============================= LOGIN ============================= //

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.post('/login', (req, res) => {
    parse.login(req, res);
});

// ============================= REGISTER ============================= //

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

app.post('/register', (req, res) => {
    parse.register(req, res);
});

// ============================= MAPA_PROVEDOR ============================= //

app.get('/map', (req, res) => {
    res.send(ct.getMap(DBA.getProviderInRange2('Usuario')));
});

app.post('/map', (req, res) => {
    parse.map(req, res);
});

// ============================= PLANOS ============================= //

app.get('/plano', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'plano.html'));
});

app.post('/plano', (req, res) => {
    parse.plano(req, res);
});

// ============================= INSTALADOR ============================= //

app.get('/instalador', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'instalador.html'));
});

app.post('/instalador', (req, res) => {
    parse.instalador(req, res);
});

// ============================= CONFIRMAÇÃO ============================= //

app.get('/confirmacao', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'confirmacao.html'));
});

app.post('/confirmacao', (req, res) => {    
    parse.confirmacao(req, res);
});

// ============================= SERVIÇOS ============================= //

app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'servicos.html'));
});

app.post('/servicos', (req, res) => {
    parse.servicos(req, res);
});

// ============================= START ============================= //

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
