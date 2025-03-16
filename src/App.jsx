import { useReducer } from 'react';

/* Reducer Function */
const reducer = (state, action) => { // take the current state and an action
  // Based on action.type, update the count
  switch (action.type) {
    /* { ...state } creates a shallow copy of the existing state object.
       This creates a new state object instead of modifying the existing one
    */
    case 'increment':
      return { ...state, count: state.count + 1 }; // Increase count by 1
    case 'decrement':
      return { ...state, count: state.count - 1 }; // Decrease count by 1
    case 'newUserInput':
      return { ...state, userInput: action.payload }; // Update userInput with the value from the input field
    case 'tgColor':
      return { ...state, color: !state.color }; // Toggle color between true and false.
    default:
      throw new Error(); // throw an error if an unknown action is dispatched
  }
}

function App() {

  // Initialize state and use dispatch to update state by sending action objects
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false });

  /* Button Clicks and Dispatching Actions
    The - button calls dispatch({ type: 'decrement' }), decreasing the counter.
    The + button calls dispatch({ type: 'increment' }), increasing the counter.

    state.count holds the counter value, dispatch() triggers the reducer, updating state.count accordingly.
  
    Color Toggle Button:
    The "Color" button toggles color between true and false, changing the text color dynamically.
  */
  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#FFF952' }}>
      <input
        type="text"
        value={state.userInput} // value is controlled by userInput
        onChange={(e) => dispatch({ type: 'newUserInput', payload: e.target.value })} //  Dispatch action to update userInput when text is typed
      /> 
      <br /><br />
      {/* Display the count  */}
      <p>{state.count}</p>
      <section>
        {/* Counter Buttons */}
        <button onClick={(() => dispatch({ type: 'decrement' }))}>-</button>
        <button onClick={(() => dispatch({ type: 'increment' }))}>+</button>
        {/* Color Toggle Button */}
        <button onClick={(() => dispatch({ type: 'tgColor' }))}>Color</button>
      </section>
      <br /><br />
      {/* Display live input text. */}
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;


