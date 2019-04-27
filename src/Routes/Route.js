import React,{Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from '../Component/Home/Home';
import Detail from "../Component/Detail/Detail";



class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch >
                        <Route path="/" exact component={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Routes;