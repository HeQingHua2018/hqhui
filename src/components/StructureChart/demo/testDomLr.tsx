import { StructureChart } from 'hqhui';
import React from 'react';
import { domDataLr } from './data/testDomLr';

export default () => {
  return (
    <StructureChart
      type={'LR'}
      mode={'html'}
      width={320}
      height={178}
      toolbar={true}
      endArrow={'show'}
      dataSource={domDataLr}
    />
  );
};
