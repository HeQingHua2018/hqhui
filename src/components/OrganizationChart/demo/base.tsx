import { OrganizationChart } from 'hqhui';
import React from 'react';
import { data } from './data';
export default () => {
  const options: any = {
    autoFit: 'view',
    data,
    labelField: 'name',
  };
  return <OrganizationChart {...options} />;
};
