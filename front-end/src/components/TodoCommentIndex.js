/**
 * Created by oh on 5/29/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Comment, Form } from 'semantic-ui-react';
import TimeAgo from 'timeago-react';


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
                    <Form>
                        <Form.Input action="쓰기" />
                    </Form>
                </div>
            </div>
        )
    }
}

export default TodoCommentIndex;