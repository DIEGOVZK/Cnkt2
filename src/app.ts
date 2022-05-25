// Importa dependências - Express, path, body-parser
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const app = express();

// Na rota raiz, retorna index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Na rota /login, retorna login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

// Adiciona o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
