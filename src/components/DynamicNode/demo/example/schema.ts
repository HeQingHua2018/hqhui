/*
 * @File: nodeConfigs
 * @desc: 动态节点配置文件
 * @author: heqinghua
 * @date: 2025年08月13日
 */

import type { Schema } from 'hqhui';
import React from 'react';
import { CheckboxGroup, SwitchWidget } from './widget';

// 定义控件映射类型
interface WidgetMap {
  [key: string]: React.ElementType;
}

// 定义节点配置项类型
interface NodeConfig {
  schema: Schema;
  widgets?: WidgetMap;
  [key: string]: any;
}

// 定义所有动态节点的配置
export const nodeConfigs: NodeConfig[] = [
  {
    schema: {
      type: 'dify',
      label: 'Dify节点',
      config: [
        {
          field: 'api_key',
          label: 'API密钥',
          type: 'CheckboxGroup',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '请选择API密钥',
              },
            ],
          },
          widgetProps: {
            placeholder: '请输入Dify API密钥',
            options: [
              { value: 'key1', label: '密钥1' },
              { value: 'key2', label: '密钥2' },
            ],
          },
        },
        {
          field: 'project_id',
          label: '项目ID',
          type: 'text',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '请输入Dify项目ID',
              },
            ],
          },
          widgetProps: {
            placeholder: '请输入Dify项目ID',
          },
        },
        {
          field: 'model',
          label: '模型选择',
          type: 'select',
          widgetProps: {
            options: [
              { value: 'gpt-4', label: 'GPT-4' },
              { value: 'claude-3', label: 'Claude 3' },
              { value: 'qwen-plus', label: '通义千问Plus' },
            ],
          },
          defaultValue: 'gpt-4',
        },
        {
          field: 'temperature',
          label: '温度参数',
          type: 'number',
          widgetProps: {
            min: 0,
            max: 1,
            step: 0.1,
          },
          defaultValue: 0.7,
        },
        {
          field: 'streaming',
          label: '流式输出',
          type: 'boolean',
          widget: 'switch',
          defaultValue: true,
          formItemProps: {
            rules: [
              {
                required: true,
                message: '请选择流式输出',
              },
            ],
          },
        },
      ],
    },
    widgets: {
      switch: SwitchWidget,
      CheckboxGroup: CheckboxGroup,
    },
  },
  {
    schema: {
      type: 'condition',
      label: '条件判断节点',
      config: [
        {
          field: 'condition',
          label: '判断条件',
          type: 'text',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '请输入判断条件',
              },
            ],
          },
          widgetProps: {
            placeholder: '输入判断条件',
          },
        },
        {
          field: 'true_branch',
          label: '满足条件时',
          type: 'select',
          widgetProps: {
            options: [
              { value: 'node1', label: '节点1' },
              { value: 'node2', label: '节点2' },
            ],
          },
        },
        {
          field: 'false_branch',
          label: '不满足条件时',
          type: 'select',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '请选择不满足条件时的分支',
              },
            ],
          },
          widgetProps: {
            placeholder: '请选择',
            allowClear: true,
            options: [
              { value: 'node3', label: '节点3' },
              { value: 'node4', label: '节点4' },
            ],
          },
        },
      ],
    },
    widgets: {},
  },
];
