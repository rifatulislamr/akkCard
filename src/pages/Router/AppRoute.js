import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import AuthProvider from '../AuthProvider/AuthProvider';



class AppRoute extends Component {
    render() {
        return (
            <AuthProvider>
                <Fragment>


<Switch>
    <Route exact path="/" component={HomePage}/>
    


</Switch>


</Fragment>
            </AuthProvider>
        );

    }
}

export default AppRoute;