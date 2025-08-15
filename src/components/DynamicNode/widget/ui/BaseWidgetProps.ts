/**
 * 所有控件的基础属性接口
 * @author: heqinghua
 * @date: 2025年08月12日
 */
export interface BaseWidgetProps<T> {
  /** 当前值 */
  value: T;
  /** 值变化回调 */
  onChange: (value: T) => void;
  /** 其他额外属性 */
  [key: string]: any;
}

/**
 * 创建控件属性类型的工具类型
 * 用于组合基础属性和控件特有属性
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type WidgetProps<T, U = {}> = BaseWidgetProps<T> & U;
