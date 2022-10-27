import React, { Component } from 'react';
import Films from "../views/films"
import Cinemas from  "../views/cinemas"
import Center from "../views/center";
import NotFound from '../views/notFound';
//BrowserRouter as Router,
import {
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class IndexRouter extends Component {
    render() {
        return (

            <HashRouter>
                <Switch>
                    <Route path="/films" component={Films}/>
                    <Route path="/cinemas" component={Cinemas}/>
                    <Route path="/center" component={Center}/>
                    {/* <Redirect from="/" to="/films" /> */}
                    {/* 精确匹配 exect */}
                    <Redirect from="/" to="/films" exact/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </HashRouter>

        );
    }
}

export default IndexRouter;