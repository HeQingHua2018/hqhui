---
category: utils
title: 字符 # 组件的标题，会在菜单侧边栏展示
group: # 分组
  title: 工具函数 # 所在分组的名称
  order: 2 # 分组排序，值越小越靠前
---

| 名称                 | 描述                                                                                        | 参数                | 返回值   |
| -------------------- | ------------------------------------------------------------------------------------------- | ------------------- | -------- |
| generateRandomString | 生成指定位数随机字符串,默认去掉了容易混淆的字符<br/>oOLl,9gq,Vv,Uu,I1，未指定位数默认 32 位 | `(length?: number)` | `string` |
| getUUID              | 生成一个 32 位 UUID 的字符串                                                                |                     | `string` |
