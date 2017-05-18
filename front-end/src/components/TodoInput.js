/**
 * Created by oh on 5/18/17.
 */
import React, { Component } from 'react';
import { Dropdown, Form, Input, Button } from 'semantic-ui-react';


class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            category: "",
            content: ""
        }
    }
    showAlert = (message) => {
        const alertPayload = {
            fontColor: 'white',
            backgroundColor: 'rgba(255, 99, 71, 0.9)',
            visibility: true,
            message
        };
        this.props.showAlert(alertPayload);
        setTimeout(
            () => {
                this.props.hideAlert();
            }, 2000
        )
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.category === ''){
            this.showAlert('카테고리를 입력해주세요.');
            return
        }
        if(this.state.content === ''){
            this.showAlert('내용을 입력해주세요.');
            return
        }
    };
    render() {
        const options = [
            { key: 1, text: '먹을 곳', value:'FOOD', icon: "food" },
            { key: 2, text: '갈 곳', value:'PLACE', icon: "marker" },
            { key: 3, text: '할 것', value:'TODO', icon: "star" }
        ];
        return (
            <div className="TodoInputWrapper">
                <Form onSubmit={e => {this.handleSubmit(e)}}>
                    <Dropdown onChange={(e, data) => {this.setState({category: data.value})}} className="TodoInputDropdown" options={options} openOnFocus closeOnBlur placeholder="카테고리" selection />
                    <Input
                        onChange={(e, data) => {this.setState({content: data.value})}}
                        className="TodoInput"
                        placeholder="데이트를 입력해주세요."
                        transparent
                        fluid
                    />
                    <div style={{textAlign: 'right'}}>
                        <Button type="submit" primary size="tiny">추가하기</Button>
                    </div>
                </Form>
            </div>

        )
    }
};

export default TodoInput;