// Função parce do index
export function index(req: any, res: any) {

    // TODO: Implementar handler do index

}

// Função parce do login
export function login(req: any, res: any) {

    // TODO: Implementar o login

    let username = req.body.cpf;
    let password = req.body.senha;

    // * Teste para ver se os dados foram coletados
    res.send(`Username: ${username} Password: ${password}`);

}

// Função parce do register
export function register(req: any, res: any) {

    // TODO: Implementar o register

    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let senha = req.body.senha;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;

    // * Teste para ver se os dados foram coletados
    res.send(`CPF: ${cpf} Nome: ${nome} Senha: ${senha} Endereco: ${endereco} Telefone: ${telefone}`);

}

// Função parce do mapa
export function map(req: any, res: any) {

    // TODO: Implementar o mapa

    let provID = req.body.id;

    // * Teste para ver se os dados foram coletados
    res.send(`ID: ${provID}`);

}

// Função parce do plano
export function plano(req: any, res: any) {

    // TODO: Implementar a listagem dos planos

}

// Função parce do instalador
export function instalador(req: any, res: any) {

    // TODO: Implementar a listagem dos instaladores

}

// Função parce do confirmacao
export function confirmacao(req: any, res: any) {

    // TODO: Implementar a confirmação do pedido

}

// Função parce do servicos
export function servicos(req: any, res: any) {

    // TODO: Implementar a listagem dos serviços

}