import type { FormItemProps } from 'antd';
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

// 确保类型正确导入
// Field接口定义单个配置字段
// Schema接口定义节点的配置结构
import React from 'react';

// 定义注入器接口
interface NodeInjector {
  // 注入节点元数据
  injectNodeSchema(type: string, schema: Schema): void;
  // 注入节点类型
  injectNodeType(type: string, label: string): void;
  // 注入自定义控件
  injectWidget(type: string, widget: React.ElementType<any>): void;
  // 获取所有注入的节点元数据
  getNodeSchemas(): Record<string, Schema>;
  // 获取所有注入的节点类型
  getNodeTypes(): { value: string; label: string }[];
  // 获取所有注入的控件
  getWidgets(): Record<string, React.ElementType<any>>;
  // 订阅数据变化
  subscribe(callback: () => void): () => void;
}

// 实现注入器
class DifyNodeInjector implements NodeInjector {
  private nodeSchemas: Record<string, Schema> = {};
  private nodeTypes: { value: string; label: string }[] = [];
  private widgets: Record<string, React.ElementType<any>> = {};
  private subscribers: Array<() => void> = [];

  // 通知所有订阅者
  private notifySubscribers(): void {
    this.subscribers.forEach((callback) => callback());
  }

  constructor(
    initialSchemas: Record<string, Schema> = {},
    initialTypes: { value: string; label: string }[] = [],
    initialWidgets: Record<string, React.ElementType<any>> = {},
  ) {
    // 初始化注入器
    this.nodeSchemas = { ...initialSchemas };
    this.nodeTypes = [...initialTypes];
    this.widgets = { ...initialWidgets };
  }

  // 注入节点元数据
  injectNodeSchema(type: string, schema: Schema): void {
    this.nodeSchemas[type] = schema;
    this.notifySubscribers();
  }

  // 注入节点类型
  injectNodeType(type: string, label: string): void {
    // 避免重复添加
    if (!this.nodeTypes.some((t) => t.value === type)) {
      this.nodeTypes.push({ value: type, label });
      this.notifySubscribers();
    }
  }

  // 注入自定义控件
  injectWidget(type: string, widget: React.ElementType<any>): void {
    this.widgets[type] = widget;
    this.notifySubscribers();
  }

  // 获取所有节点元数据
  getNodeSchemas(): Record<string, Schema> {
    return { ...this.nodeSchemas };
  }

  // 获取所有节点类型
  getNodeTypes(): { value: string; label: string }[] {
    return [...this.nodeTypes];
  }

  // 获取所有控件
  getWidgets(): Record<string, React.ElementType<any>> {
    return { ...this.widgets };
  }

  // 订阅数据变化
  subscribe(callback: () => void): () => void {
    this.subscribers.push(callback);
    // 返回取消订阅的函数
    return () => {
      this.subscribers = this.subscribers.filter((cb) => cb !== callback);
    };
  }
}

// 创建注入器实例
let injector: DifyNodeInjector | null = null;

// 初始化注入器的函数
export function initializeInjector(
  initialSchemas: Record<string, Schema> = {},
  initialTypes: { value: string; label: string }[] = [],
  initialWidgets: Record<string, React.ElementType<any>> = {},
): DifyNodeInjector {
  if (!injector) {
    injector = new DifyNodeInjector(
      initialSchemas,
      initialTypes,
      initialWidgets,
    );
  }
  return injector;
}

// 获取注入器实例
export function getInjector(): DifyNodeInjector {
  if (!injector) {
    throw new Error('Injector not initialized. Call initializeInjector first.');
  }
  return injector;
}

// 注入辅助函数

export function injectNodeSchema(type: string, schema: Schema): void {
  getInjector().injectNodeSchema(type, schema);
}

export function injectNodeType(type: string, label: string): void {
  getInjector().injectNodeType(type, label);
}

export function injectWidget(
  type: string,
  widget: React.ElementType<any>,
): void {
  getInjector().injectWidget(type, widget);
}

export function getNodeSchemas(): Record<string, Schema> {
  return getInjector().getNodeSchemas();
}

export function getNodeTypes(): { value: string; label: string }[] {
  return getInjector().getNodeTypes();
}

export function getWidgets(): Record<string, React.ElementType<any>> {
  return getInjector().getWidgets();
}
