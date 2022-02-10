import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Movie from './movie'
import Message from './message'
import Mine from './mine'
import Cinema from './cinema'
import {
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import {
    MovieOutline,
    VideoOutline,
    ContentOutline,
    UserOutline
} from 'antd-mobile-icons'

class Home extends Component {

    state = {
        keynum: '1'
    }

    componentDidMount() {
        if (this.props.location.pathname === '/home/movie') {
            this.setState({
                keynum: '1'
            })
        } else if (this.props.location.pathname === '/home/cinema') {
            this.setState({
                keynum: '2'
            })
        } else if (this.props.location.pathname === '/home/message') {
            this.setState({
                keynum: '3'
            })
        } else if(this.props.location.pathname === '/home/mine') {
            this.setState({
                keynum: '4'
            })
        } 
        // else{
        //     this.setState({
        //         keynum:'1'
        //     })
        // }
    }

    tabchange = (key) => {
        this.setState({
            keynum: key
        })
        if (key === '1') {
            this.props.history.replace('/home/movie')
        } else if (key === '2') {
            this.props.history.replace('/home/cinema')
        } else if (key === '3') {
            this.props.history.replace('/home/message')
        } else {
            this.props.history.replace('/home/mine')
        }

    }

    render() {
        return (
            <div >
                <Switch>
                    <Route path='/home/movie' component={Movie}></Route>
                    <Route path='/home/message' component={Message}></Route>
                    <Route path='/home/mine' component={Mine}></Route>
                    <Route path='/home/cinema' component={Cinema}></Route>
                    <Redirect exact from='/home' to='/home/movie'></Redirect>
                </Switch>
                <TabBar activeKey={this.state.keynum}  onChange={this.tabchange} className='tabbar'>
                    <TabBar.Item key={1} icon={MovieOutline} title='电影' />
                    <TabBar.Item key={2} icon={<VideoOutline />} title='影院' />
                    <TabBar.Item key={3} icon={ContentOutline} title='资讯' />
                    <TabBar.Item key={4} icon={UserOutline} title='我的' />
                </TabBar>
            </div>
        );
    }
}

export default Home;
