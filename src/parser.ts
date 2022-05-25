

// Função parce do login que coleta os dados
export function login(req: any, res: any) {

    // TODO: Implementar o login

    let username = req.body.cpf;
    let password = req.body.senha;

    res.send(`Username: ${username} Password: ${password}`);

}
