import React,{useContext} from "react";
import {Redirect} from "react-router-dom";
import { AuthenticationContext } from "../../contexts/Authentication/Authentication";
export const Logout = () => {
    const {setCurrentJWT} = useContext(AuthenticationContext);
    setCurrentJWT("");
    localStorage.removeItem("token");
    return <Redirect to="/" />;
}