import React, { useEffect, useRef } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  ArcElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, ArcElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const ChartComponent = ({ metrics, isDarkMode }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  if (!metrics || Object.keys(metrics).length === 0) {
    return <p>Loading Chart...</p>;
  }

  const bucketLabels = Object.keys(metrics).filter((key) => key.includes("grpc_response_time_ms_bucket"));
  const formattedLabels = bucketLabels.map((key) => key.match(/le="(\d+|\+Inf)"/)?.[1] || key);
  const values = bucketLabels.map((key) => metrics[key]);

  const totalRequests = metrics["grpc_requests_total"] || 1;
  const successCount = metrics["grpc_requests_success"] || 0;
  const errorCount = metrics["grpc_requests_errors"] || 0;
  const errorRate = ((errorCount / totalRequests) * 100).toFixed(2);

  const lineChartData = {
    labels: formattedLabels,
    datasets: [
      {
        label: "Response Time (ms)",
        data: values,
        borderColor: isDarkMode ? "orange" : "blue", // Change line color based on dark mode
        backgroundColor: isDarkMode ? "rgba(255, 165, 0, 0.2)" : "rgba(0, 0, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ["Success", "Errors"],
    datasets: [
      {
        data: [successCount, errorCount],
        backgroundColor: ["green", "red"],
        hoverBackgroundColor: ["darkgreen", "darkred"],
      },
    ],
  };

  return (
    <div className="neumorphism">
      <h2>Performance Charts</h2>
      <div style={{ width: "600px", height: "400px" }}>
        <Line ref={chartRef} data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="pie-chart-container" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <h2>Success vs Errors</h2>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default ChartComponent;
