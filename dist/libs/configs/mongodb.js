"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const log_1 = require("../log");
dotenv_1.default.config();
async function initMongoDB() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URL);
    }
    catch (err) {
        log_1.log.error("An error occured while connecting to Mongo DB server");
        throw err;
    }
}
exports.initMongoDB = initMongoDB;
//# sourceMappingURL=mongodb.js.map