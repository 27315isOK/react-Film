import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../utils/axios';

const Box = styled.div`
.box{
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}



.input1{
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    border: 1px solid #de3232;
    border-radius: 5px;
    width: 100%;
    min-width: 1px;
    height: 38px;
    padding-left: 10px;
    outline: none;
    font-size: 18px;      
}
.input1::placeholder{
    color: #a5a5a5;
    font-size: 18px;
}

.login_btn{
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    min-width: 1px;
    height: 38px;
    border-radius: 5px;
    background-color: #de3232;
    color: #ffffff;
    font-size: 18px;
    outline: none;
    text-align: center;
}
.link_btn{
    color: #4d35a6;
    font-size: 14px;
    text-decoration: underline;
}




`

class Login extends Component {

    state={
        username:'',
        password:''
    }

    changename=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    changepw=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    updata=()=>{
        axios.post('login',{
            username:this.state.username,
            password:this.state.password
        }).then(res=>{
            if(res.status=='success'){
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('userinfo',JSON.stringify(res.data.userinfo))
                this.props.history.push('/home')
            }else{
                alert(res.datas)
            }
        })

    }

    render() {
        return (
            <Box>
                <div className="box">
                    <div className="m_t25">
                        <input type="text" onChange={this.changename} name='username' className="input1" placeholder="用户名" />
                    </div>

                    <div className="m_t25">
                        <input type="password" onChange={this.changepw} name='password' className="input1" placeholder="密码" />
                    </div>

                    <div className="m_t25" >

                        {/* <!-- a button(disabled)   --> */}
                        <input type="button" className="login_btn" value="登录" onClick={this.updata}/>
                    </div>

                    <div className="m_t15">

                        <div className="tar">
                            <a href="/sign" className="link_btn">注册</a>
                        </div>

                    </div>
                </div>
            </Box>
        );
    }
}


export default Login;
