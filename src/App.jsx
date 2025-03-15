import { useState } from 'react';

function App() {
  /* Create three pieces of state */
  const [userInput, setUserInput] = useState(''); // Store the text from the input field
  const [count, setCount] = useState(0); // Keep track of a numerical value, initially set to 0
  const [color, setColor] = useState(false); // Toggle between two text colors

  /* Counter Buttons:
  The + and - buttons update count using setCount(prev => prev ± 1), modifying the previous state. 
  
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
      <p>{count}</p>
      <section>
        {/* Counter Buttons */}
        <button onClick={(() => setCount(prev => prev - 1))}>-</button>
        <button onClick={(() => setCount(prev => prev + 1))}>+</button>
        <button onClick={(() => setColor(prev => !prev))}>Color</button>
      </section>
      <br /><br />
      <p>{userInput}</p>
    </main>
  );
}

export default App;


