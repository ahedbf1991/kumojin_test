const request = require("supertest");
const app = require("../server");

describe("Integration Tests for Events API", () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3002, () => {
      console.log("Server is running on port 3002");
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      console.log("Server closed");
      done();
    });
  });

  it("should return a list of events", async () => {
    const response = await request(app).get("/events");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it("should create a new event", async () => {
    const newEvent = {
      name: "Test Event",
      description: "A test event",
      startDate: "2022-01-01T12:00:00Z",
      endDate: "2022-01-01T14:00:00Z",
      timezone: "UTC",
    };

    const response = await request(app).post("/events").send(newEvent);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "Test Event");
  });
});
