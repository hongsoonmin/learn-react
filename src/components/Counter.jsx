import { useState } from "react";

const Counter = ({step = 1, onIncreaseClick}) => {
console.log("🚀 ~ Counter ~ step:", step)

  // 로직
//const count = 0;
//첫번째 변수 : 데이터, 두변째 변수: 함수
const [count, setCount] = useState(0);
const MAX = 50
const MIN = 0

console.log("🚀 ~ Counter ~ coun:", count)

const handleIncrease = () => {
  //console.log('+1');
  if(count >= MAX) {
 return;
  }

  setCount(count + step);
  onIncreaseClick();
}

const handleDecrease = () => {
  console.log('-1');
  //setCount(count - 1);
  setCount((prev) => count <= MIN ? count : prev - step );
  //setCount(count -5;
  
    } 


  // 뷰
  return (
    <div> 
      <h1>카운터</h1>         
      <h2>{count}</h2>
      <button onClick={handleIncrease}>+{step}</button>
      {/* //<button>-1</button>;   */}
      <button onClick={handleDecrease}>-{step}</button>
    </div>  
      )    
}

export default Counter 
