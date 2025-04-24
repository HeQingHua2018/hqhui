---
category: Components
title: OrganizationChart # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 图表 # 所在分组的名称
  order: 2 # 分组排序，值越小越靠前
---

# OrganizationChart 组织结构图

```jsx | pure
import { OrganizationChart } from 'hqhui';
```

## 介绍

基础的 Ant Design Charts 图表组件 OrganizationChart

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx" title="基础用法" description="简单的展示" ></code>
<code src="./demo/deriction.tsx" title="节点排布" description="
通过设置 `direction` 为 `vertical` `horizontal` 分别让垂直（自上而下）、水平（自左而右）分布。若不设置 `direction`，则默认垂直分布。" ></code>

## API

<!-- <API id="OrganizationChart"></API> -->

### OrganizationChart

| 属性       | 说明                                                                                                                                               | 类型                                   | 默认值       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------ |
| data       | 数据                                                                                                                                               | [Data](#data)                          | -            |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID      |
| direction  | 语法糖，设置节点的排布方向。当设置 `layout.rankdir` 时会以后者为准                                                                                 | `'vertical'` \| `'horizontal'`         | `'vertical'` |
| layout     | Dagre 布局配置                                                                                                                                     | [Layout](#layout)                      | -            |

### Data

图数据。若开启“展开-收起”交互，需确保数据中包含 `children` 字段。

```js
const graphData = {
  nodes: [
    { id: '1', label: 'Node 1', children: ['2', '3'] },
    { id: '2', label: 'Node 2', children: ['4'] },
    { id: '3', label: 'Node 3' },
    { id: '4', label: 'Node 4' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '4' },
  ],
};
```

### Layout

Dagre 层次布局。配置如下：

也可以参考 [Dagre Wiki](https://github.com/dagrejs/dagre/wiki)

| 属性      | 说明                                                                                                | 类型   | 默认值            |
| --------- | --------------------------------------------------------------------------------------------------- | ------ | ----------------- |
| rankdir   | 节点排列方向。可以是 `TB`、`BT`、`LR` 或 `RL`，其中 T = 上，B = 下，L = 左，R = 右                  | string | `TB`              |
| align     | 节点排列对齐方式。可以是 `UL`、`UR`、`DL` 或 `DR`，其中 U = 上，D = 下，L = 左，R = 右              | string | `undefined`       |
| nodesep   | 布局中节点水平间隔的像素数                                                                          | number | `50`              |
| edgesep   | 布局中边水平间隔的像素数                                                                            | number | `10`              |
| ranksep   | 布局中每个等级之间的像素数                                                                          | number | `50`              |
| marginx   | 图表左右两侧的边距像素数                                                                            | number | `0`               |
| marginy   | 图表上下两侧的边距像素数                                                                            | number | `0`               |
| acyclicer | 如果设置为 greedy，则使用贪婪启发式算法来找到图的反馈弧集。反馈弧集是可以移除以使图无环的边集       | string | `undefined`       |
| ranker    | 为输入图中的每个节点分配等级的算法类型。可能的值：`network-simplex`、`tight-tree` 或 `longest-path` | string | `network-simplex` |
