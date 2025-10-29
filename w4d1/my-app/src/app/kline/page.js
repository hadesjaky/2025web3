'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const Page = () => {
    const chartRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.dune.com/api/v1/query/2395073/results?limit=1000', {
                    headers: {
                        'X-Dune-API-Key': '19Hrb6rYs92U9p8Ou7Yx3XuGnqhnjTUg' //自己的api先放出来，课程通过后删除
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                const rows = data.result.rows;
                const dates = rows.map(item => item.Date.split('T')[0]);
                const klineData = rows.map(item => [item.Bottom, item.Top, item.Bottom, item.Top]);

                const option = {
                    title: {
                        text: 'USDC最近60天的价格 K-Line Chart'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates
                    },
                    yAxis: {
                        scale: true
                    },
                    series: [{
                        type: 'candlestick',
                        data: klineData,
                        itemStyle: {
                            color: '#00da3c',
                            color0: '#ec0000',
                            borderColor: '#008000',
                            borderColor0: '#800000'
                        }
                    }]
                };

                chart.setOption(option);
            } catch (e) {
                console.error("Failed to fetch or process data:", e);
                setError(e.message);
            }
        };

        fetchData();

        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <div>
            <h1>USDC最近60天的价格</h1>
            {error ? (
                <div>Error loading chart: {error}</div>
            ) : (                
                <div ref={chartRef} style={{ width: '100%', height: '600px' }}></div>
            )}
        </div>
    );
};

export default Page;
