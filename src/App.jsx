import { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

// 컴포넌트
const App = () => {

  // 목표데이터들의 묶음배열
  const [goals, setGoals] = useState([]);

  // CourseInput에게 전달할 함수
  const onAddGoal = (goal) => {
    setGoals([ ...goals, goal ]);
  };

  console.log(goals);
  
  
  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={onAddGoal} />
      </section>
      <section id='goals'>
        <CourseList items={goals} />
      </section>
    </div>
  );
}

export default App;
