// @ts-nocheck
import apis from '@@/dumi/apis';
import config from '@@/dumi/config';
import demos from '@@/dumi/demos';
import React from 'react';
import Layout from '/Users/heqinghua/MyProjectSpace/hqhui/node_modules/@umijs/preset-dumi/lib/theme/layout';

export default (props) => (
  <Layout {...props} config={config} demos={demos} apis={apis} />
);
