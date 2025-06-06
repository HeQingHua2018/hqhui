---
category: utils
title: 分组函数 # 组件的标题，会在菜单侧边栏展示
group: # 分组
  title: 工具函数 # 所在分组的名称
  order: 5 # 分组排序，值越小越靠前
---

### 概述

`groupBy` 是一个通用的工具函数，用于将数组中的元素根据指定的规则进行分组。它支持根据对象的属性或者自定义的函数来生成分组的键，最终返回一个对象，其中每个键对应一个数组，数组包含具有相同键的元素。

<!-- ### 函数签名
```ts
function groupBy<T, K extends keyof any>(
    arr: T[],
    generateKey: string | ((item: T, index: number, array: T[]) => K)
): Record<K, T[]>;
``` -->

### 参数

| 参数名        | 类型                                                    | 是否必填 | 默认值 | 描述                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr`         | `T[]`                                                   | 是       | 无     | 需要进行分组操作的数组，数组元素的类型为 `T`。                                                                                                                                                                                                                                                                                                                |
| `generateKey` | `string \| ((item: T, index: number, array: T[]) => K)` | 是       | 无     | 用于生成分组键的参数，支持以下两种形式：<br/> - **字符串**：表示对象的属性名，函数会根据该属性值对数组元素进行分组。<br/> - **函数**：自定义函数，接收以下三个参数：<br/> - `item`：数组当前元素，类型为 `T`。<br/> - `index`：当前元素在数组中的索引，类型为 `number`。<br/> - `array`：原始数组，类型为 `T[]`。<br/>函数返回类型为 `K` 的值，作为分组的键。 |

### 返回值

| 类型             | 描述                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| `Record<K, T[]>	` | 返回一个对象，对象的每个键类型为 K，对应一个数组，数组元素类型为 T，表示具有相同键的元素集合。 |

### 示例

```ts
import { groupBy } from 'hqhui';
// 示例数据
const data = [
  {
    name: '张三',
    sex: 'F',
    age: 20,
  },
  {
    name: '李四',
    sex: 'M',
    age: 22,
  },
  {
    name: '王五',
    sex: 'F',
    age: 30,
  },
  {
    name: '哈哈',
    sex: 'M',
    age: 20,
  },
];

// 按性别分组
const arr = groupBy(data, 'sex');
console.log(arr);
// 输出:
// {
//   F: [
//     { name: '张三', sex: 'F', age: 20 },
//     { name: '王五', sex: 'F', age: 30 }
//   ],
//   M: [
//     { name: '李四', sex: 'M', age: 22 },
//     { name: '哈哈', sex: 'M', age: 20 }
//   ]
// }

// 按年龄分组
const arr1 = groupBy(data, (p) => p.age);
console.log(arr1);
// 输出:
// {
//   20: [
//     { name: '张三', sex: 'F', age: 20 },
//     { name: '哈哈', sex: 'M', age: 20 }
//   ],
//   22: [
//     { name: '李四', sex: 'M', age: 22 }
//   ],
//   30: [
//     { name: '王五', sex: 'F', age: 30 }
//   ]
// }

// 按性别和年龄组合分组
const arr2 = groupBy(data, (p) => `${p.sex}-${p.age}` as const);
console.log(arr2);
// 输出:
// {
//   'F-20': [
//     { name: '张三', sex: 'F', age: 20 }
//   ],
//   'M-22': [
//     { name: '李四', sex: 'M', age: 22 }
//   ],
//   'F-30': [
//     { name: '王五', sex: 'F', age: 30 }
//   ],
//   'M-20': [
//     { name: '哈哈', sex: 'M', age: 20 }
//   ]
// }

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 按奇偶性分组
const arr3 = groupBy(data1, (p) => (p % 2 === 0 ? '偶数' : '奇数'));
console.log(arr3);
// 输出:
// {
//   奇数: [1, 3, 5, 7, 9],
//   偶数: [2, 4, 6, 8, 10]
// }
```

### 注意事项

- 当 generateKey 参数为字符串时，要确保数组元素是对象，且对象包含指定属性。
- 若使用自定义函数作为 generateKey 参数，需保证函数返回的键类型与泛型 K 匹配，否则可能引发类型错误。
