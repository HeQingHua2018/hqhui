/*
 * @File: SelectWidget
 * @desc: 下拉选择控件
 * @author: heqinghua
 * @date: 2025年08月12日 13:50:50
 * @example: 调用示例
 */
import { Select } from 'antd';
import React from 'react';
import { Option as TypeOption } from '../../type';
import { WidgetProps } from './BaseWidgetProps';

// 下拉选择控件特有属性
interface SelectWidgetSpecificProps {
  options: TypeOption[];
}

// 组合基础属性和特有属性
type SelectWidgetProps = WidgetProps<string, SelectWidgetSpecificProps>;

// 下拉选择控件
const SelectWidget: React.FC<SelectWidgetProps> = ({
  value,
  onChange,
  options,
  placeholder,
  ...reset
}: SelectWidgetProps) => {
  return (
    <Select
      value={value}
      onChange={(val) => onChange(val)}
      style={{ width: '100%' }}
      placeholder={placeholder || '请选择'}
      {...reset}
    >
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectWidget;
