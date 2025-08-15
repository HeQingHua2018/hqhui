/*
 * @File:
 * @desc:
 * @author: heqinghua
 * @date: 2025年08月15日 09:34:01
 * @example: 调用示例
 */
import { Divider, Typography } from 'antd';
import { Button, DynamicNode } from 'hqhui';
import React from 'react';
import { initInjectDynamicNode } from './example';

export default () => {
  return (
    <div
      className="demo-container"
      style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <Typography.Title level={2}>节点配置差异化演示</Typography.Title>
      <Button type="primary" onClick={initInjectDynamicNode}>
        动态节点注入
      </Button>
      <Divider />
      <DynamicNode
        callbackData={(data) => {
          console.log('配置信息数据：' + JSON.stringify(data));
        }}
        callValidateData={(data) => {
          console.log('校验数据：' + JSON.stringify(data));
        }}
      />
    </div>
  );
};
