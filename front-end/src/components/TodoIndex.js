/**
 * Created by oh on 5/16/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import TodoList from '../containers/TodoList';

class TodoIndex extends Component {
    componentDidMount() {
        this.props.fetchTodoList();
    }

    renderTodoList() {
        return _.map(this.props.todoList, todo => {
            return (
                <TodoList todo={todo} key={todo.id} />
            )
        })
    };

    render() {
        return (
            <ul className="TodoUl">
                {this.renderTodoList()}
            </ul>
        )
    }
}

export default TodoIndex;
