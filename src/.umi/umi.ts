// @ts-nocheck
import '@@/core/devScripts';
import { createHistory } from './core/history';
import { plugin } from './core/plugin';
import './core/pluginRegister';
import './core/polyfill';
import { getRoutes } from './core/routes';
import { renderClient } from '/Users/heqinghua/MyProjectSpace/hqhui/node_modules/umi/node_modules/@umijs/preset-built-in/node_modules/@umijs/renderer-react/dist/index18.js';
import { ApplyPluginsType } from '/Users/heqinghua/MyProjectSpace/hqhui/node_modules/umi/node_modules/@umijs/runtime';

const getClientRender = (args: { hot?: boolean; routes?: any[] } = {}) =>
  plugin.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue: () => {
      const opts = plugin.applyPlugins({
        key: 'modifyClientRenderOpts',
        type: ApplyPluginsType.modify,
        initialValue: {
          routes: args.routes || getRoutes(),
          plugin,
          history: createHistory(args.hot),
          isServer: process.env.__IS_SERVER,
          rootElement: 'root',
          defaultTitle: ``,
        },
      });
      return renderClient(opts);
    },
    args,
  });

const clientRender = getClientRender();
export default clientRender();

window.g_umi = {
  version: '3.5.43',
};

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    const ret = require('./core/routes');
    if (ret.then) {
      ret.then(({ getRoutes }) => {
        getClientRender({ hot: true, routes: getRoutes() })();
      });
    } else {
      getClientRender({ hot: true, routes: ret.getRoutes() })();
    }
  });
}
