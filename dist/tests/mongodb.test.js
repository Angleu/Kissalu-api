"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
describe("MongoDB Tests", () => {
    beforeAll(async () => {
        return await mongoose_1.default.connect(process.env.MONGO_URL);
    });
    afterAll(() => {
        mongoose_1.default.disconnect();
    });
    test("Test mongo connection", () => {
        expect(mongoose_1.default.STATES).toBeTruthy();
    });
});
//# sourceMappingURL=mongodb.test.js.map