/**
 * Created by oh on 5/16/17.
 */
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Header extends Component {
    componentDidMount(){
        this.props.fetchUserInfo().then(() => {
            if(this.props.user.id){
                this.props.fetchTodoList();
            }
        });
    }
    render() {
        return (
            <div className="Header">
                <span>JY Couple</span>
                <span>
                <Button onClick={() => this.props.showTodoInput()} icon="plus" size="small" color="brown" circular />
            </span>
            </div>
        )
    }
};

export default Header;
