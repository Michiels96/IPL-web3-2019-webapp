import React,{useContext} from "react";
import {Redirect} from "react-router-dom";
import { AuthenticationContext } from "../Context/Authentication";
export const Logout = () => {
    const {setCurrentJWT} = useContext(AuthenticationContext);
    setCurrentJWT("");
    return <Redirect to="/" />
}