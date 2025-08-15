/*
 * @File:
 * @desc:
 * @author: heqinghua
 * @date: 2025年08月12日 14:36:27
 * @example: 调用示例
 */

import { message } from 'antd';
import { injectNodeSchema, injectNodeType, injectWidget } from 'hqhui';
import { nodeConfigs } from './schema';

/**
 * 注入动态节点
 */
const initInjectDynamicNode = (): boolean => {
  try {
    // 遍历所有节点配置并注入
    nodeConfigs.forEach((config) => {
      // 从schema中获取类型和标签
      const { type, label } = config.schema;

      // 注入节点类型
      injectNodeType(type, label);

      // 注入节点元数据
      injectNodeSchema(type, config.schema);

      // 注入相关控件
      Object.entries(config?.widgets || {}).forEach(
        ([widgetType, widgetComponent]) => {
          injectWidget(widgetType, widgetComponent);
        },
      );
    });

    // 更新已注入节点列表
    // setInjectedNodeTypes(getNodeTypes());
    // setAllInjected(true);
    message.success('所有动态节点已成功注入！');
    return true;
  } catch (error) {
    message.error('注入节点时发生错误：' + (error as Error).message);
    console.error('注入节点错误:', error);
    return false;
  }
};

// const refershNode = () => {

// }

export { initInjectDynamicNode, nodeConfigs };
