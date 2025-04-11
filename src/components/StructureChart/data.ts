// mock.ts
const mockData = {
  id: 'g1',
  name: '入库',
  date: '2021-1-1',
  version: '2022-2-2',
  executor: '小明',
  owner: '大d',
  status: 'warehouse',
  children: [
    {
      id: 'g12',
      rate: 0.627,
      status: 'primary',
      versionName: '我是第一次清洗后版本',
      children: [
        {
          id: 'g121',
          name: '清洗策略：第1种清洗策略名',
          date: '2021-1-1',
          version: '2022-2-2',
          collapsed: true,
          status: 'clean',
          executor: '小明',
          owner: '小d',
          children: [
            {
              id: 'g1211',
              rate: 1.0,
              status: 'primary',
              versionName: '我是第二次清洗后版本',
              children: [
                {
                  id: 'g1221',
                  name: '转bin策略：转bin',
                  version: '2022-2-2',
                  date: '2021-1-1',
                  status: 'bin',
                  executor: '小明',
                  owner: '小d',
                },
                {
                  id: 'g1222',
                  name: '质检策略：我是一种质检策略',
                  date: '2021-1-1',
                  version: '2022-2-2',
                  status: 'inspect',
                  executor: '小明',
                  owner: '小d',
                },
                {
                  id: 'g1223',
                  name: '打标策略：我是一种打标策略',
                  date: '2021-1-1',
                  version: '2022-2-2',
                  status: 'marking',
                  executor: '小明',
                  owner: '小d',
                },
                {
                  id: 'g10011',
                  name: '清洗策略：第二种清洗策略',
                  date: '2021-1-1',
                  collapsed: true,
                  version: '2022-2-2',
                  status: 'clean',
                  executor: '小明',
                  owner: '小d',
                  children: [
                    {
                      id: 'g12211',
                      status: 'primary',
                      versionName: '最终版本',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default mockData;
