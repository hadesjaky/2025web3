'use client'
import {createContext, useContext, useState} from 'react';

const ThemeContext = createContext();

function Child() {
  const theme = useContext(ThemeContext);
  return <p style={{ fontSize: '24px', margin: '20px 0'}}>当前主题：{theme}</p>
}

function UseContextDemo() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
        <div style={{textAlign: 'center', padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
        <h1>UseContext Demo Ppage</h1>
        <Child />
        <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
            style={{ padding: '10px 20px', fontSize: '18px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: theme === 'light' ? 'white' : 'black', cursor: 'pointer' }}
        >切换主题</button>
        <p>This is the UseContext Demo page.</p>
        <li style={{ listStyle: 'none',padding: 0}}><a href="/hook" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>back</a></li>
        </div>
    </ThemeContext.Provider>
  );
}

export default UseContextDemo;
