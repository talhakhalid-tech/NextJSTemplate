import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

/**
 * Interface for the BarChart component props.
 */
interface IBarChart {
  data: any; // Data for the chart
  width: string; // Width of the chart container
  height: string; // Height of the chart container
}

/**
 * BarChart component renders a bar chart using Chart.js library.
 * @param {IBarChart} props - The props for the BarChart component.
 * @returns {JSX.Element} The BarChart component.
 */
const BarChart: React.FC<IBarChart> = ({ data, width, height }) => {
  const chartContainer = useRef(null) as any; // Reference to the chart canvas
  const chartInstance = useRef(null) as any; // Reference to the chart instance

  useEffect(() => {
    // Cleanup previous chart instance if exists
    if (chartInstance.current) {
      chartInstance.current.destroy()!;
    }

    // Initialize new chart instance
    const ctx = chartContainer.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    return () => {
      // Clean up chart instance on component unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div style={{ width, height }}>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default React.memo(BarChart);
