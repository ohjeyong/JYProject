/**
 * Created by oh on 5/26/17.
 */
import React, { Component } from 'react';
import { Dimmer, Icon, Button } from 'semantic-ui-react';


class UserFullModal extends Component {

    componentDidMount(){
        this.props.fetchUserInfo();
    }

    componentWillReceiveProps(nextProps){
        if(typeof(nextProps.user.id) === "undefined"){
            this.props.clearTodoList();
        }else if(this.props.user.id !== nextProps.user.id){
            this.props.fetchTodoList();
        }
    }

    handleClose = () => {
        this.props.handleClose();
    };

    renderContent = () => {
        if(typeof(this.props.user.id) === 'undefined'){
            return (
                <span>WHO ARe YOU</span>
            )
        }else{
            return (
                <Button onClick={() => {this.props.logout(); this.handleClose();}} negative>로그아웃</Button>
            )
        }
    };

    render() {
        return (
            <Dimmer
                active={this.props.active}
                page>
                <span
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px'
                    }}
                    onClick={() => {this.handleClose()}}>
                    <Icon
                        style={{
                            fontSize: '2rem',
                        }}
                        name="close" />
                </span>
                { this.renderContent() }
            </Dimmer>
        )
    }
}

export default UserFullModal;