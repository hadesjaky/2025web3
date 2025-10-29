"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
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
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default function Pie() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.dune.com/api/v1/query/6077414/results?limit=10', {
          headers: {
            'X-Dune-API-Key': '19Hrb6rYs92U9p8Ou7Yx3XuGnqhnjTUg' //自己的api先放出来，课程通过后删除
          }
        });
        const data = await response.json();
        const chartData = data.result.rows.map(row => ({
          name: row.address,
          value: row.balance
        }));

        // Set chart options
        myChart.setOption({
          title: {
            text: 'Arb代币在ETH链上持仓量Top10地址',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: 'Balance',
              type: 'pie',
              radius: '50%',
              data: chartData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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
      <h1>ARB代币在ETH链上持仓量Top10地址 Pie Chart</h1>
      <div ref={chartRef} style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
}
