/**
 * Created by oh on 5/29/17.
 */
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class TodoCommentInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content !== ''){
            console.log(this.state.content);
            this.setState({
                content: '',
                todo: this.props.todo.id
            })
        }
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input value={ this.state.content } name="content" onChange={ (e, data) => this.setState({content: data.value}) } action="쓰기" />
            </Form>
        )
    }
}

export default TodoCommentInput;
