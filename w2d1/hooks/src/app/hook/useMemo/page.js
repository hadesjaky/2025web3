'use client'
import {useState, useMemo} from 'react';

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveValue = useMemo(() => {
      console.log('计算昂贵的值');
      return count * 100;
  }, [count]);

  return (
    <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1>UseMemo 演示</h1>
      <p style={{fontSize: '24px', margin: '20px 0'}}>计数：{count}</p>
      <p style={{fontSize: '24px', margin: '20px 0'}}>昂贵计算结果：{expensiveValue}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >+1</button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer'}}
      >-1</button>
      <br />
      <input value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="输入文本试试"
        style={{ margin: '20px 0', padding: '10px', fontSize: '18px', border: '1px solid #ccc', borderRadius: '5px', width: '200px'}}></input>
      <p style={ {fontSize: '24px', margin: '20px 0'}}>输入的文本：{text}</p>
      
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
    </div>
  );
}

export default UseMemoDemo;
