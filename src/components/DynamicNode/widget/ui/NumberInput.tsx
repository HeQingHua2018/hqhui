/*
 * @File: NumberInput
 * @desc: 数字输入控件
 * @author: heqinghua
 * @date: 2025年08月12日 13:50:28
 * @example: 调用示例
 */
import { InputNumber } from 'antd';
import React from 'react';

import { WidgetProps } from './BaseWidgetProps';

// 数字输入控件特有属性
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NumberInputSpecificProps {}

// 组合基础属性和特有属性
type NumberInputProps = WidgetProps<number, NumberInputSpecificProps>;

// 数字输入控件
const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  ...restProps
}: NumberInputProps) => (
  <InputNumber
    value={value}
    onChange={(val) => onChange(val as number)}
    style={{ width: '100%' }}
    {...restProps}
  />
);

export default NumberInput;
