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
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicos = exports.confirmacao = exports.instalador_perfil = exports.instalador = exports.plano = exports.map = exports.register = exports.login = exports.index = void 0;
const DBA = __importStar(require("./dba"));
function index(req, res) {
}
exports.index = index;
function login(req, res) {
    let username = req.body.cpf;
    let password = req.body.senha;
    res.redirect('/map');
}
exports.login = login;
function register(req, res) {
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let senha = req.body.senha;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    DBA.createClient(nome, cpf, telefone, endereco, "-22.2582414", "-45.7070536");
    res.redirect("/index.html");
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
function instalador_perfil(req, res) {
    res.redirect("/instalador_perfil");
}
exports.instalador_perfil = instalador_perfil;
function confirmacao(req, res) {
    DBA.signContract();
    res.redirect("/index.html");
}
exports.confirmacao = confirmacao;
function servicos(req, res) {
}
exports.servicos = servicos;
