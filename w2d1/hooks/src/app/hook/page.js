import React from 'react';

function HookPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', maxWidth: '500px', margin: '0 auto'}}>
      <h1>React Hooks 演示</h1>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useState" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useState</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useReducer" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useReducer</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useContext" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useContext</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useEffect" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useEffect</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useCallback" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useCallback</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useMemo" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useMemo</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useRef" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useRef</a></li>
      <li style={{ listStyle: 'none',padding: 0}}><a href="/hook/useLayoutEffect" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px', padding: '10px'}}>useLayoutEffect</a></li>
      <p>This is the pay page.</p>
    </div>
  );
}

export default HookPage;
