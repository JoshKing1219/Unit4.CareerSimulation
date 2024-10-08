const supertest = require("supertest");
const server = require("../server.js");
const prisma = require("../db/index");
const bcrypt = require("bcrypt");

describe("authorization route testing", () => {
  let token;
  describe("/api/auth", () => {
    describe("POST /register", () => {
      beforeEach(() => {
        prisma.users.create = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      test("returns a 201 status if successful", async () => {
        const res = await supertest(server)
          .post("/api/auth/register")
          .send({ username: "tester", password: "secretPass" });

        expect(res.status).toBe(201);
      });

      test("returns a token ", async () => {
        const res = await supertest(server)
          .post("/api/auth/register")
          .send({ username: "tester", password: "secretPass" });
        expect(res.body.token).toBeTruthy();
      });
    });

    describe("POST /login", () => {
      beforeEach(() => {
        prisma.users.create = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      test("returns a 200 when successful", async () => {
        prisma.users.findUnique = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });

        bcrypt.compare = jest.fn().mockResolvedValue(true);

        const res = await supertest(server)
          .post("/api/auth/login")
          .send({ username: "tester", password: "secretPass" });

        expect(res.status).toBe(200);
      });

      test("returns a token if successful", async () => {
        prisma.users.findUnique = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });

        bcrypt.compare = jest.fn().mockResolvedValue(true);

        const res = await supertest(server)
          .post("/api/auth/login")
          .send({ username: "tester", password: "secretPass" });

        expect(res.body.token).toBeTruthy();
      });

      test("returns a 401 error if not successful", async () => {
        prisma.users.findUnique = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });

        bcrypt.compare = jest.fn().mockResolvedValue(false);

        const res = await supertest(server)
          .post("/api/auth/login")
          .send({ username: "tester", password: "secretPass" });

        expect(res.status).toBe(401);
      });
    });

    describe("GET /me", () => {
      beforeEach(async () => {
        prisma.users.create = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });

        bcrypt.compare = jest.fn().mockResolvedValue(true);

        const res = await supertest(server).post("/api/auth/login").send({
          username: "tester",
          password: "secretPass",
        });

        token = res.body.token;
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      test("returns a 200 status when successful", async () => {
        prisma.users.findUnique = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });

        const res = await supertest(server)
          .get("/api/auth/me")
          .set("Authorization", `${token}`);

        expect(res.status).toBe(200);
      });

      test("returns a user object when successful", async () => {
        prisma.users.findUnique = jest.fn().mockResolvedValue({
          id: 42,
          username: "tester",
          password: "secretPass",
        });

        const res = await supertest(server)
          .get("/api/auth/me")
          .set("Authorization", `${token}`);

        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("username");
        expect(res.body).toHaveProperty("password");
      });
    });
  });
});
