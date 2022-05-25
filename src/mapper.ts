export function userRange(userLOC: any) {

    // Busca a lista de provedoras
    let provList = getProviders(userLOC);

    // Cria um array que irá armazenar os IDs das provedoras que estão dentro do raio
    let provInRange = [];

    // Percorre a lista de provedoras
    for (let i = 0; i < provList.length; i++) {

        // Calcula matematicamente a distância entre o ponto e a provedora
        let distance = Math.sqrt(Math.pow(userLOC.lat - provList[i].lat, 2) + Math.pow(userLOC.lng - provList[i].lng, 2));

        // Se a distância for menor que o raio, adiciona o ID da provedora no array
        if (distance <= provList[i].range) {
            provInRange.push(provList[i].id);
        }
    }

    // Retorna o array com os IDs das provedoras
    return provInRange;
}
