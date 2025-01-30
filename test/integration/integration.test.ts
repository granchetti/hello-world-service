import { Server } from "http";
import request from "supertest";
import app from "../../src/app";

let server: Server;

beforeAll(() => {
  server = app.listen(4000, () => {
    console.log("Test server is running on port 4000");
  });
});

afterAll(() => {
  server.close();
});

describe("Integration tests", () => {
  it("GET / - should return Hello People!", async () => {
    const response = await request("http://localhost:4000").get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello People!");
  });
});
