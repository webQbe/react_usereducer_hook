import { useReducer, useState } from 'react';

/* Reducer Function */
const reducer = (state, action) => { // take the current state and an action
  // Based on action.type, update the count
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // Increase count by 1
    case 'decrement':
      return { count: state.count - 1 }; // Decrease count by 1
    default:
      throw new Error(); // throw an error if an unknown action is dispatched
  }
}

function App() {

  // Initialize counter state with { count: 0 } and provide dispatch() for updating state
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [userInput, setUserInput] = useState(''); // Store the text from the input field
  const [color, setColor] = useState(false); // Toggle between two text colors

  /* Button Clicks and Dispatching Actions
    The - button calls dispatch({ type: 'decrement' }), decreasing the counter.
    The + button calls dispatch({ type: 'increment' }), increasing the counter.

  state.count holds the counter value, dispatch() triggers the reducer, updating state.count accordingly.
  
  Color Toggle Button:
  The "Color" button toggles color between true and false, changing the text color dynamically.

  Dynamic Rendering:
    The <p> tag displays the count.
    Another <p> tag displays whatever is typed into the input field.
  */
  return (
    <main className="App" style={{ color: color ? '#FFF' : '#FFF952' }}>
      <input
        type="text"
        value={userInput} // value is controlled by userInput
        onChange={(e) => setUserInput(e.target.value)} // update userInput with the current text.
      />
      <br /><br />
      <p>{state.count}</p>
      <section>
        {/* Counter Buttons */}
        <button onClick={(() => dispatch({ type: 'decrement' }))}>-</button>
        <button onClick={(() => dispatch({ type: 'increment' }))}>+</button>
        {/* Color Toggle Button */}
        <button onClick={(() => setColor(prev => !prev))}>Color</button>
      </section>
      <br /><br />
      <p>{userInput}</p>
    </main>
  );
}

export default App;


