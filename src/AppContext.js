import React, { useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
    const [store, setStore] = useState({
        todos: ['make the bed', 'take out the trash']
    });

    const [actions, setActions] = useState({
        addTask: title => setStore({ ...store, todos: store.todos.concat(title) })
    });

    return (
        <AppContext.Provider value={{ store, actions }}>
            {props.children}
        </AppContext.Provider>
    )
}
