// @ts-nocheck
import rawCode1 from '!!dumi-raw-code-loader!/Users/heqinghua/MyProjectSpace/hqhui/src/components/Button/demo/base.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/heqinghua/MyProjectSpace/hqhui/src/components/LineChart/demo/base.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/heqinghua/MyProjectSpace/hqhui/src/components/LineChart/demo/data.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/heqinghua/MyProjectSpace/hqhui/src/components/PrimaryButton/demo/base.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/heqinghua/MyProjectSpace/hqhui/src/utils/formatTime/demo/base.tsx?dumi-raw-code';

export default {
  'button-base': {
    component:
      require('/Users/heqinghua/MyProjectSpace/hqhui/src/components/Button/demo/base.tsx')
        .default,
    previewerProps: {
      sources: { _: { tsx: rawCode1 } },
      dependencies: {
        react: { version: '>=16.9.0' },
        hqhui: { version: '1.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'Button',
      identifier: 'button-base',
    },
  },
  'linechart-base': {
    component:
      require('/Users/heqinghua/MyProjectSpace/hqhui/src/components/LineChart/demo/base.tsx')
        .default,
    previewerProps: {
      sources: {
        _: { tsx: rawCode2 },
        'data.ts': { import: './data', content: rawCode3 },
      },
      dependencies: {
        react: { version: '>=16.9.0' },
        hqhui: { version: '1.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'LineChart',
      identifier: 'linechart-base',
    },
  },
  'primarybutton-base': {
    component:
      require('/Users/heqinghua/MyProjectSpace/hqhui/src/components/PrimaryButton/demo/base.tsx')
        .default,
    previewerProps: {
      sources: { _: { tsx: rawCode4 } },
      dependencies: {
        react: { version: '>=16.9.0' },
        hqhui: { version: '1.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      componentName: 'PrimaryButton',
      identifier: 'primarybutton-base',
    },
  },
  'formattime-base': {
    component:
      require('/Users/heqinghua/MyProjectSpace/hqhui/src/utils/formatTime/demo/base.tsx')
        .default,
    previewerProps: {
      sources: { _: { tsx: rawCode5 } },
      dependencies: {
        react: { version: '>=16.9.0' },
        hqhui: { version: '1.0.0' },
        'react-dom': { version: '>=16.9.0' },
      },
      identifier: 'formattime-base',
    },
  },
};
