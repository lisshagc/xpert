import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, Filler);

const ChartComponent = () => {
  const gradient = (ctx) => {
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 225);
    gradientFill.addColorStop(0, "rgba(215, 227, 244, 1)");
    gradientFill.addColorStop(1, "rgba(215, 227, 244, 0)");
    return gradientFill;
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Pass (%)",
      fill: true,
      backgroundColor: (ctx) => gradient(ctx),
      borderColor: '#007bff', // replace with your theme primary color
      data: [40, 60, 75, 85, 90, 99, 100, 92, 94, 98, 90, 82]
    }]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        intersect: false
      },
      filler: {
        propagate: false
      }
    },
    scales: {
      x: {
        reverse: true,
        grid: {
          color: "rgba(0,0,0,0.0)"
        }
      },
      y: {
        ticks: {
          stepSize: 10 // Adjust step size according to your data
        },
        borderDash: [3, 3],
        grid: {
          color: "rgba(0,0,0,0.0)"
        }
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '600px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;