import * as React from 'react';
import Card from '../components/UI/Card';
import LogItem from './components/LogItem';
import LogForm from './components/LogForm';
import './index.css';

export default function Logs(): any {
  const logList = [
    { date: new Date(2022, 8, 21), title: '学习React', time: '49', id: 1 },
    {
      date: new Date(2022, 8, 22),
      title: '学习React-native',
      time: '40',
      id: 2,
    },
  ];
  const items = logList.map((x) => <LogItem key={x.id} {...x} />);
  return (
    <div>
      <LogForm />
      <Card className="logs">{items}</Card>
    </div>
  );
}
