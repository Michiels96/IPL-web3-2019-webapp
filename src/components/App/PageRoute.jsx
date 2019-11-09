import React from "react";

import {Switch, Route} from "react-router-dom";
import DashboardPage from "../DashboardPage/DashboardPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import ToDoAppPage from "../ToDoAppPage/ToDoAppPage";
import QuotePage from "../QuotePage/QuotePage";
import LoginContainer from "components/Login/LoginContainer";
import { Logout } from "components/Logout/Logout";
import SecuredRoute from "../SecuredRoute/SecuredRoute";

function PageRoute() {
    return (
        <Switch>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/logout" component={Logout}/>
            <SecuredRoute path="/quote" component={QuotePage}/>
            <SecuredRoute path="/gallery" component={GalleryPage}/>
            <SecuredRoute path="/todoapp" component={ToDoAppPage}/>
            <SecuredRoute path="/" component={DashboardPage}/>
        </Switch>
    );
}

export default PageRoute;
