import { Server } from "http";
import request from "supertest";
import app from "../../src/app.ts";

let server: Server;

beforeAll(() => {
  server = app.listen(3000, () => {
    console.log("Test server is running on port 3000");
  });
});

afterAll(() => {
  server.close();
});

describe("Integration tests", () => {
  it("GET / - should return Hello World!", async () => {
    const response = await request("http://localhost:3000").get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
