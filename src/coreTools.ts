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


// Função para geração da URL do mapa
export function getMap(provList: any): String {

    var url: String = '';

    url += '<body style="background-color: black">';
    url += '<img src='

    // Cria url base
    url += ('https://www.mapquestapi.com/staticmap/v5/map?key=SUkNr3YGnVi7rNUi7miaWAIw1msaRdpO&size=1400,700@2x&type=dark');

    // Adiciona os pontos de localização
    url += ('&locations=');
    for (let i = 0; i < provList.length; i++) {

        if (i != 0) url += '||';
        url += (provList[i].lat + ',' + provList[i].lng + '|flag-' + provList[i].name + '-sm');
    }

    // Adiciona os circulos de cobertura
    for (let i = 0; i < provList.length; i++)
        url += ('&shape=radius:' + provList[i].range + 'km|' + provList[i].lat + ',' +
            provList[i].lng + '|fill:' + provList[i].color + '|border:' + provList[i].color);


    url += ' alt="map" width="100%" />';
    url += '</body>';


    return url;
}
