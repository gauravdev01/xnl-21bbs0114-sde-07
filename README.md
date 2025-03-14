# Real-Time Performance Monitoring, Logging & Debugging System for RPC-Based Application

## Overview

This project implements a comprehensive system for real-time performance monitoring, logging, and debugging tailored for RPC-based applications. Utilizing gRPC for efficient communication, the system integrates robust logging mechanisms, performance monitoring tools, and a user-friendly dashboard for visualization. The solution is designed to handle high-throughput transactions and is fully deployable in a cloud environment.

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Backend Services](#backend-services)
   - [gRPC Implementation](#grpc-implementation)
   - [Logging Mechanism](#logging-mechanism)
   - [Performance Monitoring](#performance-monitoring)
   - [Error Handling](#error-handling)
3. [Frontend Dashboard](#frontend-dashboard)
   - [Metrics Visualization](#metrics-visualization)
   - [Log Viewer](#log-viewer)
   - [User Authentication](#user-authentication)
4. [Deployment](#deployment)
   - [Docker Setup](#docker-setup)
   - [Kubernetes Deployment](#kubernetes-deployment)
5. [Testing & Continuous Integration](#testing--continuous-integration)
   - [Unit Testing](#unit-testing)
   - [Load Testing](#load-testing)
   - [CI/CD Pipeline](#cicd-pipeline)
6. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## System Architecture

The system is structured into distinct components to ensure modularity and scalability:

- **Backend Services**: gRPC-based services handling client requests.
- **Logging Module**: Captures detailed logs for all requests and responses.
- **Performance Monitoring**: Collects real-time metrics on system performance.
- **Frontend Dashboard**: Provides visualization of logs and performance metrics.

## Backend Services

### gRPC Implementation

The backend utilizes gRPC to define service protocols and implement services that process RPC requests efficiently.

### Logging Mechanism

Integrated logging captures structured logs for all incoming and outgoing requests, including unique request IDs to facilitate tracking across microservices.

### Performance Monitoring

Prometheus is employed to collect metrics such as request counts, latencies, and error rates. Grafana dashboards visualize these metrics, providing real-time insights.

### Error Handling

The system includes comprehensive error handling to capture exceptions and implement intelligent error reporting mechanisms.

## Frontend Dashboard

### Metrics Visualization

Developed with React.js and Chart.js, the dashboard displays real-time performance metrics, including request latency and error rates.

### Log Viewer

An interactive log viewer with filtering and real-time log streaming capabilities allows for efficient log analysis.

### User Authentication

Role-based access control (RBAC) is implemented using JWT authentication to secure the dashboard.

## Deployment

### Docker Setup

Docker containers are used to package both backend services and the frontend dashboard, ensuring consistency across environments.

### Kubernetes Deployment

Kubernetes configurations facilitate scalable deployment in cloud environments. Helm charts are used for environment-specific deployments.

## Testing & Continuous Integration

### Unit Testing

Comprehensive unit tests cover various edge cases, ensuring the reliability of the RPC APIs.

### Load Testing

Tools like Apache JMeter simulate real-world traffic to test system throughput and latency, identifying potential bottlenecks.

### CI/CD Pipeline

A CI pipeline automates building, testing, and deploying services, integrating with tools like GitHub Actions for streamlined workflows.

## Getting Started

### Prerequisites

- Docker
- Kubernetes
- Node.js
- Prometheus
- Grafana

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gauravdev01/xnl-21bbs0114-sde-7.git
   ```
2. **Navigate to the project directory** :

    ```bash
    cd xnl-21bbs0114-sde-7
    ```
3. **Set up the backend services:**

    ```bash
    cd backend
    npm install
    ```
4. **Set up the frontend dashboard:**

    ```bash
    cd ../frontend
    npm install
    ```
### Usage 

1. **Start backend services:**
   ```bash
   cd backend
    npm start
    ```
2. **Start frontend dashboard:**

   ```bash
   cd ../frontend
    npm start
    ```
3. **Access the dashboard:**

Open your browser and navigate to http://localhost:3000.
# Screenshots
<table>
  <tr>
    <th>Network Log list</th>
    <th>Request details</th>
    <th>Response details</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/sunilsharma08/XNLogger/master/XNLoggerExample/ExampleAppScreenshots/LogListScreen.png" alt="Log lists" width="300" height="468"/></td>
    <td><img src="https://raw.githubusercontent.com/sunilsharma08/XNLogger/master/XNLoggerExample/ExampleAppScreenshots/LogDetailsRequestScreen.png" alt="Request details" width="300" height="468"/></td>
    <td><img src="https://raw.githubusercontent.com/sunilsharma08/XNLogger/master/XNLoggerExample/ExampleAppScreenshots/LogDetailsResponseScreen.png" alt="Response details" width="300" height="468"/></td>
  </tr>
</table>

![transaction_duration](https://github.com/user-attachments/assets/f373b293-5f3f-4acd-8f23-8cabeb710777)
![active_requests](https://github.com/user-attachments/assets/887dbc7f-569c-49f9-a62d-d89b4cff197b)
![total_count](https://github.com/user-attachments/assets/9c751d4c-dd11-4bdc-af1b-9548b4657adb)



