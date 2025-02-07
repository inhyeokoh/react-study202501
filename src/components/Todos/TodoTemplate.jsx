import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const DUMMY_TODOS = [
  { id: 1, title: '리액트 공부', done: true },
  { id: 2, title: '점심 먹기', done: false },
  { id: 3, title: '프로젝트하기', done: false },
  { id: 4, title: '숙제하기', done: true },
];

const TodoTemplate = () => {

  // 할일 목록을 상태관리
  const [todoList, setTodoList] = useState(DUMMY_TODOS);

  // 데이터 상향식 전달을 위한 할 일 추가 함수 내려주기
  const addTodo = (newTitle) => { 
    const newTodo = {
      id: Math.random().toString()
      , title: newTitle
      , done: false
    };

    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader />
      <TodoMain items={todoList} />
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoTemplate;
