/**
 * Created by oh on 5/29/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import TimeAgo from 'timeago-react';
import TodoCommentInput from './TodoCommentInput';


class TodoCommentIndex extends Component {
    renderCommentList = () => {
        return _.map(this.props.comments, eachComment => {
            return (
                <Comment key={ eachComment.id }>
                    {/*<Comment.Avator src="/JYProject/static/user.png" />*/}
                    <Comment.Content>
                        <Comment.Author as="span">{ eachComment.author_data.name }</Comment.Author>
                        <Comment.Metadata>
                            <TimeAgo datetime={ eachComment.created_at } locale="ko" />
                        </Comment.Metadata>
                        <Comment.Text>{ eachComment.content }</Comment.Text>
                    </Comment.Content>
                </Comment>
            )
        })
    };

    render() {
        return (
            <div className="TodoCommentWrapper">
                <Comment.Group style={{margin: 0}}>
                    { this.renderCommentList() }
                </Comment.Group>
                <div className="TodoCommentInputWrapper">
                    <TodoCommentInput />
                </div>
            </div>
        )
    }
}

export default TodoCommentIndex;