import { Divider, Radio } from 'antd';
import { OrganizationChart } from 'hqhui';
import React, { useState } from 'react';
import { data } from './data';

export default () => {
  const [direction, setDirection] = useState<'vertical' | 'horizontal'>(
    'vertical',
  );

  const options: any = {
    autoFit: 'view',
    data,
    direction,
    labelField: 'name',
  };

  return (
    <>
      <Radio.Group
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
      >
        <Radio.Button value="vertical">Vertical</Radio.Button>
        <Radio.Button value="horizontal">Horizontal</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <OrganizationChart {...options} />
    </>
  );
};
