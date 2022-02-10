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
    render() {
        return (
            <div>
                <Banner></Banner>
                <Switch>
                    <Route path='/home/movie/hot' component={Hot}></Route>
                    <Route path='/home/movie/soon' component={Soon}></Route>
                </Switch>
                <Tabs
                    activeLineMode='fixed'
                    style={{
                        '--fixed-active-line-width': '70px',
                        '--title-font-size': '14px',
                        
                    }}>
                    <Tabs.Tab title='正在热映' key='fruits'>
                        
                    </Tabs.Tab>
                    <Tabs.Tab title='即将上映' key='vegetables'>
                        
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }
}

export default Movie;
