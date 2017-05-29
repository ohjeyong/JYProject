/**
 * Created by oh on 5/18/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Icon, Label, Button, Divider } from 'semantic-ui-react';
import TimeAgo from 'timeago-react';
import TodoCommentIndex from './TodoCommentIndex';


class TodoList extends Component {
    renderRightWrapper = (todo) => {
        if(todo.is_completed) {
            return (
                <div className="TodoRightWrapper">
                    <span style={{fontSize: '1.2rem', color:'teal'}}>완료</span>
                    <TimeAgo datetime={ todo.complete_at } locale="ko"/>
                    <Button
                        onClick={() => this.props.revertCompleteTodo(todo.id)}
                        style={{marginTop: "10px"}}
                        size="tiny"
                        icon="reply"
                        circular
                    />
                </div>
            )
        }else{
            return (
                <div className="TodoRightWrapper">
                    <Button
                        onClick={() => this.props.completeTodo(todo.id)}
                        size="tiny"
                        icon="checkmark"
                        positive
                        circular
                    />
                    <Button onClick={() => this.props.onConfirmRemoveTodo(todo.id)} size="tiny"  circular icon="trash" />
                </div>
            )
        }
    };

    renderCategoryIcon = (todo) => {
        if(todo.category === 'FOOD') {
            return (
                <Label color="orange" size="mini">
                    <Icon name="food" /> 먹을 곳
                </Label>
            )
        }else if(todo.category === 'PLACE') {
            return (
                <Label color="teal" size="mini">
                    <Icon name="marker" /> 갈 곳
                </Label>
            )
        }else if(todo.category === 'TODO') {
            return (
                <Label color="blue" size="mini">
                    <Icon name="star" /> 할 것
                </Label>
            )
        }
    };

    renderTags = () => {
        return (
            <Label.Group className="TodoTagGroup" tag>
                {_.map(this.props.todo.tag_list, tag => {
                    return (
                        <Label key={tag.id} as="span">{ tag.name }</Label>
                    )
                })}
            </Label.Group>
        )
    };

    render() {
        return (
            <li className={`TodoLi bounceIn animated ${this.props.todo.is_completed ? 'complete': ''}`}>
                <div className="TodoWrapper">
                    <div className="TodoLeftWrapper">
                        <div className="mask"></div>
                        <div className="upper">
                            {this.renderCategoryIcon(this.props.todo)}
                            <span onClick={() => this.props.addLike(this.props.todo.id)} className="like">
                            <Icon name="like" />{ this.props.todo.like }
                        </span>
                            <div className="TodoContent">
                                { this.props.todo.content }
                            </div>
                            { this.renderTags() }
                        </div>
                        <div className="lower">
                            <span className="CommentToggle">댓글 ({this.props.todo.todo_comment_list.length})</span>
                            <span>
                            <TimeAgo datetime={ this.props.todo.created_at } locale="ko" />
                            <Icon style={{marginLeft: '10px'}} name="user" />{ this.props.todo.author_data.name }
                        </span>
                        </div>
                    </div>
                    <div className="TodoRightWrapper">
                        {this.renderRightWrapper(this.props.todo)}
                    </div>
                </div>
                <Divider className="CommentDivider" />
                <TodoCommentIndex todo={this.props.todo} />
            </li>
        )
    }
}

export default TodoList;