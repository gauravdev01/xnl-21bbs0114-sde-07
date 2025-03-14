// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register Chart.js components (Fixes "Chart not rendering" issue)
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const App = () => {
//   const [metrics, setMetrics] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/metrics');
//         const parsedMetrics = parsePrometheusMetrics(res.data); // Fix parsing
//         setMetrics(parsedMetrics);
//       } catch (error) {
//         console.error('Error fetching metrics:', error);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Function to parse Prometheus text data into key-value pairs
//   const parsePrometheusMetrics = (data) => {
//     const lines = data.split('\n');
//     const result = {};
//     lines.forEach((line) => {
//       if (line && !line.startsWith('#')) {
//         const [key, value] = line.split(' ');
//         if (key && value) {
//           result[key] = parseFloat(value);
//         }
//       }
//     });
//     return result;
//   };

//   // Prepare chart data
//   const chartData = {
//     labels: Object.keys(metrics),
//     datasets: [
//       {
//         label: 'RPC Latency (ms)',
//         data: Object.values(metrics),
//         borderColor: 'blue',
//         backgroundColor: 'rgba(0, 0, 255, 0.2)',
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
//       <h1>RPC Monitoring Dashboard</h1>
//       {metrics && Object.keys(metrics).length > 0 ? (
//         <Line data={chartData} />
//       ) : (
//         <p>Loading metrics...</p>
//       )}
//     </div>
//   );
// };

// export default App;



// import { useEffect, useState } from "react";
// import ChartComponent from "./ChartComponent";
// import io from "socket.io-client";

// const SOCKET_URL = "http://localhost:3000";

// function App() {
//   const [metrics, setMetrics] = useState([]);

//   useEffect(() => {
//     // ✅ Connect to WebSocket
//     const newSocket = io(SOCKET_URL, {
//       reconnectionAttempts: 5,
//       reconnectionDelay: 3000,
//     });

//     newSocket.on("connect", () => {
//       console.log("✅ Connected to WebSocket");
//     });

//     newSocket.on("metricsUpdate", (data) => {
//       console.log("📡 Real-time Metrics Update:", data);

//       setMetrics((prevMetrics) => {
//         const updatedMetrics = [...prevMetrics, data];
//         return updatedMetrics.slice(-20); // ✅ Keep last 20 data points
//       });
//     });

//     newSocket.on("disconnect", () => {
//       console.log("⚡ WebSocket Disconnected");
//     });

//     return () => {
//       newSocket.close(); // ✅ Cleanup WebSocket connection
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Real-Time RPC Monitoring</h1>
//       <ChartComponent metrics={metrics} />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, useCallback } from "react";
import ChartComponent from "./ChartComponent";
import { io } from "socket.io-client";
import "./styles.css"; // Import the styles

function App() {
  const [metrics, setMetrics] = useState({});
  const [errorRate, setErrorRate] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // For dark mode toggle

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  const fetchMetrics = useCallback(() => {
    fetch("http://localhost:3000/metrics")
      .then((res) => res.text())
      .then((data) => {
        console.log("📊 Raw Metrics Data:", data);
        const parsedMetrics = parsePrometheusData(data);
        console.log("✅ Parsed Metrics:", parsedMetrics);
        setMetrics(parsedMetrics);

        const totalRequests = parsedMetrics.grpc_requests_total || 1;
        const errorRequests = parsedMetrics.grpc_requests_errors || 0;
        const rate = ((errorRequests / totalRequests) * 100).toFixed(2);
        setErrorRate(rate);
      })
      .catch((error) => console.error("❌ Error fetching metrics:", error));
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("metricsUpdate", (data) => {
      console.log("🔄 Real-time Update:", data);
      fetchMetrics();
    });

    return () => {
      socket.disconnect();
    };
  }, [fetchMetrics]);

  function parsePrometheusData(data) {
    const lines = data.split("\n");
    const metrics = {};
    lines.forEach((line) => {
      if (!line.startsWith("#") && line.trim() !== "") {
        const [metric, value] = line.split(" ");
        if (metric && value) {
          metrics[metric] = parseFloat(value);
        }
      }
    });
    return metrics;
  }

  return (
    <div className="container">
      <button onClick={toggleDarkMode}>
        Toggle {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Real-Time RPC Monitoring</h1>
      <h2>Error Rate: {errorRate}%</h2>
      <div className="chart-container">
        <ChartComponent metrics={metrics} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
