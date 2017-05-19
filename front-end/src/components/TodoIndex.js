/**
 * Created by oh on 5/16/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Confirm } from 'semantic-ui-react';
import TodoList from '../containers/TodoListContainer';
import TodoInputContainer from '../containers/TodoInputContainer';
import Filter from './Filter';

class TodoIndex extends Component {
    state = {
        open: false,
        removeTargetTodoId: null
    };

    showConfirmModal = (id) => {
        this.setState({
            open: true,
            removeTargetTodoId: id
        })
    };

    handleConfirm = () => {
        this.props.removeTodo(this.state.removeTargetTodoId);
        this.setState({
            open: false,
            removeTargetTodoId: null
        });
    };

    handleCancel = () => this.setState({open: false});

    componentDidMount() {
        this.props.fetchTodoList();
    }

    renderTodoList() {
        return _.map(_.orderBy(this.props.todoList, ['id'], ['desc']), todo => {
            return (
                <TodoList onConfirmRemoveTodo={this.showConfirmModal} todo={todo} key={todo.id} />
            )
        })
    };

    render() {
        return (
            <div style={{maxWidth: '600px', margin: 'auto', padding: '10px'}}>
                <Filter />
                <TodoInputContainer />
                <ul className="TodoUl">
                    {this.renderTodoList()}
                </ul>
                 <Confirm
                     open={this.state.open}
                     onCancel={this.handleCancel}
                     onConfirm={this.handleConfirm}
                     content='정말 삭제하시겠습니까?'
                 />
            </div>
        )
    }
}

export default TodoIndex;
