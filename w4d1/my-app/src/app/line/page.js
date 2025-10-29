"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default function Line() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.llama.fi/protocol/aave');
        const data = await response.json();
        const tvl_data = data.tvl;

        // Sort data by date in descending order and take the most recent 100
        const sortedData = tvl_data
          .sort((a, b) => b.date - a.date)
          .slice(0, 100);

        // Prepare data for ECharts
        const dates = sortedData.map(item => new Date(item.date * 1000).toLocaleDateString()).reverse();
        const tvls = sortedData.map(item => item.totalLiquidityUSD).reverse();

        // Initialize ECharts instance
        const myChart = echarts.init(chartRef.current);

        // Set chart options
        myChart.setOption({
          title: {
            text: 'Aave TVL Over Time (Last 100 Entries)'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: dates
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '${value}'
            }
          },
          series: [
            {
              data: tvls,
              type: 'line'
            }
          ]
        });

        // Optional: Resize chart on window resize
        const resizeChart = () => {
          myChart.resize();
        };
        window.addEventListener('resize', resizeChart);

        // Cleanup on component unmount
        return () => {
          window.removeEventListener('resize', resizeChart);
          myChart.dispose();
        };
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>AAVE的TVL</h1>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}
