import * as React from 'react';
import Card from '../../../components/UI/Card';
import './index.css';

function getMonthCN(date: Date): string {
  return date.toLocaleString('zh-CN', { month: 'long' });
}

export default function LogItem(props): any {
  const itemRef = React.useRef(null);
  console.log(itemRef);

  const { date, title, time } = props;
  const onClk = () => {
    const c: any = itemRef.current;
    console.log(c);
  };
  return (
    <Card className="log-item" ref={itemRef} onClick={onClk}>
      <div className="calendar-icon">
        <div className="cal-month"> {getMonthCN(date)}</div>
        <div>{date.getDate()}</div>
      </div>
      <div className="flex-1 d-flex-col items-center">
        <div className="log-title">{title}</div>
        <div className="log-time">{time}分钟</div>
      </div>
    </Card>
  );
}
