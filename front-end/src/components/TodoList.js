/**
 * Created by oh on 5/16/17.
 */
import React from 'react';

const TodoList = ({ todo }) => {
    return (
        <li>{ todo.title }</li>
    )
};

export default TodoList;