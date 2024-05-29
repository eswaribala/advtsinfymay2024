"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("./index");
describe("API endpoint /colors", () => {
    // GET - List all colors
    it("should return all colors", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app)
            .get("/api/customers/v1.0/2")
            .expect("Content-Type", /json/);
        expect(res.status).toEqual(200);
        //expect(res.body.results).toEqual(["RED", "GREEN", "BLUE"]);
    }));
    /*
        // GET - Invalid path
        it("should return Not Found", async () => {
            const res = await request(app).get("/INVALID_PATH");
            expect(res.status).toEqual(404);
        });
    
        // POST - Add new color
        it("should add new color", async () => {
            const res = await request(app)
                .post("/api/customers/v1.0/2")
                .send({
                    color: "YELLOW",
                })
                .expect("Content-Type", /json/);
            expect(res.status).toEqual(201);
            expect(res.body.results).toContain("YELLOW");
        });
    
        // POST - Bad Request
        it("should return Bad Request", async () => {
            const res = await request(app).post("/colors").type("form").send({
                color: "YELLOW",
            });
            expect(res.status).toEqual(400);
        });
    
     */
});
