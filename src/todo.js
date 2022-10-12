import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export const TodoList = () => {
    const {store, actions} = useContext(AppContext);
    return <div>
        {store.todos.map((task, i) => (<li>{task}</li>))}
        <button onClick={() => actions.addTask("I am the task " + store.todos.length)}> + add </button>
    </div>
};