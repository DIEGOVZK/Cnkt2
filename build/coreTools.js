"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMap = exports.userRange = void 0;
function userRange(userLOC) {
    let provList = getProviders(userLOC);
    let provInRange = [];
    for (let i = 0; i < provList.length; i++) {
        let distance = Math.sqrt(Math.pow(userLOC.lat - provList[i].lat, 2) + Math.pow(userLOC.long - provList[i].long, 2));
        if (distance <= provList[i].range) {
            provInRange.push(provList[i].id);
        }
    }
    return provInRange;
}
exports.userRange = userRange;
function getMap(provList) {
    var url = '';
    url += '<body style="background-color: black">';
    url += '<img src=';
    url += ('https://www.mapquestapi.com/staticmap/v5/map?key=SUkNr3YGnVi7rNUi7miaWAIw1msaRdpO&size=1400,700@2x&type=dark');
    url += ('&locations=');
    for (let i = 0; i < provList.length; i++) {
        if (i != 0)
            url += '||';
        url += (provList[i].lat + ',' + provList[i].long + '|flag-' + provList[i].nome + '-sm');
    }
    for (let i = 0; i < provList.length; i++)
        url += ('&shape=radius:' + provList[i].range + 'km|' + provList[i].lat + ',' +
            provList[i].long + '|fill:' + provList[i].color + '|border:' + provList[i].color);
    url += ' alt="map" width="100%" />';
    url += '</body>';
    return url;
}
exports.getMap = getMap;
