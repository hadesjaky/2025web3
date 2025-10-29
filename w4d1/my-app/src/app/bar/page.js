"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
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
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default function Bar() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const fetchData = async () => {
      try {
        const urls = [
          'https://api.llama.fi/summary/dexs/sushi',
          'https://api.llama.fi/summary/dexs/Hyperliquid',
          'https://api.llama.fi/summary/dexs/Uniswap'
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));

        const dexNames = data.map(item => item.displayName);
        const totalAllTimeData = data.map(item => item.totalAllTime);

        // Set chart options
        myChart.setOption({
          title: {
            text: 'DEX Total Volume (All Time)'
          },
          tooltip: {},
          xAxis: {
            data: dexNames
          },
          yAxis: {},
          series: [
            {
              name: 'Total Volume',
              type: 'bar',
              data: totalAllTimeData
            }
          ]
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();

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
  }, []);

  return (
    <div>
      <h1>DEX Volume Comparison</h1>
      <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}
