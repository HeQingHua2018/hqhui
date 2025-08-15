---
category: utils
title: 节点注入器 # 组件的标题，会在菜单侧边栏展示
group: # 分组
  title: 工具函数 # 所在分组的名称
  order: 6 # 分组排序，值越小越靠前
---

### 概述

节点注入器是一个用于动态注入节点配置、类型和自定义控件的工具。它允许在运行时扩展和修改节点系统，实现高度的灵活性和可扩展性。[需要配合 DynamicNode 使用](/components/dynamic-node)

### 核心概念

- **Field**: 单个配置字段的定义，包含类型、标签、默认值等属性
- **Schema**: 节点的配置结构，包含节点类型、标签和字段列表
- **NodeInjector**: 注入器实例，用于管理节点配置、类型和控件

### API 文档

#### 初始化与获取注入器

| 名称                 | 描述                     | 参数                                                                                         | 返回值                  |
| -------------------- | ------------------------ | -------------------------------------------------------------------------------------------- | ----------------------- |
| `initializeInjector` | 初始化注入器实例         | `initialSchemas`: 初始节点配置<br>`initialTypes`: 初始节点类型<br>`initialWidgets`: 初始控件 | `DifyNodeInjector` 实例 |
| `getInjector`        | 获取已初始化的注入器实例 | 无                                                                                           | `DifyNodeInjector` 实例 |

#### 注入操作

| 名称               | 描述           | 参数                                   | 返回值 |
| ------------------ | -------------- | -------------------------------------- | ------ |
| `injectNodeSchema` | 注入节点元数据 | `type`: 节点类型<br>`schema`: 节点配置 | 无     |
| `injectNodeType`   | 注入节点类型   | `type`: 节点类型<br>`label`: 节点标签  | 无     |
| `injectWidget`     | 注入自定义控件 | `type`: 控件类型<br>`widget`: 控件组件 | 无     |

#### 获取操作

| 名称             | 描述                     | 参数 | 返回值       |
| ---------------- | ------------------------ | ---- | ------------ |
| `getNodeSchemas` | 获取所有注入的节点元数据 | 无   | 节点配置对象 |
| `getNodeTypes`   | 获取所有注入的节点类型   | 无   | 节点类型数组 |
| `getWidgets`     | 获取所有注入的控件       | 无   | 控件对象     |

#### 订阅操作

| 名称        | 描述               | 参数                 | 返回值       |
| ----------- | ------------------ | -------------------- | ------------ |
| `subscribe` | 订阅注入器数据变化 | `callback`: 回调函数 | 取消订阅函数 |

### 接口定义

#### Field 接口

```typescript
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
```

#### Schema 接口

```typescript
interface Schema {
  type: string;
  label: string;
  config: Field[];
}
```

#### NodeInjector 接口

```typescript
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
```

### 使用示例

#### 初始化注入器

```typescript
import { initializeInjector } from 'hqhui';

// 初始节点配置
const initialSchemas = {
  'text-input': {
    type: 'text-input',
    label: '文本输入',
    config: [
      {
        type: 'string',
        field: 'placeholder',
        label: '占位文本',
        defaultValue: '请输入',
      },
    ],
  },
};

// 初始节点类型
const initialTypes = [{ value: 'text-input', label: '文本输入' }];

// 初始化注入器
const injector = initializeInjector(initialSchemas, initialTypes);
```

#### 注入新节点

```typescript
import { injectNodeSchema, injectNodeType } from 'hqhui';

// 定义新节点配置
const buttonSchema = {
  type: 'button',
  label: '按钮',
  config: [
    {
      type: 'string',
      field: 'text',
      label: '按钮文本',
      defaultValue: '按钮',
    },
    {
      type: 'boolean',
      field: 'disabled',
      label: '是否禁用',
      defaultValue: false,
    },
  ],
};

// 注入节点配置和类型
injectNodeSchema('button', buttonSchema);
injectNodeType('button', '按钮');
```

#### 订阅数据变化

```typescript
import { getInjector } from 'hqhui';

const injector = getInjector();

// 订阅数据变化
const unsubscribe = injector.subscribe(() => {
  console.log('节点配置已更新');
  const nodeTypes = injector.getNodeTypes();
  console.log('当前节点类型:', nodeTypes);
});

// 取消订阅
// unsubscribe();
```
