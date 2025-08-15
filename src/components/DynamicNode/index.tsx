/*
 * @File:
 * @desc:
 * @author: heqinghua
 * @date: 2025年08月15日 09:28:34
 * @example: 调用示例
 */
import { Card, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  getInjector,
  getNodeSchemas,
  getNodeTypes,
  initializeInjector,
} from '../../utils/nodeInjector';
import {
  nodeSchemas as initialSchemas,
  nodeTypes as initialTypes,
} from './data';
import { Field } from './type';
import DynamicNodeForm from './widget';

// 立即初始化注入器 - 确保在组件渲染前完成
initializeInjector(initialSchemas, initialTypes);

export interface DynamicNodeProps {
  /**
   * @description 当前表单项数据
   * @type function
   *
   */
  callbackData?: (data: Record<string, any>) => void;
  /**
   * @description 当前表单项校验通过的数据
   * @type function
   *
   */
  callValidateData?: (data: Record<string, any>) => void;
}

const DynamicNode: React.FC<DynamicNodeProps> = ({
  callbackData,
  callValidateData,
}: DynamicNodeProps) => {
  const [selectedNodeType, setSelectedNodeType] = useState<string>();
  const [nodeConfig, setNodeConfig] = useState<Record<string, any>>({});
  const [nodeSchemas, setNodeSchemas] = useState<Record<string, any>>(
    getNodeSchemas(),
  );
  const [nodeTypes, setNodeTypes] = useState<
    { value: string; label: string }[]
  >(getNodeTypes());

  // 监听节点元数据和类型变化
  useEffect(() => {
    const updateData = () => {
      setNodeSchemas(getNodeSchemas());
      setNodeTypes(getNodeTypes());
    };

    // 初始化数据
    updateData();

    // 使用订阅机制监听变化
    const unsubscribe = getInjector().subscribe(updateData);
    return () => unsubscribe();
  }, []);
  const currentSchema =
    nodeSchemas[selectedNodeType as keyof typeof nodeSchemas];

  // 当节点类型改变时重置配置
  useEffect(() => {
    // 初始化默认值
    const initialConfig: Record<string, any> = {};
    if (currentSchema && currentSchema.config) {
      currentSchema.config.forEach((field: Field) => {
        if (field.defaultValue !== undefined) {
          initialConfig[field.field] = field.defaultValue;
        }
      });
    }
    setNodeConfig(initialConfig);
  }, [selectedNodeType, currentSchema]);

  // 监听配置变化
  useEffect(() => {
    if (callbackData) {
      callbackData?.(nodeConfig);
    }
    console.log('可选节点列表：', nodeTypes);
  }, [nodeConfig, callbackData, nodeTypes]);

  return (
    <>
      <Card title="节点类型选择" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" size="middle">
          <Select
            value={selectedNodeType}
            placeholder="请选择节点类型"
            onChange={(value) => setSelectedNodeType(value)}
            style={{ width: 240 }}
            allowClear
          >
            {nodeTypes.map((type) => (
              <Select.Option key={type.value} value={type.value}>
                {type.label}
              </Select.Option>
            ))}
          </Select>
        </Space>
      </Card>

      {currentSchema && (
        <>
          <Card
            title={`${currentSchema?.label || '节点'}配置`}
            style={{ marginBottom: '24px' }}
          >
            {currentSchema && (
              <DynamicNodeForm
                schema={currentSchema}
                value={nodeConfig}
                onChange={setNodeConfig}
                callValidateData={callValidateData}
              />
            )}
          </Card>

          <Card title="当前配置数据">
            <pre
              style={{
                backgroundColor: '#f5f5f5',
                padding: '16px',
                borderRadius: '4px',
                overflowX: 'auto',
              }}
            >
              {JSON.stringify(nodeConfig, null, 2)}
            </pre>
          </Card>
        </>
      )}
    </>
  );
};

export default DynamicNode;
