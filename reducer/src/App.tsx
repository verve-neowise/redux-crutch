import React, { useEffect } from 'react';
import { fetchTodos, fetchUsers } from './features/action/action';
import { useAppDispatch } from './store';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
