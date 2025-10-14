'use client'
import {useState} from 'react';

function UseStatePage() {
  const [count, setCount] = useState(0);
  return (
    <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1>UseState Ppage</h1>
      <p style={{fontSize: '24px', margin: '20px 0'}}>计数：{count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >+1</button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer'}}
      >-1</button>
      
      <p>This is the UseState page.</p>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
    </div>
  );
}

export default UseStatePage;
