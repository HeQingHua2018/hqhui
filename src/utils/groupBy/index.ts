/**
 * 根据给定的键值生成器对数组元素进行分组。
 *
 * @param arr 要进行分组的数组。
 * @param generateKey 用于生成键值的函数或属性名。如果传入的是字符串，则将该字符串视为对象属性名，从每个数组元素中获取该属性的值作为键值；如果传入的是函数，则调用该函数生成键值。
 * @returns 返回一个对象，其键为分组键，值为对应键的所有数组元素组成的数组。
 */
function groupBy<T, K extends keyof any>(
  arr: T[],
  generateKey: string | ((item: T, index: number, array: T[]) => K),
): Record<K, T[]> {
  let keyGenerator: (item: T, index: number, array: T[]) => K;

  // 如果 generateKey 是字符串，则将其转换为从对象中获取该属性值的函数
  if (typeof generateKey === 'string') {
    const propName = generateKey;
    keyGenerator = (item) => item[propName as keyof T] as unknown as K;
  } else {
    keyGenerator = generateKey;
  }

  const result: Record<K, T[]> = {} as Record<K, T[]>;

  // 遍历数组中的每个元素
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = keyGenerator(item, i, arr);

    // 如果结果对象中不存在该键，则初始化一个空数组
    if (!result[key]) {
      result[key] = [];
    }

    // 将当前元素添加到对应键的数组中
    result[key].push(item);
  }

  return result;
}

export default groupBy;
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
// 按年龄分组
const arr1 = groupBy(data, (p) => p.age);
// 按性别和年龄组合分组
const arr2 = groupBy(data, (p) => `${p.sex}-${p.age}` as const);

console.log(arr);
console.log(arr1);
console.log(arr2);

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 按奇偶性分组
const arr3 = groupBy(data1, (p) => (p % 2 === 0 ? '偶数' : '奇数'));
console.log(arr3);
