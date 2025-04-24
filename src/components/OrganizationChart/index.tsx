import {
  OrganizationChart,
  type OrganizationChartOptions,
} from '@ant-design/charts';
import React from 'react';

export default (props: OrganizationChartOptions) => {
  const options: OrganizationChartOptions = {
    direction: 'vertical',
    ...props,
  };
  return <OrganizationChart {...options} />;
};
