/*
 * @File: TextInput
 * @desc: 文本输入控件
 * @author: heqinghua
 * @date: 2025年08月12日 13:50:08
 * @example: 调用示例
 */
import { Input } from 'antd';
import React from 'react';

import { WidgetProps } from './BaseWidgetProps';

// 文本输入控件特有属性
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextInputSpecificProps {}

// 组合基础属性和特有属性
type TextInputProps = WidgetProps<string, TextInputSpecificProps>;

// 文本输入控件
const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  ...restProps
}: TextInputProps) => (
  <Input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    {...restProps}
  />
);

export default TextInput;
