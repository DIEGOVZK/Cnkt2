"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRange = void 0;
function userRange(userLOC) {
    let provList = getProviders(userLOC);
    let provInRange = [];
    for (let i = 0; i < provList.length; i++) {
        let distance = Math.sqrt(Math.pow(userLOC.lat - provList[i].lat, 2) + Math.pow(userLOC.lng - provList[i].lng, 2));
        if (distance <= provList[i].range) {
            provInRange.push(provList[i].id);
        }
    }
    return provInRange;
}
exports.userRange = userRange;
