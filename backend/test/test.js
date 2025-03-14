// const chai = require("chai");
// const chaiHttp = require("chai-http"); // ✅ Ensure correct import
// const { expect } = chai;

// const io = require("socket.io-client");

// describe("Basic API Test", function () {
//   this.timeout(10000); // ✅ Increase timeout for async operations

//   it("should return 200 for /metrics", (done) => {
//     chai
//       .request("http://localhost:3000") // ✅ Ensure correct syntax
//       .get("/metrics")
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res).to.have.status(200);
//         done();
//       });
//   });

//   it("should receive real-time updates via WebSocket", (done) => {
//     const socket = io("http://localhost:3000", { transports: ["websocket"] });

//     socket.on("connect", () => {
//       console.log("✅ WebSocket Connected for testing.");
//     });

//     socket.on("metricsUpdate", (data) => {
//       console.log("🔄 Received Real-time Update:", data);
//       expect(data).to.be.an("object");
//       expect(data).to.have.property("status");
//       expect(data).to.have.property("response_time_ms");
//       expect(data).to.have.property("timestamp");

//       socket.disconnect();
//       done();
//     });

//     // ✅ If no update received in 5s, fail the test
//     setTimeout(() => {
//       done(new Error("❌ No real-time update received within 5s"));
//       socket.disconnect();
//     }, 5000);
//   });
// });


const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const io = require("socket.io-client");

chai.use(chaiHttp); // Add this line to use chai-http

describe("Basic API Test", function () {
  this.timeout(10000);

  it("should return 200 for /metrics", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/metrics")
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        done();
      });
  });

  it("should receive real-time updates via WebSocket", (done) => {
    const socket = io("http://localhost:3000", { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("✅ WebSocket Connected for testing.");
    });

    socket.on("metricsUpdate", (data) => {
      console.log("🔄 Received Real-time Update:", data);
      expect(data).to.be.an("object");
      expect(data).to.have.property("status");
      expect(data).to.have.property("response_time_ms");
      expect(data).to.have.property("timestamp");

      socket.disconnect();
      done();
    });

    setTimeout(() => {
      done(new Error("❌ No real-time update received within 5s"));
      socket.disconnect();
    }, 5000);
  });
});