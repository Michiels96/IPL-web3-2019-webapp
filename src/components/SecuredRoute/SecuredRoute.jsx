import React, { useContext } from "react";
import { AuthenticationContext } from "../../contexts/Authentication/Authentication";
import { Route, Redirect } from "react-router-dom";

function SecuredRoute({children,...otherProps}){
    const {isAuthenticated} = useContext(AuthenticationContext);
    if (isAuthenticated())
        return <Route {...otherProps}>{children}</Route>;
    else
        return <Redirect to="/login" />;
}

export default SecuredRoute;