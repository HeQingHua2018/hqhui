import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist', // 默认静态资源输出目录
  base: '/hqhui/', // 若仓库名为 username.github.io，则设为 '/'
  publicPath: '/hqhui/', // 资源路径前缀，与 base 一致
  themeConfig: {
    name: 'HQHUI',
    editLink: false,
    // lastUpdated: false,
    logo: false,
    footer: false,
    locales: [{ id: 'zh-CN', name: '简体中文' }],
    nav: [
      { title: '使用指南', link: '/guide' },
      { title: '组件', link: '/components' },
      { title: '工具', link: '/utils' },
      { title: '更新日志', link: '/changelogs' },
    ],
    metas: [],
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'util', dir: 'src/utils' },
    ],
  },
});
