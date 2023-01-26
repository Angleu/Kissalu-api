"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = process.env.NODE_ENV === "DEVELOPMENT"
    ? ""
    : `redis://:8fYiS412QAfVUsNchI7fE1tAi6xazOT3@redis-15023.c245.us-east-1-3.ec2.cloud.redislabs.com:15023/`;
const redis = new ioredis_1.default(url);
exports.default = redis;
//# sourceMappingURL=redis.js.map