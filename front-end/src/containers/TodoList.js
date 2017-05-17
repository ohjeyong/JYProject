/**
 * Created by oh on 5/16/17.
 */
import React, { Component } from 'react';
import { Icon, Label, Button, Confirm } from 'semantic-ui-react';
import TimeAgo from 'timeago-react';
import { completeTodo, revertCompleteTodo, removeTodo, addLike } from '../actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    state = {open: false};

    show = () => {
        this.setState({open: true});
    };
    handleConfirm = (id) => {
        this.props.removeTodo(id);
        this.setState({open: false});
    };
    handleCancel = () => this.setState({open: false});

    renderRightWrapper = (todo) => {
        if(todo.is_completed) {
            return (
                <div className="TodoRightWrapper">
                    <span style={{fontSize: '1.2rem', color:'teal'}}>완료</span>
                    <TimeAgo datetime={ todo.complete_at } locale="ko"/>
                    <Button onClick={() => this.props.revertCompleteTodo(todo.id)} style={{marginTop: "10px"}} size="tiny" circular icon="reply" />
                </div>
            )
        }else{
            return (
                <div className="TodoRightWrapper">
                    <Button onClick={() => this.props.completeTodo(todo.id)} size="tiny" positive circular icon="checkmark" />
                    <Button onClick={this.show} size="tiny"  circular icon="trash" />
                    <Confirm
                        open={this.state.open}
                        onCancel={this.handleCancel}
                        onConfirm={() => this.handleConfirm(todo.id)}
                        header={todo.content}
                        content='정말 삭제하시겠습니까?'
                    />
                </div>
            )
        }
    };
    render() {
        return (
            <li className={this.props.todo.is_completed ? 'TodoLi complete' : 'TodoLi'}>
                <div className="TodoLeftWrapper">
                    <div className="mask"></div>
                    <div className="upper">
                        <Label color="orange" size="mini">
                            <Icon name="food" /> 음식
                        </Label>
                        <span onClick={() => this.props.addLike(this.props.todo.id)} className="like"><Icon name="like" />{ this.props.todo.like }</span>
                        <div className="TodoContent">
                            { this.props.todo.content }
                        </div>
                    </div>
                    <div className="lower">
                        <TimeAgo datetime={ this.props.todo.created_at } locale="ko" />
                        <span style={{float: 'right'}}><Icon name="user" />{ this.props.todo.author_data.name }</span>
                    </div>
                </div>
                <div className="TodoRightWrapper">
                    {this.renderRightWrapper(this.props.todo)}
                </div>
            </li>
        )
    }
};


export default connect(null, { completeTodo, revertCompleteTodo, removeTodo, addLike })(TodoList);
