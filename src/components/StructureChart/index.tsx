import { OrganizationChart } from '@ant-design/graphs';
import React, { useEffect } from 'react';

const StructureChart = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/organization-chart.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    data,
  };
  return <OrganizationChart {...options} />;
}

export default StructureChart;