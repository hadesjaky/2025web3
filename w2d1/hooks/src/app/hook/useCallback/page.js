'use client'
import { Concert_One } from 'next/font/google';
import {useState, useCallback, memo} from 'react';

const Child = memo(({ onClick, label }) => {
    console.log(`${label} 子组件渲染`);
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}>
            {label}
        </button>
    );
});
    
Child.displayName = 'Child';

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleIncrement = useCallback(() => {
    setCount( priv => priv + 1);
    console.log("使用了useCallback的函数");
  },[]);

  const handleTextChange = () => {
    setText(text + '！');
    console.log("没有使用useCallback的函数");
  }
  return (
    <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1>UseCallback Ppage</h1>
      <p style={{fontSize: '24px', margin: '20px 0'}}>计数：{count}</p>
      <p style={{fontSize: '24px', margin: '20px 0'}}>文本：{text}</p>
      <div style={{ margin: '20px 0'}}>
        <Child 
            onClick={handleIncrement} label="使用useCallback"            
        ></Child>
        <Child 
            onClick={handleTextChange} label="普通函数"
        ></Child>
      </div>
      <input value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="输入文本试试"
        style={{ margin: '20px 0', padding: '10px', fontSize: '18px', border: '1px solid #ccc', borderRadius: '5px', width: '200px'}}></input>
      <p style={{ fontSize: '24px', margin: '20px 0', color: '#666' }}>打开控制台查看渲染次数</p>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
    </div>
  );
}

export default UseCallbackDemo;
