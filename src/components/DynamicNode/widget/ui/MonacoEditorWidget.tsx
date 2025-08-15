/*
 * @File: MonacoEditorWidget
 * @desc: Monaco编辑器控件
 * @author: heqinghua
 * @date: 2025年08月12日 13:51:08
 * @example: 调用示例
 */
import { Input } from 'antd';
import React from 'react';
import { WidgetProps } from './BaseWidgetProps';

// Monaco编辑器控件特有属性
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MonacoEditorWidgetSpecificProps {}

// 组合基础属性和特有属性
type MonacoEditorWidgetProps = WidgetProps<
  string,
  MonacoEditorWidgetSpecificProps
>;

// Monaco编辑器控件
const MonacoEditorWidget: React.FC<MonacoEditorWidgetProps> = ({
  value,
  onChange,
  ...restProps
}: MonacoEditorWidgetProps) => (
  <Input.TextArea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    rows={5}
    {...restProps}
  />
);

export default MonacoEditorWidget;
