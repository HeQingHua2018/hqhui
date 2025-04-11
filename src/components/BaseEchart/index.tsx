import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export interface BaseChartProps {
  /**
   * @description ECharts configuration options
   * @type {echarts.EChartsOption}
   * @default {}
   */
  option: echarts.EChartsOption;
}
/**
 * BaseChart component for rendering ECharts charts.
 * @param {echarts.EChartsOption} option - ECharts configuration options.
 * @returns {JSX.Element} - Rendered chart component.
 */
const BaseChart: React.FC<BaseChartProps> = ({ option={} }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(option);
      // 窗口大小变化时自适应
      const resizeHandler = () => chart.resize();
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, [option]);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }} />;
};

export default BaseChart;