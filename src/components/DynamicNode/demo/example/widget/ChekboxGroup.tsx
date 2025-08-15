/*
 * @File: CheckboxGroup
 * @desc: 复选框组
 * @author: heqinghua
 * @date: 2025年08月12日 16:57:19
 * @example: 调用示例
 */

import { Checkbox } from 'antd';
import React from 'react';
interface CheckboxGroupProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: {
    label: string;
    value: string;
  }[];
  [key: string]: any;
}
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  value,
  onChange,
  options,
  ...reset
}: CheckboxGroupProps) => {
  return (
    <Checkbox.Group
      options={options}
      value={value}
      onChange={onChange}
      {...reset}
    />
  );
};

export default CheckboxGroup;
