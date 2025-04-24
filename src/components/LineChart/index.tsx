import { Line } from '@ant-design/charts'; // 从 @ant-design/charts 库中引入 Line 组件
import React from 'react'; // 引入 React 库

/**
 * @description lineConfig 接口
 */
export interface lineConfig {
  /**
   * @description 图表宽度
   * @type number
   * @default 400
   */
  width?: number;
  /**
   * @description 图表高度
   * @type number
   * @default 400
   */
  height?: number;
  /**
   * @description 图表是否自适应容器宽高。当 autoFit 设置为 true 时，width 和 height 的设置将失效。
   * @type boolean
   * @default true
   */
  autoFit?: boolean;
  /**
   * @description 图表渲染方式
   * @type string
   * @default 'canvas'
   */
  renderer?: string;
  /**
   * @description 图表数据数组 数组中的每个对象都包含 x 轴和 y 轴字段 x 轴字段的值为 string 类型，y 轴字段的值为 number 类型
   * @type { [key: string]: string | number; }[]
   * @required
   */
  data: { [key: string]: string | number }[];
  /**
   * @description x 轴字段的名称
   * @type string
   * @required
   */
  xField: string;
  /**
   * @description y 轴字段的名称
   * @type string
   */
  yField: string;
}

/**
 * LineChart 组件
 * 使用 React.FC 类型定义函数组件，并接受 lineConfig 作为 props
 * @param props - 组件的 props，包含图表配置数据
 */
const LineChart: React.FC<lineConfig> = (props) => {
  // 将 props 展开传递给 Line 组件
  return <Line {...props} />;
};

// 默认导出 LineChart 组件
export default LineChart;
