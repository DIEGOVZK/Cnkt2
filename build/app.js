"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const parse = __importStar(require("./parser"));
const ct = __importStar(require("./coreTools"));
const express_1 = __importDefault(require("express"));
const DBA = __importStar(require("./dba"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
app.post('/', (req, res) => {
    parse.index(req, res);
});
app.get('/login', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'login.html'));
});
app.post('/login', (req, res) => {
    parse.login(req, res);
});
app.get('/register', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'register.html'));
});
app.post('/register', (req, res) => {
    parse.register(req, res);
});
app.get('/map', (req, res) => {
    res.send(ct.getMap(DBA.getProviderInRange2('Usuario')));
});
app.post('/map', (req, res) => {
    parse.map(req, res);
});
app.get('/plano', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'plano.html'));
});
app.post('/plano', (req, res) => {
    parse.plano(req, res);
});
app.get('/instalador', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'instalador.html'));
});
app.post('/instalador', (req, res) => {
    parse.instalador(req, res);
});
app.get('/instalador_perfil', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'instalador_perfil.html'));
});
app.post('/instalador_perfil', (req, res) => {
    parse.instalador_perfil(req, res);
});
app.get('/confirmacao', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'confirmacao.html'));
});
app.post('/confirmacao', (req, res) => {
    parse.confirmacao(req, res);
});
app.get('/servicos', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'servicos.html'));
});
app.post('/servicos', (req, res) => {
    parse.servicos(req, res);
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
