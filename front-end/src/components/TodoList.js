/**
 * Created by oh on 5/16/17.
 */
import React from 'react';
import { Icon, Label, Button } from 'semantic-ui-react';
import TimeAgo from 'timeago-react';

const TodoList = ({ todo }) => {
    return (
        <li className="TodoLi">
            <div className="TodoLeftWrapper">
                <div className="upper">
                    <Label color="orange" size="mini">
                        <Icon name="food" /> 음식
                    </Label>
                    <span className="like"><Icon name="like" />{ todo.like }</span>
                    <div className="TodoContent">
                        { todo.content }
                    </div>
                </div>
                <div className="lower">
                    <TimeAgo datetime={ todo.created_at } locale="ko" />
                    <span style={{float: 'right'}}><Icon name="user" />{ todo.author_data.name }</span>
                </div>
            </div>
            <div className="TodoRightWrapper">
                <Button positive circular icon="checkmark" />
                <Button circular icon="trash" />
            </div>
        </li>
    )
};

export default TodoList;