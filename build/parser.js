"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
function login(req, res) {
    let username = req.body.cpf;
    let password = req.body.senha;
    res.send(`Username: ${username} Password: ${password}`);
}
exports.login = login;
