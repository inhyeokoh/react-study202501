import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {

  // ExpenseFilter에서 선택한 연도값을 여기서 출력
  console.log('필터 연도값을 출력');
  
  return (
    <div className='expenses'>
      <ExpenseFilter />
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
    </div>
  );
};

export default ExpenseList;
