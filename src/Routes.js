import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Email from './Email';
import Generate from './generate';
import Home from './home';
import Scan from './Scan';
const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/generate" exact component={Generate} />
                <Route path="/scan" exact component={Scan} />
                <Route path="/signup" exact component={Email} />
                
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;