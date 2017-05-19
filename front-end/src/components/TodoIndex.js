/**
 * Created by oh on 5/16/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Confirm, Header } from 'semantic-ui-react';
import TodoList from '../containers/TodoListContainer';
import TodoInputContainer from '../containers/TodoInputContainer';
import Filter from '../components/Filter';

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

    filterTodo = () => {
        const filterCategory = this.props.filter.category;
        const filterCompleteState = this.props.filter.completeState;
        const filteredTodoObject = {};
        _.map(this.props.todoList, todo => {
            if(todo.category === filterCategory || filterCategory === 'ALL'){
                if(filterCompleteState === '0'){
                    filteredTodoObject[todo.id] = todo
                }else if(filterCompleteState === '1' && !todo.is_completed){
                    filteredTodoObject[todo.id] = todo
                }else if(filterCompleteState === '2' && todo.is_completed){
                    filteredTodoObject[todo.id] = todo
                }
            }
        });
        return filteredTodoObject;
    };

    renderTodoList() {
        const filteredTodoList = this.filterTodo();
        if(Object.keys(filteredTodoList).length === 0) {
            const style = {
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            };
            return (
                <Header style={style} as="h4" disabled>
                    표시할 TODO가 없습니다.<br />
                    필터를 다르게 적용해보세요.
                </Header>
            )
        }
        const orderedList = _.orderBy(filteredTodoList, ['id'], 'desc');
        return _.map(orderedList, todo => {
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
