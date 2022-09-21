import * as React from 'react';
import Card from '../../../components/UI/Card';
import './index.css';
const LogForm = (props) => {
  return (
    <Card className="log-form">
      <div className="log-form-item">
        <label className="log-form-label" htmlFor="date">
          日期
        </label>
        <input className="log-form-input" id="date" type="date" />
      </div>
      <div className="log-form-item">
        <label className="log-form-label" htmlFor="desc">
          内容
        </label>
        <input className="log-form-input" id="desc" type="text" />
      </div>
      <div className="log-form-item">
        <label className="log-form-label" htmlFor="time">
          时长
        </label>
        <input className="log-form-input" id="time" type="number" />
      </div>
    </Card>
  );
};
export default LogForm;
