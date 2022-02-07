import React, { ReactElement } from 'react';
// props 받아올 값의 type 을 선언
interface Iprops {
  title: string;
}

const TodoTitle = function TodoTitle({ title }: Iprops): ReactElement {
  return <h2>{title}</h2>;
};

export default TodoTitle;
