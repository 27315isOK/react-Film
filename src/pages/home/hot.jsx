import React, { Component } from 'react';
import { InfiniteScroll, List } from 'antd-mobile'
import styled from 'styled-components';
import { Button } from 'antd-mobile'
import axios from '../../utils/axios'

const Item = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:10px;
    .left{
        display:inline-flex;
        img{
            width:66px;
            height:94px;
            margin-right:10px
        }
        .name{
            color:#191a1b;
            font-size:16px;
            height:22px;
            line-height:22px;
            .see{
                display:inline-block;
                font-size:16px;
                background-color:#d2d6dc;
                color:#fff;
                border-radius:3px;
                transform:scale(0.8);
                height:15px;
                line-height:15px;
                padding:2px;
                margin-left:3px
            }
        }
        .option{
            font-size:13px;
            margin-top:4px;
            color:#797d82;
            .score{
                color:#ffb232;
                font-size:14px;
                margin-left:5px;
            }
        }
    }
    .right{
        button{
            --text-color:#f60;
            --border-color:#f60
        }
    }

`

class Hot extends Component {



    state = {
        list: [],
        hasMore: true
    }

    loadMore = () => {
        console.log('a')
    }

    componentDidMount() {
        axios.get('hot').then((res) => {
            console.log(res);
            this.setState({
                list: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                <List>
                    <List.Item>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <Item key={index}>
                                        <div className='left'>
                                            <img src={item.poster}></img>
                                            <div>
                                                <div className='name'>{item.name}<span className='see'>{item.filmType.name}</span></div>
                                                <div className='option'>评分:<span className='score'>{item.grade}</span></div>
                                                <div className='option'>主演:
                                                    {
                                                        item.actors.map((act, idx) => {
                                                            return act.name + ' '
                                                        })
                                                    }
                                                </div>
                                                <div className='option'>{item.nation} | {item.runtime}分钟</div>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            <Button size={'small'}>购票</Button>
                                        </div>
                                    </Item>

                                )
                            })
                        }
                    </List.Item>

                    <InfiniteScroll loadMore={this.loadMore} hasMore={this.state.hasMore} threshold='50'/>

                </List>
            </div>
        );
    }
}

export default Hot;
