"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitMorada = void 0;
function splitMorada(morada) {
    const [provincia, distrito, bairro] = morada.split(", ");
    return { provincia, distrito, bairro };
}
exports.splitMorada = splitMorada;
//# sourceMappingURL=splitMorada.js.map