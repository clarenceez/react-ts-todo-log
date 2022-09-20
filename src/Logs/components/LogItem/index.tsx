import * as React from 'react';
import './index.css';

export default function LogItem(): any {
  return (
    <div className="log-item">
      <div className="calendar-icon">
        <div className="cal-month"> 九月</div>
        <div>20</div>
      </div>
      <div className="flex-1 d-flex-col items-center">
        <div className="log-title">学习React</div>
        <div className="log-time">40分钟</div>
      </div>
    </div>
  );
}
