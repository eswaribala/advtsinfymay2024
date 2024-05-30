import request from "supertest";
import {app} from "./index";

describe("fetch customer by id", () => {
    // GET - if id is valid fetch customer otherwise null
    it("should return status 200", async () => {
        const res = await request(app)
            .get("/api/customers/v1.0/2")
            .expect("Content-Type", /json/);
        expect(res.status).toEqual(200);

    });
    it("should not return null value", async () => {
        const res = await request(app)
            .get("/api/customers/v1.0/2")
            .expect("Content-Type", /json/);

        expect(res.body).not.toBeNull()
    });
    it("should have customer id", async () => {
        const res = await request(app)
            .get("/api/customers/v1.0/2")
            .expect("Content-Type", /json/);

        expect(res.body).toHaveProperty('customerId')
    });


    // GET - Invalid path
    it("should return Not Found", async () => {
        const res = await request(app).get("/INVALID_PATH");
        expect(res.status).toEqual(404);
    });

    // POST - Add new customer
    it("should add new customer", async () => {
        const res = await request(app)
            .post("/api/customers/v1.0")
            .send({
                "firstName":"Sharmila",
                "lastName":"Udhay",
                "middleName":"",
                "contactNo":9952032854,
                "email":"sharmila@gmail.com",
                "password":"test@123"

            })
            .expect("Content-Type", /json/);
        expect(res.status).toEqual(201);
        expect(res.body.data).toHaveProperty('customerId')
    });

    // PUT - update customer
    it("should return updated customer", async () => {
        const res = await request(app).put("/api/customers/v1.0")
            .send({

                "mobileNo":9952032855,
                "email":"sharmila@gmail.com",
                "customerId":8

            })
        expect(res.status).toEqual(200);
    });


});