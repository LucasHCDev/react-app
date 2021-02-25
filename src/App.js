import React from 'react';

/*
import ReactDOM from 'react-dom'; */
import './App.css';
import {useSpring, animated} from 'react-spring';


function App() {

const [state, toggle] = useState(true)
const { x } = useSpring({
  from: { x: 0 },
  x: state ? 1 : 0,
  config: {duration: 1000}   
})

return (
  <div onClick={() => toggle(!state)}>
    <animated.div
    style={{
      opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
      transform: x
      .interpolate({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
      })
      .interpolate(x => `scale(${x})`)
    }}>
      click
    </animated.div>
  </div>
)
/*
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
  </div> */

  /* return (
    <div className="App">
      <h1>My First React App
      </h1>
      <p>Using spring</p>
    </div>

  ); */
  }

export default App;
