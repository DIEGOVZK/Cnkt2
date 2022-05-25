"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicos = exports.confirmacao = exports.instalador = exports.plano = exports.map = exports.register = exports.login = exports.index = void 0;
function index(req, res) {
}
exports.index = index;
function login(req, res) {
    let username = req.body.cpf;
    let password = req.body.senha;
    res.send(`Username: ${username} Password: ${password}`);
}
exports.login = login;
function register(req, res) {
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let senha = req.body.senha;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    res.send(`CPF: ${cpf} Nome: ${nome} Senha: ${senha} Endereco: ${endereco} Telefone: ${telefone}`);
}
exports.register = register;
function map(req, res) {
    let provID = req.body.id;
    res.send(`ID: ${provID}`);
}
exports.map = map;
function plano(req, res) {
}
exports.plano = plano;
function instalador(req, res) {
}
exports.instalador = instalador;
function confirmacao(req, res) {
}
exports.confirmacao = confirmacao;
function servicos(req, res) {
}
exports.servicos = servicos;
