/**
 * Created by oh on 5/26/17.
 */
import React, { Component } from 'react';
import { Dimmer, Icon, Button, Form } from 'semantic-ui-react';


class UserFullModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLoginForm: true, // if true, then show login form, else, show signup form
            loginId: '',
            loginPassword: '',
            signupId: '',
            signupName: '',
            signupPassword: '',
            signupPassword2: ''
        }
    }

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

    handleLoginSignupChange = (e, { name, value }) => this.setState({[name]: value});

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

    handleClickLoginButton = (e) => {
        e.preventDefault();
        this.props.login({
            id: this.state.loginId,
            password: this.state.loginPassword
        }).then(() => {
            if(this.props.user.error){
                this.showAlert(this.props.user.error);
            }else{
                this.handleClose();
                this.setState({
                    showLoginForm: true,
                    loginId: '',
                    loginPassword: '',
                    signupId: '',
                    signupName: '',
                    signupPassword: '',
                    signupPassword2: ''
                })
            }
        });
    };

    handleClickSignupButton = (e) => {
        e.preventDefault();
        this.props.signup({
            id: this.state.signupId,
            name: this.state.signupName,
            password: this.state.signupPassword,
            password2: this.state.signupPassword2
        }).then(() => {
            if(this.props.user.error){
                this.showAlert(this.props.user.error);
            }else{
                this.handleClose();
                this.setState({
                    showLoginForm: true,
                    loginId: '',
                    loginPassword: '',
                    signupId: '',
                    signupName: '',
                    signupPassword: '',
                    signupPassword2: ''
                })
            }
        });
    };

    renderLoginSignupForm = () => {
        if(this.state.showLoginForm){
            return (
                <Form inverted>
                    <Form.Group>
                        <Form.Input label="ID" placeholder="아이디를 입력해주세요." width={16}
                                    onChange={this.handleLoginSignupChange}
                                    value={this.state.loginId}
                                    name="loginId"
                        />
                        <Form.Input label="PASSWORD" placeholder="비밀번호를 입력해주세요." width={16} type="password"
                                    onChange={this.handleLoginSignupChange}
                                    value={this.state.loginPassword}
                                    name="loginPassword"
                        />
                    </Form.Group>
                    <Button onClick={(e) => this.handleClickLoginButton(e)} type="submit" primary>로그인</Button>
                </Form>
            )
        }else{
            return (
                <Form inverted>
                    <Form.Group>
                        <Form.Input label="아이디" placeholder="아이디를 입력해주세요." width={16}
                                    onChange={this.handleLoginSignupChange}
                                    value={this.state.signupId}
                                    name="signupId"
                        />
                        <Form.Input label="이름" placeholder="이름을 입력해주세요." width={16}
                                    onChange={this.handleLoginSignupChange}
                                    value={this.state.signupName}
                                    name="signupName"
                        />
                        <Form.Input label="비밀번호" placeholder="비밀번호를 입력해주세요." width={16} type="password"
                                    onChange={this.handleLoginSignupChange}
                                    value={this.state.signupPassword}
                                    name="signupPassword"
                        />
                        <Form.Input label="비밀번호 재확인" placeholder="비밀번호를 한 번 더 입력해주세요." width={16} type="password"
                                    onChange={this.handleLoginSignupChange}
                                    value={this.state.signupPassword2}
                                    name="signupPassword2"
                        />
                    </Form.Group>
                    <Button onClick={(e) => this.handleClickSignupButton(e)} type="submit" primary>회원가입</Button>
                </Form>
            )
        }
    };

    renderContent = () => {
        if(typeof(this.props.user.id) === 'undefined'){
            return (
                <div>
                    <div>
                        <div onClick={() => this.setState({ showLoginForm: true })}>Login</div>
                        <div onClick={() => this.setState({ showLoginForm: false })}>SignUp</div>
                    </div>
                    <div>
                        { this.renderLoginSignupForm() }
                    </div>
                </div>
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