// Importa dependências - Express, path, body-parser, parser
import bodyParser from 'body-parser';
import * as parse from './parser';
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

// ============================= LOGIN ============================= //
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.post('/login', (req, res) => {
    parse.login(req, res);
});

// ============================= START ============================= //
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
