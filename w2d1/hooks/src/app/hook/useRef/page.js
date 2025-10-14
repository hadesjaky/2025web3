'use client'

import {useState, useRef} from 'react';

function UseRefDemo() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [render, setRender] = useState(0);

  const focusInput = () => {
    inputRef.current.focus();
  };
  const incrementCount = () => {
    countRef.current += 1;
    console.log("ref计算：", countRef.current);
  };

  return (
    <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1>UseRef 演示</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input 
            ref={inputRef}
            placeholder="点击按钮聚焦我"
            style={{ margin: '20px 0', padding: '10px', fontSize: '18px', border: '1px solid #ccc', borderRadius: '5px', width: '200px'}}></input>
      </div>
      <button 
        onClick={focusInput} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >聚焦输入框</button>
      <p style={ {fontSize: '24px', margin: '20px 0'}}>ref计数（不会触发重渲染）：{countRef.current}</p>
      <button 
        onClick={incrementCount} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >增加ref计数</button>
      <p style={ {fontSize: '24px', margin: '20px 0'}}>渲染次数:{render}</p>
      <button 
        onClick={() => setRender(render + 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >重新渲染</button>
      
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
    </div>
  );
}

export default UseRefDemo;
