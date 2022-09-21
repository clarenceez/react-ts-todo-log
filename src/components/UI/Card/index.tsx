import * as React from 'react';
import './index.css';
export default function Card(props: any): any {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
