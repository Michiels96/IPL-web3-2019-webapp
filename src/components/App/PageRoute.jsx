import React from "react";

import {Switch, Route} from "react-router-dom";
import DashboardPage from "../DashboardPage/DashboardPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import ToDoAppPage from "../ToDoAppPage/ToDoAppPage";
import QuotePage from "../QuotePage/QuotePage";
import LoginContainer from "components/Login/LoginContainer";
import { Logout } from "components/Logout/Logout";

function PageRoute() {
    return (
        <Switch>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/quote" component={QuotePage}/>
            <Route path="/gallery" component={GalleryPage}/>
            <Route path="/todoapp" component={ToDoAppPage}/>
            <Route path="/" component={DashboardPage}/>
        </Switch>
    );
}

export default PageRoute;
