import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';

const RadarChart = ({ initialData = [], labels = [] }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

    const ctx = canvasRef.current ? canvasRef.current.getContext('2d') : null;

    if (!ctx) {
      console.error('Canvas context is not available. Check if the canvas is rendered correctly.');
      return;
    }

    const radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Cliquez sur les points',
            data: Array(initialData.length).fill(0),
            backgroundColor: 'rgba(139, 69, 19, 0.3)',
            borderColor: 'rgba(139, 69, 19, 1)',
            borderWidth: 4,
            pointBackgroundColor: 'rgba(139, 69, 19, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(139, 69, 19, 1)',
            pointRadius: 7,
            pointHoverRadius: 6,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: {
              display: false,
              stepSize: 20,
            },
            angleLines: {
              color: 'grey',
            },
            grid: {
              color: 'rgba(255, 255, 255, 1)',
            },
            pointLabels: {
              color: '#fff',
              font: {
                size: 16,
                weight: 1000
              }
            },
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.raw || '';
                return `${label}: ${value}%`;
              }
            }
          },
          legend: {
            display: false,
          }
        }
      }
    });

    chartRef.current = radarChart;

    const animateRadar = (index) => {
      if (index < initialData.length) {
        radarChart.data.datasets[0].data[index] = initialData[index];
        radarChart.update();
        animationTimeoutRef.current = setTimeout(() => animateRadar(index + 1), 175);
      }
    };

    const timeoutId = setTimeout(() => animateRadar(0), 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(animationTimeoutRef.current);
      radarChart.destroy();
    };
  }, [initialData, labels]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '65vh'}}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default RadarChart;
