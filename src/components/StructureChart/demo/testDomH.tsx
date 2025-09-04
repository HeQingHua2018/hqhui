import { StructureChart } from 'hqhui';
import React from 'react';
import { domDataH } from './data/testDomH';

export default () => {
  return (
    <StructureChart
      type={'H'}
      mode={'html'}
      toolbar={true}
      hideParentIcon={true}
      dataSource={domDataH}
    />
  );
};
