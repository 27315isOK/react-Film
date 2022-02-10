import React, { Component } from 'react';
import Banner from '../../components/banner';
import { Tabs } from 'antd-mobile';
import Hot from './hot';
import Soon from './soon';

import {
    Switch,
    Route,
    Redirect,

} from "react-router-dom";

class Movie extends Component {

    state = {
        keyNum: 'hot'
    }

    componentDidMount() {
        if (this.props.location.pathname === '/home/movie/hot') {
            this.setState({
                keyNum: 'hot'
            })
        } else if (this.props.location.pathname === '/home/movie/soon') {
            this.setState({
                keyNum: 'soon'
            })
        }
    }

    tabchange = (key) => {
        this.setState({
            keyNum: key
        })
        if (key === 'hot') {
            this.props.history.replace('/home/movie/hot')
        } else if (key === 'soon') {
            this.props.history.replace('/home/movie/soon')
        }
    }

    render() {
        return (
            <div>
                <Banner></Banner>
                <Tabs
                    activeLineMode='fixed'
                    style={{
                        '--fixed-active-line-width': '70px',
                        '--title-font-size': '14px',

                    }} onChange={this.tabchange} activeKey={this.state.keyNum}>
                    <Tabs.Tab title='正在热映' key='hot'>
                        
                    </Tabs.Tab>
                    <Tabs.Tab title='即将上映' key='soon'>

                    </Tabs.Tab>
                </Tabs>
                <Switch>
                    <Route path='/home/movie/hot' component={Hot}></Route>
                    <Route path='/home/movie/soon' component={Soon}></Route>
                    <Redirect from='/home/movie' to='/home/movie/hot'></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Movie;
