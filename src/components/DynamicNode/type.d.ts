/*
 * @File:
 * @desc:
 * @author: heqinghua
 * @date: 2025年08月15日 09:13:49
 * @example: 调用示例
 */
import type { FormItemProps } from 'antd';

interface DynamicFormProps {
  schema: Schema;
  value: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  callValidateData?: (value: Record<string, any>) => void;
  [key: string]: any;
}

interface Field {
  type: string;
  widget?: string;
  field: string;
  label: string;
  formItemProps?: Omit<FormItemProps, 'initialValue'>;
  widgetProps?: Record<string, any>;
  defaultValue?: any;
  description?: string;
  dependsOn?: {
    field: string;
    value: any | ((value: any) => boolean);
  };
  [key: string]: any;
}

interface Schema {
  type: string;
  label: string;
  config: Field[];
}

interface Option {
  value: string;
  label: string;
}

export type { DynamicFormProps, Field, Option, Schema };
