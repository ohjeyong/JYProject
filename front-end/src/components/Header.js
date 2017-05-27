/**
 * Created by oh on 5/16/17.
 */
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import UserFullModalContainer from '../containers/UserFullModalContainer';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            userModalActive: false
        }
    }

    closeUserFullModal = () => {
        this.setState({
            userModalActive: false
        });
    };

    render() {
        return (
            <div className="Header">
                <UserFullModalContainer
                    active={this.state.userModalActive}
                    handleClose={this.closeUserFullModal}
                />
                <span>JY Couple</span>
                <span>
                    <Button onClick={() => this.setState({userModalActive: true})} icon="user" size="small" color="grey" circular />
                    <Button onClick={() => this.props.showTodoInput()} icon="plus" size="small" color="brown" circular />
                </span>
            </div>
        )
    }
};

export default Header;
