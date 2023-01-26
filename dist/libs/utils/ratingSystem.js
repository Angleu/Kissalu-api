"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRate = void 0;
function getRate(atividades) {
    const sum = atividades.atividades
        .map((m) => m.avaliacao)
        .reduce((a, b) => a + b, 0);
    return atividades.atividades.length > 0
        ? sum / atividades.atividades.length
        : undefined;
}
exports.getRate = getRate;
//# sourceMappingURL=ratingSystem.js.map