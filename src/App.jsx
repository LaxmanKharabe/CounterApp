import { useReducer, useState } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RES":
      return { count: 0 };
    default:
      return state;
  }
}
const initValue = { count: 0 };
const App = () => {
  const [state, dispatch] = useReducer(reducer, initValue);
  const [theme, setTheme] = useState('white-theme');
  const [btntheme, setBtntheme] = useState('white-btn');

  function SwitchThem(e){
    if(e.target.checked){
      setTheme('dakr-theme');
      setBtntheme('dark-btn');
      
    }else{
      setTheme('white-theme');
      setBtntheme('white-btn');
    }
  }


  
  return (
    <div className={`app ${theme}`}>
      <label className='switch'>
        <input type="checkbox" onClick={SwitchThem}/>
        <span className='slider'></span>
      </label>
      <h1>Counter</h1>
      <p>{state.count}</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INC" })} className={`btn ${btntheme}`}>INCREASE</button>
        <button onClick={() => dispatch({ type: "RES" })} className={`btn ${btntheme}`}>RESET</button>
        <button onClick={() => dispatch({ type: "DEC" })} className={`btn ${btntheme}`}>DECREASE</button>
      </div>
    </div>
  )
}

export default App;
