// Importa dependências - Express, path, body-parser, parser
import bodyParser from 'body-parser';
import * as parse from './parser';
import * as ct from './coreTools';
import express from 'express';
import path from 'path';

// Cria o app express
const app = express();

// Configura o app para usar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));

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

// Cria uma lista que armazena nome, lat, lng, color de um provedor
let provList: { name: String; lat: number; lng: number; range: number; color: String; }[] = [];


// Popula a lista de providores com dados de exemplo
provList.push({
    name: 'VIVOX',
    lat: -22.256623,
    lng: -45.696074,
    range: 1,
    color: '81211355'
});

provList.push({
    name: 'VOUE',
    lat: -22.2482414,
    lng: -45.7068536,
    range: 1,
    color: '812DD355'
});


app.get('/map', (req, res) => {
    res.send(ct.getMap(provList));
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
