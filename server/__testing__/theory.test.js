const supertest = require("supertest");
const server = require("../server.js");
const prisma = require("../db/index");
const bcrypt = require("bcrypt");

describe("theory route testing", () => {
  describe("/api/theories", () => {
    describe("GET /theories", () => {
      test("returns an object containing all theories", async () => {
        const res = await supertest(server).get("/api/theories");

        expect(res.body).toHaveLength(25);
      });
    });

    describe("GET /api/theories/:id", () => {
      test("returns an object containing a single theory", async () => {
        const dbTheories = await prisma.theory.findMany();

        const res = await supertest(server).get(
          `/api/theories/${dbTheories[0].id}`
        );

        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("description");
      });
    });
  });
});
