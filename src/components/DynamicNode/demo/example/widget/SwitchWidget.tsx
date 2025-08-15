/*
 * @File: SwitchWidget
 * @desc: 开关控件
 * @author: heqinghua
 * @date: 2025年08月12日 13:52:05
 * @example: 调用示例
 */
import { Switch } from 'antd';
import React from 'react';

interface SwitchWidgetProps {
  value: boolean;
  onChange: (value: boolean) => void;
  [key: string]: any;
}

// 开关控件
const SwitchWidget: React.FC<SwitchWidgetProps> = ({
  value = false,
  onChange,
  ...resetProps
}: SwitchWidgetProps) => (
  <Switch
    checked={value}
    onChange={(checked) => onChange(checked)}
    {...resetProps}
  />
);

export default SwitchWidget;
