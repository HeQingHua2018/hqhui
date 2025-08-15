/*
 * @File: index.tsx
 * @desc: 动态配置表单组件
 * @author: heqinghua
 * @date: 2025年08月12日 13:57:49
 * @example: 调用示例
 */

import { Button, Form, message } from 'antd';
import { getWidgets } from 'hqhui';
import React, { useEffect } from 'react';
import type { DynamicFormProps, Field } from '../type';
import {
  KeyValueEditor,
  MonacoEditorWidget,
  NumberInput,
  SelectWidget,
  TextInput,
} from './ui';

// 控件映射函数
const getWidgetByType = (
  type: string,
  widget?: string,
): React.ElementType<any> => {
  // 获取注入的控件
  const injectedWidgets = getWidgets();

  // 内置控件
  const builtInWidgets: Record<string, React.ElementType<any>> = {
    text: TextInput,
    number: NumberInput,
    select: SelectWidget,
    'monaco-editor': MonacoEditorWidget,
    'key-value-editor': KeyValueEditor,
    object: KeyValueEditor,
  };

  // 合并内置控件和注入的控件
  const widgetMap = { ...builtInWidgets, ...injectedWidgets };

  return widgetMap[widget || type] || TextInput; // 默认返回TextInput
};

// 依赖检查函数
const checkDependency = (
  field: Field,
  formValues: Record<string, any>,
): boolean => {
  if (!field.dependsOn) return true;

  const { field: dependField, value: dependValue } = field.dependsOn;
  const currentValue = formValues[dependField];

  if (typeof dependValue === 'function') {
    return dependValue(currentValue);
  }

  return currentValue === dependValue;
};

// 动态表单生成器
const DynamicNodeForm: React.FC<DynamicFormProps> = ({
  schema,
  value,
  onChange,
  callValidateData,
}: DynamicFormProps) => {
  const [form] = Form.useForm<Record<string, any>>();
  // 当value变化时，更新表单值
  useEffect(() => {
    if (value) {
      form.setFieldsValue(value);
    } else {
      // 设置默认值
      const initialValues: Record<string, any> = {};
      schema.config.forEach((field: Field) => {
        if (field.defaultValue !== undefined) {
          initialValues[field.field] = field.defaultValue;
        }
      });
      form.setFieldsValue(initialValues);
    }
  }, [value, schema, form]);

  const handleFieldChange = (fieldName: string, fieldValue: any) => {
    onChange({
      ...value,
      [fieldName]: fieldValue,
    });
  };
  const handleSaveConfig = async () => {
    try {
      const result = await form.validateFields();
      message.success('校验通过');
      callValidateData?.(result);
      console.log('校验通过的配置', result);
    } catch (e) {
      message.error('校验失败, 请检查表单输入项');
      console.log(e);
    }
  };
  return (
    <Form layout="vertical" style={{ width: '100%' }} form={form}>
      {schema.config.map((field) => {
        const Widget = getWidgetByType(field.type, field.widget);
        const isVisible = checkDependency(field, value || {});

        if (!isVisible) return null;

        // 分离formItemProps和widgetProps
        const { formItemProps = {}, widgetProps = {} } = field;

        return (
          <Form.Item
            key={field.field}
            name={field.field}
            label={field.label}
            {...formItemProps}
          >
            <Widget
              value={value ? value[field.field] : field.defaultValue}
              onChange={(val: any) => handleFieldChange(field.field, val)}
              {...widgetProps}
            />
          </Form.Item>
        );
      })}
      <Form.Item>
        <Button type="primary" onClick={handleSaveConfig}>
          保存配置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicNodeForm;
