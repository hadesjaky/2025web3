'use client'
import {useState, useEffect} from 'react';

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('UseEffect Demo');

  useEffect(() => {
    document.title = `计数: ${count}`;
    // console.log('useEffect');
  } , [count]);
  useEffect(() => {
    console.log('组件挂载');
    return () => {
      console.log('组件卸载');}
    }, []);


  return (
    <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
      <h1>{title}</h1>
      <p style={{fontSize: '24px', margin: '20px 0'}}>计数：{count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }}
      >+1</button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer'}}
      >-1</button>
      
      <p>查看浏览器变化.</p>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
    </div>
  );
}

export default UseEffectDemo;
