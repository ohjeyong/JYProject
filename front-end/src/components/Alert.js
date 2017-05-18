/**
 * Created by oh on 5/18/17.
 */
import React, { Component } from 'react';


class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closing: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!this.props.alertPayload.visibility && nextProps.alertPayload.visibility) {
            this.setState({
                closing: true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    })
                }, 1000
            );
        }
    }

    render() {
        if(!this.props.alertPayload.visibility && !this.state.closing) return null;
        const style = {
            backgroundColor: this.props.alertPayload.backgroundColor,
            color: this.props.alertPayload.fontColor,
        };
        return (
            <div className="Alert-wrapper">
                <div style={style} className={`Alert ${this.state.closing? 'bounceIn': 'bounceOut'} animated`}>
                    {this.props.alertPayload.message}
                </div>
            </div>
        )
    }
}


export default Alert;