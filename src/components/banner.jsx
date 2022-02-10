import React from 'react';
import { Swiper } from 'antd-mobile';
import styled from 'styled-components' //导入这个局部组件是为了写css-in-js

//给当前banner组件写局部样式

const Box = styled.div`
    width:100%;
    height:210px;
    border:1px solid red;
    overflow:hidden;
    img{
        width:100%
        
    }
`

const Banner = () => {
    return (
        <Box>
            <Swiper loop={true} style={{'height':'210px'}}>
                <Swiper.Item >
                    <div>
                        <img src='https://img2.baidu.com/it/u=3386169882,874856162&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281'></img>
                    </div>
                </Swiper.Item>
                <Swiper.Item >
                    <div>
                        <img src=''></img>
                    </div>
                </Swiper.Item>
                <Swiper.Item >
                    <div>
                        <img src=''></img>
                    </div>
                </Swiper.Item>
            </Swiper>
        </Box>
    );
}

export default Banner;
