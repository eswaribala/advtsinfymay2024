import request from "supertest";
import {app} from "./index";

describe("API endpoint /colors", () => {
    // GET - List all colors
    it("should return all colors", async () => {
        const res = await request(app)
            .get("/api/customers/v1.0/2")
            .expect("Content-Type", /json/);
        expect(res.status).toEqual(200);
        //expect(res.body.results).toEqual(["RED", "GREEN", "BLUE"]);
    });
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