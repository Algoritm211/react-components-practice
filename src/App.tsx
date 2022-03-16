import React, {useState} from 'react';
import './App.css';
import {animated, useSpring} from "react-spring";

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {opacity, transform} = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `rotateX(${isFlipped ? 180 : 0}deg)`
  })

  const onCardToggle = () => {
    setIsFlipped(prevState => !prevState);
  }

  return (
    <div onClick={onCardToggle}>
      <animated.div className='card front' style={{
        opacity: opacity.to((o) => 1 - o),
        transform
      }} />
      <animated.div className='card back' style={{
        opacity,
        transform: transform.to((t) => `${t} rotateX(180deg)`)
      }} />
    </div>
  );
}

export default App;
