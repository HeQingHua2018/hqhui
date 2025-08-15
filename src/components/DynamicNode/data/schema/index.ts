/*
 * @File:
 * @desc: 节点源数据schema
 * @author: heqinghua
 * @date: 2025年08月12日 10:06:22
 * @example: 调用示例
 */

import { Schema } from '../../type';

// 定义节点元数据(Schema)
const nodeSchemas: Record<string, Schema> = {
  // Prompt节点元数据
  prompt: {
    type: 'prompt',
    label: 'Prompt节点',
    config: [
      {
        field: 'prompt_template',
        label: '提示词模板',
        type: 'text',
        widget: 'monaco-editor',
        defaultValue: '123',
        widgetProps: {
          placeholder: '请输入提示词模板',
        },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入提示词模板',
            },
            {
              min: 10,
              message: '提示词模板长度不能少于10个字符',
            },
          ],
        },
      },
      {
        field: 'model',
        label: '关联模型',
        type: 'select',
        widgetProps: {
          options: [
            { value: 'gpt-3.5', label: 'GPT-3.5' },
            { value: 'llama3', label: 'Llama 3' },
            { value: 'deepseek', label: 'DeepSeek' },
          ],
        },
        defaultValue: 'gpt-3.5',
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
        formItemProps: {
          rules: [
            {
              type: 'number',
              min: 0,
              max: 1,
              message: '温度参数必须在0到1之间',
            },
          ],
        },
        defaultValue: 0.7,
        description: '控制输出的随机性，值越高越随机',
      },
    ],
  },

  // 工具调用节点元数据
  tool: {
    type: 'tool',
    label: '工具调用节点',
    config: [
      {
        field: 'tool_id',
        label: '选择工具',
        type: 'select',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请选择工具',
            },
          ],
        },
        widgetProps: {
          options: [
            { value: 'weather', label: '天气查询' },
            { value: 'calculator', label: '计算器' },
            { value: 'database', label: '数据库查询' },
          ],
          allowClear: true,
        },
      },
      {
        field: 'parameters',
        label: '参数映射',
        type: 'object',
        widget: 'key-value-editor',
        dependsOn: { field: 'tool_id', value: (v: any) => v },
        description: '设置工具所需参数，支持变量',
      },
      {
        field: 'timeout',
        label: '超时时间(秒)',
        type: 'number',
        defaultValue: 30,
        dependsOn: { field: 'tool_id', value: (v: any) => v },
        formItemProps: {
          rules: [
            {
              type: 'number',
              min: 5,
              max: 60,
              message: '超时时间必须在5到60秒之间',
            },
          ],
        },
        widgetProps: {
          min: 5,
          max: 60,
        },
      },
    ],
  },
};

// 导出节点元数据
export { nodeSchemas };
