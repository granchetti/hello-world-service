import app from "../../src/app";
import request from "supertest";

describe("Unit test for Express route", () => {
  it("GET / should return a response", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(typeof response.text).toBe("string");
  });
});
