import { formatTime } from 'hqhui';
import React from 'react';

const BaseDateDemo: React.FC = () => {
  const datetime = new Date('2025-04-18 11:16:32').getTime();
  const dateStr = formatTime(datetime, 'YYYY年MM月DD日 hh:mm:ss');
  const dateStr1 = formatTime(datetime, 'YYYY-MM-DD');
  const dateStr2 = formatTime(datetime, 'YYYY/MM/DD');

  return (
    <>
      <h3>时间格式化</h3>
      <p>时间戳：{datetime}</p>
      <p>格式化时间YYYY年MM月DD日 hh:mm:ss：{dateStr}</p>
      <p>格式化时间YYYY-MM-DD：{dateStr1}</p>
      <p>格式化时间YYYY/MM/DD：{dateStr2}</p>
    </>
  );
};

export default BaseDateDemo;
