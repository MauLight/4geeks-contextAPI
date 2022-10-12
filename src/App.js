import React from 'react';
import { ContextWrapper } from './AppContext'
import './App.css';
import { TodoList } from './todo';

function App() {
  return (
<ContextWrapper>
  <TodoList />
</ContextWrapper>
  );
}

export default App;
