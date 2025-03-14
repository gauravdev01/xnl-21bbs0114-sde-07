// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');
// const express = require('express');
// const winston = require('winston');
// const path = require('path');
// const client = require('prom-client');

// // ✅ Load proto file manually
// const PROTO_PATH = path.join(__dirname, 'proto/service.proto');
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
// const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// // ✅ Logger Setup (Winston)
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs/server.log' })
//   ],
// });

// // ✅ Prometheus Metrics Setup
// const requestCounter = new client.Counter({
//   name: 'grpc_requests_total',
//   help: 'Total number of RPC requests',
// });

// const responseTimeHistogram = new client.Histogram({
//   name: 'grpc_response_time_ms',
//   help: 'Response time in milliseconds',
//   buckets: [10, 50, 100, 500, 1000],
// });

// // ✅ gRPC Service Implementation
// function getMetrics(call, callback) {
//   requestCounter.inc();
//   const startTime = Date.now();
  
//   setTimeout(() => {
//     const responseTime = Date.now() - startTime;
//     responseTimeHistogram.observe(responseTime);

//     logger.info(`Processed request ${call.request.request_id}, Response time: ${responseTime}ms`);
    
//     callback(null, { 
//       status: 'OK', 
//       response_time_ms: responseTime, 
//       timestamp: new Date().toISOString()
//     });
//   }, Math.random() * 100);
// }

// // ✅ Create gRPC Server
// const server = new grpc.Server();
// server.addService(monitoringProto.MonitoringService.service, { getMetrics });

// // ✅ Start the gRPC Server
// server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
//   if (err) {
//     console.error("❌ Error starting server:", err);
//     return;
//   }
//   console.log(`✅ gRPC Server running on port ${port}`);
//   server.start();
// });
// setTimeout(() => {
//   const testRequest = { request_id: "999" };

//   getMetrics({ request: testRequest }, (err, response) => {
//     if (err) {
//       logger.error(`Test request failed: ${err.message}`);
//     } else {
//       logger.info(`Test request processed: ${JSON.stringify(response)}`);
//     }
//   });
// }, 5000);


// // ✅ Express server for Prometheus metrics
// const app = express();
// app.get('/metrics', async (req, res) => {
//   res.set('Content-Type', client.register.contentType);
//   res.end(await client.register.metrics());
// });

// app.listen(3000, () => {
//   console.log('✅ Metrics server running on http://localhost:3000/metrics');
// });



// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');
// const express = require('express');
// const cors = require('cors'); // ✅ Import CORS middleware
// const winston = require('winston');
// const path = require('path');
// const client = require('prom-client');

// // ✅ Load proto file manually
// const PROTO_PATH = path.join(__dirname, 'proto/service.proto');
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
// const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// // ✅ Logger Setup (Winston)
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs/server.log' })
//   ],
// });

// // ✅ Prometheus Metrics Setup
// const requestCounter = new client.Counter({
//   name: 'grpc_requests_total',
//   help: 'Total number of RPC requests',
// });

// const responseTimeHistogram = new client.Histogram({
//   name: 'grpc_response_time_ms',
//   help: 'Response time in milliseconds',
//   buckets: [10, 50, 100, 500, 1000],
// });

// // ✅ gRPC Service Implementation
// function getMetrics(call, callback) {
//   requestCounter.inc();
//   const startTime = Date.now();
  
//   setTimeout(() => {
//     const responseTime = Date.now() - startTime;
//     responseTimeHistogram.observe(responseTime);

//     logger.info(`Processed request ${call.request.request_id}, Response time: ${responseTime}ms`);
    
//     callback(null, { 
//       status: 'OK', 
//       response_time_ms: responseTime, 
//       timestamp: new Date().toISOString()
//     });
//   }, Math.random() * 100);
// }

// // ✅ Create gRPC Server
// const server = new grpc.Server();
// server.addService(monitoringProto.MonitoringService.service, { getMetrics });

// // ✅ Start the gRPC Server
// server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
//   if (err) {
//     console.error("❌ Error starting server:", err);
//     return;
//   }
//   console.log(`✅ gRPC Server running on port ${port}`);
//   server.start();
// });

// // ✅ Express server for Prometheus metrics
// const app = express();

// // ✅ Enable CORS Middleware to Allow Requests from React Frontend
// app.use(cors()); // ✅ Allow all frontend requests

// // ✅ Prometheus Metrics Endpoint
// app.get('/metrics', async (req, res) => {
//   res.set('Content-Type', client.register.contentType);
//   res.set('Access-Control-Allow-Origin', '*'); // ✅ Explicitly allow frontend to access
//   res.end(await client.register.metrics());
// });

// // ✅ Start Express Server for Metrics
// app.listen(3000, () => {
//   console.log('✅ Metrics server running on http://localhost:3000/metrics');
// });



// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');
// const express = require('express');
// const cors = require('cors');  // ✅ Enable CORS
// const winston = require('winston');
// const path = require('path');
// const client = require('prom-client');

// // ✅ Load proto file
// const PROTO_PATH = path.join(__dirname, 'proto/service.proto');
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
// const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// // ✅ Logger Setup (Winston)
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs/server.log' })
//   ],
// });

// // ✅ Prometheus Metrics Setup
// const requestCounter = new client.Counter({
//   name: 'grpc_requests_total',
//   help: 'Total number of RPC requests',
// });

// const responseTimeHistogram = new client.Histogram({
//   name: 'grpc_response_time_ms',
//   help: 'Response time in milliseconds',
//   buckets: [10, 50, 100, 500, 1000],
// });

// // ✅ gRPC Service Implementation
// function getMetrics(call, callback) {
//   requestCounter.inc(); // ⬆ Increase request count
//   const startTime = Date.now();

//   setTimeout(() => {
//     const responseTime = Date.now() - startTime;
//     responseTimeHistogram.observe(responseTime); // ⬆ Log response time

//     logger.info(`Processed request ${call.request.request_id}, Response time: ${responseTime}ms`);
    
//     callback(null, { 
//       status: 'OK', 
//       response_time_ms: responseTime, 
//       timestamp: new Date().toISOString()
//     });
//   }, Math.random() * 100); // Simulate random response delay
// }

// // ✅ Create gRPC Server
// const server = new grpc.Server();
// server.addService(monitoringProto.MonitoringService.service, { getMetrics });

// // ✅ Start the gRPC Server
// server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
//   if (err) {
//     console.error("❌ Error starting server:", err);
//     return;
//   }
//   console.log(`✅ gRPC Server running on port ${port}`);
//   server.start();
// });

// // ✅ Express server for Prometheus metrics
// const app = express();
// app.use(cors()); // ✅ Enable CORS for frontend access

// app.get('/metrics', async (req, res) => {
//   res.set('Content-Type', client.register.contentType);
//   res.end(await client.register.metrics());
// });

// app.listen(3000, () => {
//   console.log('✅ Metrics server running on http://localhost:3000/metrics');
// });

// // ✅ Simulate Requests Automatically
// setInterval(() => {
//   const testRequest = { request_id: Math.floor(Math.random() * 1000).toString() };

//   getMetrics({ request: testRequest }, (err, response) => {
//     if (err) {
//       logger.error(`Test request failed: ${err.message}`);
//     } else {
//       logger.info(`✅ Test Request Processed: ${JSON.stringify(response)}`);
//     }
//   });
// }, 5000); // ⏳ Send a request every 5 seconds

// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");
// const express = require("express");
// const cors = require("cors");
// const winston = require("winston");
// const path = require("path");
// const client = require("prom-client");
// const { Server } = require("socket.io");
// const http = require("http");

// // ✅ Load the proto file
// const PROTO_PATH = path.join(__dirname, "proto/service.proto");
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
// const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// // ✅ Logger Setup
// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [new winston.transports.Console(), new winston.transports.File({ filename: "logs/server.log" })],
// });

// // ✅ Prometheus Metrics Setup
// const requestCounter = new client.Counter({
//   name: "grpc_requests_total",
//   help: "Total number of RPC requests",
// });

// const responseTimeHistogram = new client.Histogram({
//   name: "grpc_response_time_ms",
//   help: "Response time in milliseconds",
//   buckets: [10, 50, 100, 500, 1000],
// });

// // ✅ gRPC Service Implementation
// function getMetrics(call, callback) {
//   requestCounter.inc(); // Increase request count
//   const startTime = Date.now();

//   setTimeout(() => {
//     const responseTime = Date.now() - startTime;
//     responseTimeHistogram.observe(responseTime); // Log response time

//     const response = {
//       status: "OK",
//       response_time_ms: responseTime,
//       timestamp: new Date().toISOString(),
//     };

//     logger.info(`Processed request ${call.request.request_id}, Response time: ${responseTime}ms`);

//     // 🔥 Emit data to WebSocket clients
//     io.emit("metricsUpdate", response);

//     callback(null, response);
//   }, Math.random() * 100); // Simulate random response delay
// }

// // ✅ Create gRPC Server
// const grpcServer = new grpc.Server();
// grpcServer.addService(monitoringProto.MonitoringService.service, { getMetrics });

// // ✅ Start gRPC Server
// grpcServer.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
//   if (err) {
//     console.error("❌ Error starting gRPC server:", err);
//     return;
//   }
//   console.log(`✅ gRPC Server running on port ${port}`);
//   grpcServer.start();
// });

// // ✅ Express server setup
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });

// app.use(cors()); // Enable CORS for frontend access

// // ✅ Metrics Endpoint for Prometheus
// app.get("/metrics", async (req, res) => {
//   res.set("Content-Type", client.register.contentType);
//   res.end(await client.register.metrics());
// });

// // ✅ WebSocket Connection
// io.on("connection", (socket) => {
//   console.log("📡 New client connected to WebSocket!");

//   socket.on("disconnect", () => {
//     console.log("⚡ Client disconnected");
//   });
// });

// // ✅ Start Express Server
// server.listen(3000, () => {
//   console.log("✅ Metrics & WebSocket server running on http://localhost:3000");
// });

// // ✅ Simulate Requests Automatically
// setInterval(() => {
//   const testRequest = { request_id: Math.floor(Math.random() * 1000).toString() };

//   getMetrics({ request: testRequest }, (err, response) => {
//     if (err) {
//       logger.error(`Test request failed: ${err.message}`);
//     } else {
//       logger.info(`✅ Test Request Processed: ${JSON.stringify(response)}`);
//     }
//   });
// }, 5000); // Send request every 5 seconds



// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");
// const express = require("express");
// const cors = require("cors"); // ✅ Enable CORS
// const winston = require("winston");
// const path = require("path");
// const client = require("prom-client");
// const http = require("http"); // ✅ HTTP Server for WebSockets
// const { Server } = require("socket.io"); // ✅ WebSockets

// // ✅ Load gRPC Service
// const PROTO_PATH = path.join(__dirname, "proto/service.proto");
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
// const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// // ✅ Logger Setup (Winston)
// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "logs/server.log" }),
//   ],
// });

// // ✅ Prometheus Metrics Setup
// const requestCounter = new client.Counter({
//   name: "grpc_requests_total",
//   help: "Total number of RPC requests",
// });

// const responseTimeHistogram = new client.Histogram({
//   name: "grpc_response_time_ms",
//   help: "Response time in milliseconds",
//   buckets: [10, 50, 100, 500, 1000],
// });

// // ✅ gRPC Service Implementation
// function getMetrics(call, callback) {
//   requestCounter.inc(); // ⬆ Increase request count
//   const startTime = Date.now();

//   setTimeout(() => {
//     const responseTime = Date.now() - startTime;
//     responseTimeHistogram.observe(responseTime); // ⬆ Log response time

//     logger.info(
//       `Processed request ${call.request.request_id}, Response time: ${responseTime}ms`
//     );

//     callback(null, {
//       status: "OK",
//       response_time_ms: responseTime,
//       timestamp: new Date().toISOString(),
//     });

//     // ✅ Send updates via WebSocket
//     io.emit("metricsUpdate", {
//       status: "OK",
//       response_time_ms: responseTime,
//       timestamp: new Date().toISOString(),
//     });
//   }, Math.random() * 100); // Simulate random response delay
// }

// // ✅ Create gRPC Server
// const grpcServer = new grpc.Server();
// grpcServer.addService(monitoringProto.MonitoringService.service, { getMetrics });

// // ✅ Start the gRPC Server
// grpcServer.bindAsync(
//   "0.0.0.0:50051",
//   grpc.ServerCredentials.createInsecure(),
//   (err, port) => {
//     if (err) {
//       console.error("❌ Error starting gRPC server:", err);
//       return;
//     }
//     console.log(`✅ gRPC Server running on port ${port}`);
//     grpcServer.start();
//   }
// );

// // ✅ Express Server Setup
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });

// app.use(cors()); // ✅ Enable CORS for frontend access

// // ✅ Root Route to Prevent "Cannot GET /"
// app.get("/", (req, res) => {
//   res.send("🚀 Metrics & WebSocket Server is Running!");
// });

// // ✅ Metrics Endpoint for Prometheus
// app.get("/metrics", async (req, res) => {
//   res.set("Content-Type", client.register.contentType);
//   res.end(await client.register.metrics());
// });

// // ✅ WebSocket Connection
// io.on("connection", (socket) => {
//   console.log("📡 New client connected to WebSocket!");

//   socket.on("disconnect", () => {
//     console.log("⚡ Client disconnected");
//   });
// });

// // ✅ Start Express & WebSocket Server
// server.listen(3000, () => {
//   console.log("✅ Metrics & WebSocket server running on http://localhost:3000");
// });

// // ✅ Simulate Requests Automatically
// setInterval(() => {
//   const testRequest = { request_id: Math.floor(Math.random() * 1000).toString() };

//   getMetrics({ request: testRequest }, (err, response) => {
//     if (err) {
//       logger.error(`Test request failed: ${err.message}`);
//     } else {
//       logger.info(`✅ Test Request Processed: ${JSON.stringify(response)}`);
//     }
//   });
// }, 5000); // ⏳ Send a request every 5 seconds


// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");
// const express = require("express");
// const cors = require("cors");
// const winston = require("winston");
// const path = require("path");
// const client = require("prom-client");
// const http = require("http"); 
// const { Server } = require("socket.io");

// // ✅ Load gRPC Service
// const PROTO_PATH = path.join(__dirname, "proto/service.proto");
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
// const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// // ✅ Logger Setup (Winston)
// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "logs/server.log" }),
//   ],
// });

// // ✅ Prometheus Metrics Setup
// const requestCounter = new client.Counter({
//   name: "grpc_requests_total",
//   help: "Total number of RPC requests",
// });

// const responseTimeHistogram = new client.Histogram({
//   name: "grpc_response_time_ms",
//   help: "Response time in milliseconds",
//   buckets: [10, 50, 100, 500, 1000],
// });

// // ✅ Express Server Setup
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: "*" },
//   pingInterval: 25000,  // ✅ Keep WebSockets alive
//   pingTimeout: 5000,
// });

// app.use(cors());
// app.use(express.json());  // ✅ Ensure JSON parsing

// // ✅ Root Route
// app.get("/", (req, res) => {
//   res.send("🚀 Metrics & WebSocket Server is Running!");
// });

// // ✅ Metrics Endpoint for Prometheus
// app.get("/metrics", async (req, res) => {
//   res.set("Content-Type", client.register.contentType);
//   res.end(await client.register.metrics());
// });

// // ✅ WebSocket Connection
// io.on("connection", (socket) => {
//   console.log("📡 New client connected to WebSocket!");

//   socket.on("disconnect", () => {
//     console.log("⚡ Client disconnected");
//   });
// });

// // ✅ gRPC Service Implementation
// function getMetrics(call, callback) {
//   requestCounter.inc();
//   const startTime = Date.now();

//   setTimeout(() => {
//     const responseTime = Date.now() - startTime;
//     responseTimeHistogram.observe(responseTime);

//     const response = {
//       status: "OK",
//       response_time_ms: responseTime,
//       timestamp: new Date().toISOString(),
//     };

//     logger.info(
//       `Processed request ${call.request.request_id}, Response time: ${responseTime}ms`
//     );

//     callback(null, response);

//     // ✅ Emit real-time update via WebSocket
//     io.emit("metricsUpdate", response);
//     console.log("📡 Sent real-time update:", response);
//   }, Math.random() * 100);
// }

// // ✅ Create gRPC Server
// const grpcServer = new grpc.Server();
// grpcServer.addService(monitoringProto.MonitoringService.service, { getMetrics });

// grpcServer.bindAsync(
//   "0.0.0.0:50051",
//   grpc.ServerCredentials.createInsecure(),
//   (err, port) => {
//     if (err) {
//       console.error("❌ Error starting gRPC server:", err);
//       return;
//     }
//     console.log(`✅ gRPC Server running on port ${port}`);
//     grpcServer.start();
//   }
// );

// // ✅ Start Express & WebSocket Server
// server.listen(3000, () => {
//   console.log("✅ Metrics & WebSocket server running on http://localhost:3000");
// });

// // ✅ Simulate Requests Automatically
// setInterval(() => {
//   const testRequest = { request_id: Math.floor(Math.random() * 1000).toString() };

//   getMetrics({ request: testRequest }, (err, response) => {
//     if (err) {
//       logger.error(`Test request failed: ${err.message}`);
//     } else {
//       logger.info(`✅ Test Request Processed: ${JSON.stringify(response)}`);
//     }
//   });
// }, 5000);


const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");
const cors = require("cors");
const winston = require("winston");
const path = require("path");
const client = require("prom-client");
const http = require("http");
const { Server } = require("socket.io");

// ✅ Load gRPC Service
const PROTO_PATH = path.join(__dirname, "proto/service.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true });
const monitoringProto = grpc.loadPackageDefinition(packageDefinition).monitoring;

// ✅ Logger Setup (Improved for Structured Logging)
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/server.log" }),
  ],
});

// ✅ Prometheus Metrics Setup
const requestCounter = new client.Counter({
  name: "grpc_requests_total",
  help: "Total number of RPC requests",
});

const successCounter = new client.Counter({
  name: "grpc_requests_success",
  help: "Total number of successful RPC requests",
});

const errorCounter = new client.Counter({
  name: "grpc_requests_errors",
  help: "Total number of failed RPC requests",
});

const responseTimeHistogram = new client.Histogram({
  name: "grpc_response_time_ms",
  help: "Response time in milliseconds",
  buckets: [10, 50, 100, 500, 1000, 2000], // Increased bucket range
});

// ✅ Express & WebSocket Server Setup
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🚀 Metrics & WebSocket Server is Running!");
});

// ✅ Prometheus Metrics Endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// ✅ WebSocket Connection (Real-Time Updates)
io.on("connection", (socket) => {
  logger.info("📡 New client connected to WebSocket!");
  socket.on("disconnect", () => logger.info("⚡ Client disconnected"));
});

// ✅ gRPC Service Implementation
function getMetrics(call, callback) {
  requestCounter.inc();
  const startTime = Date.now();

  setTimeout(() => {
    const responseTime = Date.now() - startTime;
    responseTimeHistogram.observe(responseTime);

    // Simulating random errors (10% failure rate)
    const isSuccess = Math.random() > 0.1;
    const response = {
      status: isSuccess ? "OK" : "ERROR",
      response_time_ms: responseTime,
      timestamp: new Date().toISOString(),
    };

    if (isSuccess) {
      successCounter.inc();
      callback(null, response);
    } else {
      errorCounter.inc();
      callback({
        code: grpc.status.INTERNAL,
        message: "RPC Failure",
      });
    }

    // ✅ Emit real-time update via WebSocket
    io.emit("metricsUpdate", response);
    logger.info(`📊 Real-time Update: ${JSON.stringify(response)}`);
  }, Math.random() * 100);
}

// ✅ Create gRPC Server
const grpcServer = new grpc.Server();
grpcServer.addService(monitoringProto.MonitoringService.service, { getMetrics });

grpcServer.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      logger.error("❌ Error starting gRPC server:", err);
      return;
    }
    logger.info(`✅ gRPC Server running on port ${port}`);
    grpcServer.start();
  }
);

// ✅ Start Express & WebSocket Server
server.listen(3000, () => {
  logger.info("✅ Metrics & WebSocket server running on http://localhost:3000");
});

// ✅ Simulated Requests for Testing
setInterval(() => {
  const testRequest = { request_id: Math.floor(Math.random() * 1000).toString() };

  getMetrics({ request: testRequest }, (err, response) => {
    if (err) {
      logger.error(`❌ Test request failed: ${err.message}`);
    } else {
      logger.info(`✅ Test Request Processed: ${JSON.stringify(response)}`);
    }
  });
}, 5000);
