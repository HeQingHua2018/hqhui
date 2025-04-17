import { Line } from '@ant-design/charts'; // 从 @ant-design/charts 库中引入 Line 组件
import React from 'react'; // 引入 React 库

/**
 * 定义 LineChart 组件的配置接口
 * @template X - x 轴字段的类型，必须是 string 或其子类型
 * @template Y - y 轴字段的类型，必须是 string 或其子类型
 */
export interface lineConfig<X extends string, Y extends string> {
  /**
   * @description 图表数据数组 数组中的每个对象都包含 x 轴和 y 轴字段 x 轴字段的值为 string 类型，y 轴字段的值为 number 类型
   * @type {Array<{ [K in X | Y]: K extends X ? string : number }>}
   *
   */
  data: { [K in X | Y]: K extends X ? string : number }[];
  /**
   * @description x 轴字段的名称
   * @type string
   */
  xField: X;
  /**
   * @description y 轴字段的名称
   * @type string
   */
  yField: Y;
  /**
   * @description 图表的高度
   */
  height: number;
}

/**
 * LineChart 组件
 * 使用 React.FC 类型定义函数组件，并接受 lineConfig 作为 props
 * @param props - 组件的 props，包含图表配置数据
 */
const LineChart: React.FC<lineConfig<any, any>> = (props) => {
  // 将 props 展开传递给 Line 组件
  return <Line {...props} />;
};

// 默认导出 LineChart 组件
export default LineChart;
