import React from 'react'
import Logical from '../components/Logical'
import Greeting from './../components/Greeting';
import Card from './../components/Card';
import Counter from './../components/Counter';



const Home = () => {
    // logic
    const handleIncrease = () => {}
    // view
    return (      
    <div>Home
      <Logical/>
     <Greeting username="문성민"/>
    <Greeting username="박성혜"/>
    <Greeting username="송주령"/>
    <Card/>
    <Counter onIcreaseClick={handleIncrease}/>
    
  { /* 숫자 5씩 증가하는 카운터 만들기 */}
    < Counter step={5}
    onIcreaseClick=
    {handleIncrease} />
    </div>
  )
}

export default Home