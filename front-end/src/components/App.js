/**
 * Created by oh on 5/16/17.
 */
import React from 'react';
import Header from './Header';
import TodoIndex from './TodoIndex';

const App = () => {
    return (
        <div>
            <Header title="This is title"/>
            <TodoIndex />
        </div>
    )
};

export default App;