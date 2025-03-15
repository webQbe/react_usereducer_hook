# React `useReducer` Hook

- Managing state without `useState` hook
- Managing complex states in React with `useReducer`
- This React app that used 3 different pieces state
    1. `const [userInput, setUserInput] = useState('');` 
    2. `const [count, setCount] = useState(0);` 
    3. `const [color, setColor] = useState(false);` 
    - When user type on the input, the text is displayed on the page
    - Increment and decrement buttons change the number
    - Color button toggles the text color
    - This is a very simple functional component 
    - When we pass these 03 states down as props, we'll also need to pass the 3 setter functions to change them inside child components.
- `useReducer` can make this much simpler
- It is helpful when you have a complex app with many pieces of state