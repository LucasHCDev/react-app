import React from 'react';
import './App.css';
import {useSpring, animated} from 'react-spring';


function App() {

const props = useSpring({
  to: async (next, cancel) => {
    await next({opacity: 1, color: '#ffaaee'})
    await next({opacity: 0, color: 'rbg(14, 26, 19'})
    await next({opacity: 1, color: 'light-blue'})
  },
  from: {opacity: 0, color: 'red'}
})
  return <div className="App"> 
  <h1>My React App</h1>
  
  <animated.div style={props}>
    I will fade in and out
  </animated.div>
  </div>
  /* return (
    <div className="App">
      <h1>My First React App
      </h1>
      <p>Using spring</p>
    </div>

  ); */
}

export default App;
