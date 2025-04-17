// @ts-nocheck
import { plugin } from './plugin';
import { ApplyPluginsType } from '/Users/heqinghua/MyProjectSpace/hqhui/node_modules/umi/node_modules/@umijs/runtime';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('/Users/heqinghua/MyProjectSpace/hqhui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const {
          default: Previewer,
        } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [
          props.match.params.uuid,
          props.location.query.wrapper,
          props.location.query.capture,
        ]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('/Users/heqinghua/MyProjectSpace/hqhui/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/components/button',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/components/Button/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/components/Button/index.md',
            updatedTime: 1744336207000,
            componentName: 'Button',
            category: 'Components',
            title: 'Button 按钮',
            toc: 'content',
            group: {
              title: '基础组件',
              order: 0,
              path: '/components',
            },
            slugs: [
              {
                depth: 1,
                value: 'Button 按钮',
                heading: 'button-按钮',
              },
              {
                depth: 2,
                value: '介绍',
                heading: '介绍',
              },
              {
                depth: 2,
                value: '示例',
                heading: '示例',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
            ],
            hasPreviewer: true,
          },
          title: 'Button 按钮 - hqhui',
        },
        {
          path: '/components/line-chart',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/components/LineChart/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/components/LineChart/index.md',
            updatedTime: 1744855795808,
            componentName: 'LineChart',
            category: 'Components',
            title: 'lineChart',
            toc: 'content',
            group: {
              title: '图表',
              order: 1,
              path: '/components',
            },
            slugs: [
              {
                depth: 1,
                value: 'BaseChart',
                heading: 'basechart',
              },
              {
                depth: 2,
                value: '介绍',
                heading: '介绍',
              },
              {
                depth: 2,
                value: '示例',
                heading: '示例',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
            ],
            hasPreviewer: true,
          },
          title: 'lineChart - hqhui',
        },
        {
          path: '/components/primary-button',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/components/PrimaryButton/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/components/PrimaryButton/index.md',
            updatedTime: 1744854925646,
            componentName: 'PrimaryButton',
            category: 'Components',
            title: 'PrimaryButton',
            toc: 'content',
            group: {
              title: '二次封装组件',
              order: 1,
              path: '/components',
            },
            slugs: [
              {
                depth: 1,
                value: 'PrimaryButton 按钮',
                heading: 'primarybutton-按钮',
              },
              {
                depth: 2,
                value: '介绍',
                heading: '介绍',
              },
              {
                depth: 2,
                value: '示例',
                heading: '示例',
              },
              {
                depth: 2,
                value: 'APi',
                heading: 'api',
              },
            ],
            hasPreviewer: true,
          },
          title: 'PrimaryButton - hqhui',
        },
        {
          path: '/utils/chart',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/utils/chart/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/utils/chart/index.md',
            updatedTime: 1744702934000,
            category: 'utils',
            title: '字符',
            group: {
              title: '工具函数',
              order: 2,
              path: '/utils',
            },
            slugs: [],
          },
          title: '字符 - hqhui',
        },
        {
          path: '/utils/format-time',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/utils/formatTime/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/utils/formatTime/index.md',
            updatedTime: 1744702934000,
            category: 'utils',
            title: '时间格式化',
            group: {
              title: '工具函数',
              order: 1,
              path: '/utils',
            },
            slugs: [
              {
                depth: 3,
                value: 'formatTime',
                heading: 'formattime',
              },
              {
                depth: 4,
                value: '示例',
                heading: '示例',
              },
              {
                depth: 3,
                value: '参数',
                heading: '参数',
              },
              {
                depth: 4,
                value: '返回值',
                heading: '返回值',
              },
            ],
            hasPreviewer: true,
          },
          title: '时间格式化 - hqhui',
        },
        {
          path: '/utils/tree',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/utils/tree/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/utils/tree/index.md',
            updatedTime: 1744793891000,
            componentName: 'tree',
            category: 'utils',
            title: '树形结构',
            group: {
              title: '工具函数',
              order: 4,
              path: '/utils',
            },
            slugs: [],
          },
          title: '树形结构 - hqhui',
        },
        {
          path: '/utils/validation',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/src/utils/validation/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/utils/validation/index.md',
            updatedTime: 1744702934000,
            category: 'utils',
            title: '校验',
            group: {
              title: '工具函数',
              order: 3,
              path: '/utils',
            },
            slugs: [],
          },
          title: '校验 - hqhui',
        },
        {
          path: '/components',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/docs/components.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/components.md',
            updatedTime: 1744336207000,
            title: '组件总览',
            order: 1,
            toc: 'content',
            slugs: [
              {
                depth: 2,
                value: '概述',
                heading: '概述',
              },
              {
                depth: 2,
                value: '使用说明',
                heading: '使用说明',
              },
            ],
          },
          title: '组件总览 - hqhui',
        },
        {
          path: '/',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/docs/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1744336207000,
            hero: {
              title: 'HQH-UI',
              description: null,
              actions: [
                {
                  text: '快速开始 →',
                  link: '/guide',
                },
              ],
            },
            slugs: [],
            title: 'Index',
          },
          title: 'Index - hqhui',
        },
        {
          path: '/utils',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/docs/utils.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/utils.md',
            updatedTime: 1744336207000,
            title: '介绍',
            order: 1,
            toc: 'menu',
            slugs: [
              {
                depth: 2,
                value: '快速上手',
                heading: '快速上手',
              },
              {
                depth: 2,
                value: '特别说明',
                heading: '特别说明',
              },
            ],
          },
          title: '介绍 - hqhui',
        },
        {
          path: '/changelogs',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/docs/changelogs/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/changelogs/index.md',
            updatedTime: 1744611653000,
            title: '更新日志',
            order: 1,
            toc: 'menu',
            slugs: [
              {
                depth: 2,
                value: '发布周期',
                heading: '发布周期',
              },
              {
                depth: 2,
                value: '1.0.2 (2025-04-14)',
                heading: '102-2025-04-14',
              },
              {
                depth: 2,
                value: '1.0.1 (2025-04-11)',
                heading: '101-2025-04-11',
              },
            ],
            group: {
              path: '/changelogs',
              title: 'Changelogs',
            },
          },
          title: '更新日志 - hqhui',
        },
        {
          path: '/guide',
          component:
            require('/Users/heqinghua/MyProjectSpace/hqhui/docs/guide/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/guide/index.md',
            updatedTime: 1744336207000,
            title: '介绍',
            order: 1,
            toc: 'menu',
            slugs: [
              {
                depth: 2,
                value: '什么是HQHUI?',
                heading: '什么是hqhui',
              },
              {
                depth: 2,
                value: '快速上手',
                heading: '快速上手',
              },
              {
                depth: 2,
                value: '特别说明',
                heading: '特别说明',
              },
            ],
            group: {
              path: '/guide',
              title: 'Guide',
            },
          },
          title: '介绍 - hqhui',
        },
      ],
      title: 'hqhui',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
