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
        url += (provList[i].lat + ',' + provList[i].long + '|flag-' + provList[i].nome + '-sm');
    }

    // Adiciona os circulos de cobertura
    for (let i = 0; i < provList.length; i++)
        url += ('&shape=radius:' + provList[i].range + 'km|' + provList[i].lat + ',' +
            provList[i].long + '|fill:' + provList[i].color + '|border:' + provList[i].color);


    url += ' alt="map" width="100%" />';
    url += '</body>';


    return url;
}
