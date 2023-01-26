"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareEncryptedData = exports.encryptData = void 0;
const crypto_1 = require("crypto");
function encryptData(data) {
    const salt = (0, crypto_1.randomBytes)(16).toString("hex");
    const hashedData = (0, crypto_1.scryptSync)(data, salt, 64).toString("hex");
    return `${salt}:${hashedData}`;
}
exports.encryptData = encryptData;
function compareEncryptedData(data1, data2) {
    const [salt, key] = data1.split(":");
    const hashedBuffer = (0, crypto_1.scryptSync)(data2, salt, 64);
    const keyBuffer = Buffer.from(key, "hex");
    const match = (0, crypto_1.timingSafeEqual)(hashedBuffer, keyBuffer);
    return match;
}
exports.compareEncryptedData = compareEncryptedData;
//# sourceMappingURL=encryption.js.map