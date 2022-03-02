import React from 'react';
import styled from 'styled-components';
import axios from '../../utils/axios'

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

.avater_btn{
    display: inline-block;
    width: 45px;
    height: 45px;
    border: 1px solid #888888;
    border-radius: 4px;
    position: relative;
}

.avater_btn::before{
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background-color: #888888;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -15px;
}

.avater_btn::after{
    content: '';
    display: inline-block;
    width: 2px;
    height: 30px;
    background-color: #888888;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 50%;
    margin-left: -1px;
}


.itemname{
    color: #a5a5a5;
    font-size: 18px;
    line-height: 22px;
}


`
const nameRef = React.createRef()
const pwRef = React.createRef()
const pw2Ref =React.createRef()

const Sign = () => {

    function updata (){
        const name = nameRef.current.value
        const pw = pwRef.current.value
        const pw2 = pw2Ref.current.value
        if(pw===pw2){
            
        }else{
            alert('密码不同')
        }

    }


    return (
        <>
            <Box>
                <div className="box">
                    <div className="m_t25">
                        <input type="text" ref={nameRef} className="input1" placeholder="用户名" />
                    </div>

                    <div className="m_t25">
                        <input type="password" ref={pwRef} className="input1" placeholder="密码" />
                    </div>

                    <div className="m_t25">
                        <input type="password" ref={pw2Ref} className="input1" placeholder="重复密码" />
                    </div>

                    <div className="m_t25">
                        <div className="itemname">头像</div>

                        <div>
                            <a className="avater_btn"></a>
                        </div>

                    </div>


                    <div className="m_t25" >
                        <input type="button" className="login_btn" value="注册" onClick={updata}/>
                    </div>

                    <div className="m_t15">

                        <div className="tar">
                            <a href="/login" className="link_btn">登录</a>
                        </div>

                    </div>
                </div>

            </Box>
        </>
    );
}

export default Sign;
