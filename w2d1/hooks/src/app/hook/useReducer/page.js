'use client'
import {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1>UseReducer Ppage</h1>
      <p style={{fontSize: '24px', margin: '20px 0'}}>计数：{state.count}</p>
      <button 
        onClick={() => dispatch({type: 'increment'})} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >+1</button>
      <button 
        onClick={() => dispatch({type: 'decrement'})} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer'}}
      >-1</button>
      
      <p>This is the UseReducer Demo page.</p>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
    </div>
  );
}

export default UseReducerDemo;
