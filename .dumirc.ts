import { defineConfig } from 'dumi';
import path from 'path';
const isProd = process.env.HQH_ENV === 'production';
console.log('HQH_ENV:', process.env.HQH_ENV);
console.log('isProd:', isProd);
export default defineConfig({
  outputPath: 'docs-dist', // 默认静态资源输出目录
  base: isProd ? '/hqhui/' : '/', // 若仓库名为 username.github.io，则设为 '/'
  publicPath: isProd ? '/hqhui/' : '/', // 资源路径前缀，与 base 一致
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
  alias: {
    '@assets': path.resolve(__dirname, 'src/assets'),
  },
  resolve: {
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'util', dir: 'src/utils' },
    ],
  },
  exportStatic: false,
});
