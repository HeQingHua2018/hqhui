"use strict";(self.webpackChunkhqhui=self.webpackChunkhqhui||[]).push([[232],{90648:function(d,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},35609:function(d,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},22770:function(d,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},43046:function(d,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},36353:function(d,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},91557:function(d,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),t={}},59902:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u540D\u79F0",paraId:0},{value:"\u63CF\u8FF0",paraId:0},{value:"\u53C2\u6570",paraId:0},{value:"\u8FD4\u56DE\u503C",paraId:0},{value:"generateRandomString",paraId:0},{value:"\u751F\u6210\u6307\u5B9A\u4F4D\u6570\u968F\u673A\u5B57\u7B26\u4E32,\u9ED8\u8BA4\u53BB\u6389\u4E86\u5BB9\u6613\u6DF7\u6DC6\u7684\u5B57\u7B26",paraId:0},{value:"oOLl,9gq,Vv,Uu,I1\uFF0C\u672A\u6307\u5B9A\u4F4D\u6570\u9ED8\u8BA4 32 \u4F4D",paraId:0},{value:"(length?: number)",paraId:0},{value:"string",paraId:0},{value:"getUUID",paraId:0},{value:"\u751F\u6210\u4E00\u4E2A 32 \u4F4D UUID \u7684\u5B57\u7B26\u4E32",paraId:0},{value:"string",paraId:0}]},42677:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"formatTime",paraId:0,tocIndex:0},{value:"\uFF1A\u5C06\u65F6\u95F4\u6233\u683C\u5F0F\u5316\u6210\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570\u540D",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"timestamp",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u8981\u683C\u5F0F\u5316\u7684\u65F6\u95F4\u6233\uFF0C\u5355\u4F4D\u4E3A\u79D2",paraId:1,tocIndex:1},{value:"format",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"'YYYY-MM-DD hh:mm:ss'",paraId:1,tocIndex:1},{value:"\u8981\u683C\u5F0F\u5316\u6210\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:1,tocIndex:1},{value:"'YYYY-MM-DD hh:mm:ss'",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"\u683C\u5F0F\u5316\u540E\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\u3002",paraId:2,tocIndex:2},{value:`import { formatTime } from 'hqhui';
const datetime = new Date('2025-04-18 11:16:32').getTime();
const dateStr = formatTime(datetime, 'YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss');
console.log(dateStr); // 2025\u5E7404\u670818\u65E5 11:16:32
const dateStr1 = formatTime(datetime, 'YYYY-MM-DD');
console.log(dateStr1); // 2025-04-18
const dateStr2 = formatTime(datetime, 'YYYY/MM/DD');
console.log(dateStr2); // 2025/04/18
`,paraId:3,tocIndex:3}]},31618:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"groupBy",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u901A\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u6839\u636E\u6307\u5B9A\u7684\u89C4\u5219\u8FDB\u884C\u5206\u7EC4\u3002\u5B83\u652F\u6301\u6839\u636E\u5BF9\u8C61\u7684\u5C5E\u6027\u6216\u8005\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u6765\u751F\u6210\u5206\u7EC4\u7684\u952E\uFF0C\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u952E\u5BF9\u5E94\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5305\u542B\u5177\u6709\u76F8\u540C\u952E\u7684\u5143\u7D20\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570\u540D",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u63CF\u8FF0",paraId:1,tocIndex:1},{value:"arr",paraId:1,tocIndex:1},{value:"T[]",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"\u65E0",paraId:1,tocIndex:1},{value:"\u9700\u8981\u8FDB\u884C\u5206\u7EC4\u64CD\u4F5C\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\u4E3A ",paraId:1,tocIndex:1},{value:"T",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"generateKey",paraId:1,tocIndex:1},{value:"string | ((item: T, index: number, array: T[]) => K)",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"\u65E0",paraId:1,tocIndex:1},{value:"\u7528\u4E8E\u751F\u6210\u5206\u7EC4\u952E\u7684\u53C2\u6570\uFF0C\u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u5F62\u5F0F\uFF1A",paraId:1,tocIndex:1},{value:" - ",paraId:1,tocIndex:1},{value:"\u5B57\u7B26\u4E32",paraId:1,tocIndex:1},{value:"\uFF1A\u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u51FD\u6570\u4F1A\u6839\u636E\u8BE5\u5C5E\u6027\u503C\u5BF9\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u5206\u7EC4\u3002",paraId:1,tocIndex:1},{value:" - ",paraId:1,tocIndex:1},{value:"\u51FD\u6570",paraId:1,tocIndex:1},{value:"\uFF1A\u81EA\u5B9A\u4E49\u51FD\u6570\uFF0C\u63A5\u6536\u4EE5\u4E0B\u4E09\u4E2A\u53C2\u6570\uFF1A",paraId:1,tocIndex:1},{value:" - ",paraId:1,tocIndex:1},{value:"item",paraId:1,tocIndex:1},{value:"\uFF1A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\uFF0C\u7C7B\u578B\u4E3A ",paraId:1,tocIndex:1},{value:"T",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:" - ",paraId:1,tocIndex:1},{value:"index",paraId:1,tocIndex:1},{value:"\uFF1A\u5F53\u524D\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15\uFF0C\u7C7B\u578B\u4E3A ",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:" - ",paraId:1,tocIndex:1},{value:"array",paraId:1,tocIndex:1},{value:"\uFF1A\u539F\u59CB\u6570\u7EC4\uFF0C\u7C7B\u578B\u4E3A ",paraId:1,tocIndex:1},{value:"T[]",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u4E3A ",paraId:1,tocIndex:1},{value:"K",paraId:1,tocIndex:1},{value:" \u7684\u503C\uFF0C\u4F5C\u4E3A\u5206\u7EC4\u7684\u952E\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"Record<K, T[]>	",paraId:2,tocIndex:2},{value:"\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u6BCF\u4E2A\u952E\u7C7B\u578B\u4E3A K\uFF0C\u5BF9\u5E94\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\u4E3A T\uFF0C\u8868\u793A\u5177\u6709\u76F8\u540C\u952E\u7684\u5143\u7D20\u96C6\u5408\u3002",paraId:2,tocIndex:2},{value:`import { groupBy } from 'hqhui';
// \u793A\u4F8B\u6570\u636E
const data = [
  {
    name: '\u5F20\u4E09',
    sex: 'F',
    age: 20,
  },
  {
    name: '\u674E\u56DB',
    sex: 'M',
    age: 22,
  },
  {
    name: '\u738B\u4E94',
    sex: 'F',
    age: 30,
  },
  {
    name: '\u54C8\u54C8',
    sex: 'M',
    age: 20,
  },
];

// \u6309\u6027\u522B\u5206\u7EC4
const arr = groupBy(data, 'sex');
console.log(arr);
// \u8F93\u51FA:
// {
//   F: [
//     { name: '\u5F20\u4E09', sex: 'F', age: 20 },
//     { name: '\u738B\u4E94', sex: 'F', age: 30 }
//   ],
//   M: [
//     { name: '\u674E\u56DB', sex: 'M', age: 22 },
//     { name: '\u54C8\u54C8', sex: 'M', age: 20 }
//   ]
// }

// \u6309\u5E74\u9F84\u5206\u7EC4
const arr1 = groupBy(data, (p) => p.age);
console.log(arr1);
// \u8F93\u51FA:
// {
//   20: [
//     { name: '\u5F20\u4E09', sex: 'F', age: 20 },
//     { name: '\u54C8\u54C8', sex: 'M', age: 20 }
//   ],
//   22: [
//     { name: '\u674E\u56DB', sex: 'M', age: 22 }
//   ],
//   30: [
//     { name: '\u738B\u4E94', sex: 'F', age: 30 }
//   ]
// }

// \u6309\u6027\u522B\u548C\u5E74\u9F84\u7EC4\u5408\u5206\u7EC4
const arr2 = groupBy(data, (p) => \`\${p.sex}-\${p.age}\` as const);
console.log(arr2);
// \u8F93\u51FA:
// {
//   'F-20': [
//     { name: '\u5F20\u4E09', sex: 'F', age: 20 }
//   ],
//   'M-22': [
//     { name: '\u674E\u56DB', sex: 'M', age: 22 }
//   ],
//   'F-30': [
//     { name: '\u738B\u4E94', sex: 'F', age: 30 }
//   ],
//   'M-20': [
//     { name: '\u54C8\u54C8', sex: 'M', age: 20 }
//   ]
// }

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// \u6309\u5947\u5076\u6027\u5206\u7EC4
const arr3 = groupBy(data1, (p) => (p % 2 === 0 ? '\u5076\u6570' : '\u5947\u6570'));
console.log(arr3);
// \u8F93\u51FA:
// {
//   \u5947\u6570: [1, 3, 5, 7, 9],
//   \u5076\u6570: [2, 4, 6, 8, 10]
// }
`,paraId:3,tocIndex:3},{value:"\u5F53 generateKey \u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u8981\u786E\u4FDD\u6570\u7EC4\u5143\u7D20\u662F\u5BF9\u8C61\uFF0C\u4E14\u5BF9\u8C61\u5305\u542B\u6307\u5B9A\u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u82E5\u4F7F\u7528\u81EA\u5B9A\u4E49\u51FD\u6570\u4F5C\u4E3A generateKey \u53C2\u6570\uFF0C\u9700\u4FDD\u8BC1\u51FD\u6570\u8FD4\u56DE\u7684\u952E\u7C7B\u578B\u4E0E\u6CDB\u578B K \u5339\u914D\uFF0C\u5426\u5219\u53EF\u80FD\u5F15\u53D1\u7C7B\u578B\u9519\u8BEF\u3002",paraId:4,tocIndex:4}]},34885:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u8282\u70B9\u6CE8\u5165\u5668\u662F\u4E00\u4E2A\u7528\u4E8E\u52A8\u6001\u6CE8\u5165\u8282\u70B9\u914D\u7F6E\u3001\u7C7B\u578B\u548C\u81EA\u5B9A\u4E49\u63A7\u4EF6\u7684\u5DE5\u5177\u3002\u5B83\u5141\u8BB8\u5728\u8FD0\u884C\u65F6\u6269\u5C55\u548C\u4FEE\u6539\u8282\u70B9\u7CFB\u7EDF\uFF0C\u5B9E\u73B0\u9AD8\u5EA6\u7684\u7075\u6D3B\u6027\u548C\u53EF\u6269\u5C55\u6027\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u914D\u5408 DynamicNode \u4F7F\u7528",paraId:1,tocIndex:0},{value:"Field",paraId:2,tocIndex:1},{value:": \u5355\u4E2A\u914D\u7F6E\u5B57\u6BB5\u7684\u5B9A\u4E49\uFF0C\u5305\u542B\u7C7B\u578B\u3001\u6807\u7B7E\u3001\u9ED8\u8BA4\u503C\u7B49\u5C5E\u6027",paraId:2,tocIndex:1},{value:"Schema",paraId:2,tocIndex:1},{value:": \u8282\u70B9\u7684\u914D\u7F6E\u7ED3\u6784\uFF0C\u5305\u542B\u8282\u70B9\u7C7B\u578B\u3001\u6807\u7B7E\u548C\u5B57\u6BB5\u5217\u8868",paraId:2,tocIndex:1},{value:"NodeInjector",paraId:2,tocIndex:1},{value:": \u6CE8\u5165\u5668\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u7BA1\u7406\u8282\u70B9\u914D\u7F6E\u3001\u7C7B\u578B\u548C\u63A7\u4EF6",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8FD4\u56DE\u503C",paraId:3,tocIndex:3},{value:"initializeInjector",paraId:3,tocIndex:3},{value:"\u521D\u59CB\u5316\u6CE8\u5165\u5668\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"initialSchemas",paraId:3,tocIndex:3},{value:": \u521D\u59CB\u8282\u70B9\u914D\u7F6E",paraId:3,tocIndex:3},{value:"initialTypes",paraId:3,tocIndex:3},{value:": \u521D\u59CB\u8282\u70B9\u7C7B\u578B",paraId:3,tocIndex:3},{value:"initialWidgets",paraId:3,tocIndex:3},{value:": \u521D\u59CB\u63A7\u4EF6",paraId:3,tocIndex:3},{value:"DifyNodeInjector",paraId:3,tocIndex:3},{value:" \u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"getInjector",paraId:3,tocIndex:3},{value:"\u83B7\u53D6\u5DF2\u521D\u59CB\u5316\u7684\u6CE8\u5165\u5668\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"\u65E0",paraId:3,tocIndex:3},{value:"DifyNodeInjector",paraId:3,tocIndex:3},{value:" \u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"\u540D\u79F0",paraId:4,tocIndex:4},{value:"\u63CF\u8FF0",paraId:4,tocIndex:4},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8FD4\u56DE\u503C",paraId:4,tocIndex:4},{value:"injectNodeSchema",paraId:4,tocIndex:4},{value:"\u6CE8\u5165\u8282\u70B9\u5143\u6570\u636E",paraId:4,tocIndex:4},{value:"type",paraId:4,tocIndex:4},{value:": \u8282\u70B9\u7C7B\u578B",paraId:4,tocIndex:4},{value:"schema",paraId:4,tocIndex:4},{value:": \u8282\u70B9\u914D\u7F6E",paraId:4,tocIndex:4},{value:"\u65E0",paraId:4,tocIndex:4},{value:"injectNodeType",paraId:4,tocIndex:4},{value:"\u6CE8\u5165\u8282\u70B9\u7C7B\u578B",paraId:4,tocIndex:4},{value:"type",paraId:4,tocIndex:4},{value:": \u8282\u70B9\u7C7B\u578B",paraId:4,tocIndex:4},{value:"label",paraId:4,tocIndex:4},{value:": \u8282\u70B9\u6807\u7B7E",paraId:4,tocIndex:4},{value:"\u65E0",paraId:4,tocIndex:4},{value:"injectWidget",paraId:4,tocIndex:4},{value:"\u6CE8\u5165\u81EA\u5B9A\u4E49\u63A7\u4EF6",paraId:4,tocIndex:4},{value:"type",paraId:4,tocIndex:4},{value:": \u63A7\u4EF6\u7C7B\u578B",paraId:4,tocIndex:4},{value:"widget",paraId:4,tocIndex:4},{value:": \u63A7\u4EF6\u7EC4\u4EF6",paraId:4,tocIndex:4},{value:"\u65E0",paraId:4,tocIndex:4},{value:"\u540D\u79F0",paraId:5,tocIndex:5},{value:"\u63CF\u8FF0",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:5,tocIndex:5},{value:"\u8FD4\u56DE\u503C",paraId:5,tocIndex:5},{value:"getNodeSchemas",paraId:5,tocIndex:5},{value:"\u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u8282\u70B9\u5143\u6570\u636E",paraId:5,tocIndex:5},{value:"\u65E0",paraId:5,tocIndex:5},{value:"\u8282\u70B9\u914D\u7F6E\u5BF9\u8C61",paraId:5,tocIndex:5},{value:"getNodeTypes",paraId:5,tocIndex:5},{value:"\u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u8282\u70B9\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u65E0",paraId:5,tocIndex:5},{value:"\u8282\u70B9\u7C7B\u578B\u6570\u7EC4",paraId:5,tocIndex:5},{value:"getWidgets",paraId:5,tocIndex:5},{value:"\u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u63A7\u4EF6",paraId:5,tocIndex:5},{value:"\u65E0",paraId:5,tocIndex:5},{value:"\u63A7\u4EF6\u5BF9\u8C61",paraId:5,tocIndex:5},{value:"\u540D\u79F0",paraId:6,tocIndex:6},{value:"\u63CF\u8FF0",paraId:6,tocIndex:6},{value:"\u53C2\u6570",paraId:6,tocIndex:6},{value:"\u8FD4\u56DE\u503C",paraId:6,tocIndex:6},{value:"subscribe",paraId:6,tocIndex:6},{value:"\u8BA2\u9605\u6CE8\u5165\u5668\u6570\u636E\u53D8\u5316",paraId:6,tocIndex:6},{value:"callback",paraId:6,tocIndex:6},{value:": \u56DE\u8C03\u51FD\u6570",paraId:6,tocIndex:6},{value:"\u53D6\u6D88\u8BA2\u9605\u51FD\u6570",paraId:6,tocIndex:6},{value:`interface Field {
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
`,paraId:7,tocIndex:8},{value:`interface Schema {
  type: string;
  label: string;
  config: Field[];
}
`,paraId:8,tocIndex:9},{value:`interface NodeInjector {
  // \u6CE8\u5165\u8282\u70B9\u5143\u6570\u636E
  injectNodeSchema(type: string, schema: Schema): void;
  // \u6CE8\u5165\u8282\u70B9\u7C7B\u578B
  injectNodeType(type: string, label: string): void;
  // \u6CE8\u5165\u81EA\u5B9A\u4E49\u63A7\u4EF6
  injectWidget(type: string, widget: React.ElementType<any>): void;
  // \u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u8282\u70B9\u5143\u6570\u636E
  getNodeSchemas(): Record<string, Schema>;
  // \u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u8282\u70B9\u7C7B\u578B
  getNodeTypes(): { value: string; label: string }[];
  // \u83B7\u53D6\u6240\u6709\u6CE8\u5165\u7684\u63A7\u4EF6
  getWidgets(): Record<string, React.ElementType<any>>;
  // \u8BA2\u9605\u6570\u636E\u53D8\u5316
  subscribe(callback: () => void): () => void;
}
`,paraId:9,tocIndex:10},{value:`import { initializeInjector } from 'hqhui';

// \u521D\u59CB\u8282\u70B9\u914D\u7F6E
const initialSchemas = {
  'text-input': {
    type: 'text-input',
    label: '\u6587\u672C\u8F93\u5165',
    config: [
      {
        type: 'string',
        field: 'placeholder',
        label: '\u5360\u4F4D\u6587\u672C',
        defaultValue: '\u8BF7\u8F93\u5165',
      },
    ],
  },
};

// \u521D\u59CB\u8282\u70B9\u7C7B\u578B
const initialTypes = [{ value: 'text-input', label: '\u6587\u672C\u8F93\u5165' }];

// \u521D\u59CB\u5316\u6CE8\u5165\u5668
const injector = initializeInjector(initialSchemas, initialTypes);
`,paraId:10,tocIndex:12},{value:`import { injectNodeSchema, injectNodeType } from 'hqhui';

// \u5B9A\u4E49\u65B0\u8282\u70B9\u914D\u7F6E
const buttonSchema = {
  type: 'button',
  label: '\u6309\u94AE',
  config: [
    {
      type: 'string',
      field: 'text',
      label: '\u6309\u94AE\u6587\u672C',
      defaultValue: '\u6309\u94AE',
    },
    {
      type: 'boolean',
      field: 'disabled',
      label: '\u662F\u5426\u7981\u7528',
      defaultValue: false,
    },
  ],
};

// \u6CE8\u5165\u8282\u70B9\u914D\u7F6E\u548C\u7C7B\u578B
injectNodeSchema('button', buttonSchema);
injectNodeType('button', '\u6309\u94AE');
`,paraId:11,tocIndex:13},{value:`import { getInjector } from 'hqhui';

const injector = getInjector();

// \u8BA2\u9605\u6570\u636E\u53D8\u5316
const unsubscribe = injector.subscribe(() => {
  console.log('\u8282\u70B9\u914D\u7F6E\u5DF2\u66F4\u65B0');
  const nodeTypes = injector.getNodeTypes();
  console.log('\u5F53\u524D\u8282\u70B9\u7C7B\u578B:', nodeTypes);
});

// \u53D6\u6D88\u8BA2\u9605
// unsubscribe();
`,paraId:12,tocIndex:14}]},19114:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u540D\u79F0",paraId:0},{value:"\u63CF\u8FF0",paraId:0},{value:"\u53C2\u6570",paraId:0},{value:"\u8FD4\u56DE\u503C",paraId:0},{value:"loopData",paraId:0},{value:"\u9012\u5F52\u5904\u7406\u6570\u636E\uFF0C\u53EF\u7528\u6570\u636E\u52A0\u5DE5\u3001\u6570\u636E\u5904\u7406\uFF0C\u6BD4\u5982\u589E\u52A0/\u79FB\u9664/\u8C03\u6574\u67D0\u4E9B\u5C5E\u6027\uFF08\u503C\uFF09",paraId:0},{value:"(treeNodes:Array<TreeNode>,func:(originalData:TreeNode,originalDataParent?:TreeNode)=>void)",paraId:0},{value:"\u65E0",paraId:0},{value:"flatTreeData",paraId:0},{value:"\u5C06\u6811\u5F62\u6570\u636E\u6241\u5E73\u5316",paraId:0},{value:"(treeNodes: Array<TreeNode>)",paraId:0},{value:"Array<TreeNode>",paraId:0},{value:"list2Tree",paraId:0},{value:"\u7B80\u5355\u6570\u7EC4\u8F6C\u6362\u4E3A\u6811\u7ED3\u6784,\u6CE8\u610F\u6B64\u65B9\u6CD5\u5C06\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u6570\u636E",paraId:0},{value:"(data: Array<TreeNode>, rowKey = 'key', pidKey = 'parent')",paraId:0},{value:"Array<TreeNode>",paraId:0},{value:"findNode",paraId:0},{value:"\u6839\u636E\u8282\u70B9\u6807\u8BC6\u67E5\u627E\u8282\u70B9\u4FE1\u606F",paraId:0},{value:"(treeNodes: Array<TreeNode>, key: string,keyName: string='key')",paraId:0},{value:"TreeNode | undefined",paraId:0},{value:"findNodeByValue",paraId:0},{value:"\u6839\u636E\u8282\u70B9\u6807\u8BC6\u67E5\u627E\u8282\u70B9\u4FE1\u606F",paraId:0},{value:"(treeNodes: Array<TreeNode>, value: string)",paraId:0},{value:"TreeNode |undefined",paraId:0},{value:"getParent",paraId:0},{value:"\u6839\u636E\u8282\u70B9\u6807\u8BC6\u83B7\u53D6\u5176\u7236\u8282\u70B9",paraId:0},{value:"(key: string, treeNodes: Array<TreeNode>,keyName: string='key')",paraId:0},{value:"TreeNode | undefined",paraId:0},{value:"getParentByValue",paraId:0},{value:"\u6839\u636E\u8282\u70B9\u6807\u8BC6\u83B7\u53D6\u5176\u7236\u8282\u70B9",paraId:0},{value:"(value: string, treeNodes: Array<TreeNode>)",paraId:0},{value:"TreeNode |undefined",paraId:0}]},51370:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u540D\u79F0",paraId:0},{value:"\u63CF\u8FF0",paraId:0},{value:"\u53C2\u6570",paraId:0},{value:"\u8FD4\u56DE\u503C",paraId:0},{value:"isMatchRegex",paraId:0},{value:"\u5224\u65AD\u6307\u5B9A\u503C\u662F\u5426\u5339\u914D\u6B63\u5219",paraId:0},{value:"(reg:RegExp,value:any)",paraId:0},{value:"boolean",paraId:0},{value:"isUrl",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A\u4E00\u4E2A url \u5730\u5740",paraId:0},{value:"(value: string)",paraId:0},{value:"boolean",paraId:0},{value:"isEmail",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A\u4E00\u4E2A\u90AE\u7BB1\u5730\u5740",paraId:0},{value:"(value: string)",paraId:0},{value:"boolean",paraId:0},{value:"isPhone",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A\u4E00\u4E2A\u8054\u7CFB\u7535\u8BDD",paraId:0},{value:"(value: string)",paraId:0},{value:"boolean",paraId:0},{value:"isIdNumber",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A\u4E00\u4E2A\u8EAB\u4EFD\u8BC1\u53F7",paraId:0},{value:"(value: string)",paraId:0},{value:"boolean",paraId:0},{value:"isTrue",paraId:0},{value:"\u5224\u65AD\u662F\u5426\u4E3A true",paraId:0},{value:"(value: boolean)",paraId:0},{value:"boolean",paraId:0},{value:"isFalse",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A false",paraId:0},{value:"(value: boolean)",paraId:0},{value:"boolean",paraId:0},{value:"isNumber",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A\u6570\u5B57",paraId:0},{value:"(value: any)",paraId:0},{value:"boolean",paraId:0},{value:"isPositiveInteger",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u4E3A\u975E\u96F6\u6574\u6570",paraId:0},{value:"(value: any)",paraId:0},{value:"boolean",paraId:0},{value:"isPositiveIntegerAndZero",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u975E\u8D1F\u6574\u6570\uFF08\u5305\u542B 0\uFF09",paraId:0},{value:"(value: any)",paraId:0},{value:"boolean",paraId:0},{value:"isGeneral",paraId:0},{value:"\u5224\u65AD\u503C\u662F\u5426\u5305\u542B\u82F1\u6587\u5B57\u6BCD \u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF",paraId:0},{value:"(value: string)",paraId:0},{value:"boolean",paraId:0},{value:"isIncludeHtml",paraId:0},{value:"\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B HTML \u4EE3\u7801",paraId:0},{value:"(value: string)",paraId:0},{value:"boolean",paraId:0}]}}]);
