import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { AuthenticationContext } from "contexts/Authentication/Authentication";

const LoginContainer = () => {
  //manage state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [authenticated,setAuthenticated]=useState(false);//mission 1
  const { isAuthenticated, setCurrentJWT } = useContext(AuthenticationContext);
  const [errorMessage, setErrorMessage] = useState("");
  //manage event functions to update the state
  const onInputChange = e => {
    if (e.target.name === "username") setUsername(e.target.value);
    else setPassword(e.target.value);
  };
  //manage authentication call to POST users/me
  const authenticate = async e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };
    try {
      const response = await fetch("/api/users/me", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      if (json.success) {
        setCurrentJWT(json.token);
        //setAuthenticated(true);//mission 1
      } else {
        //setAuthenticated(false);//mission 1
        setErrorMessage(json.error);
      }
    } catch (err) {
      console.error("LoginContainer::Error", err);
      //setAuthenticated(false);//mission 1
      setErrorMessage(err.toString());
    }
  };

  //render
  if (!isAuthenticated()) {
    // authenticated//mission 1
    return (
      <LoginForm
        username={username}
        password={password}
        errorMessage={errorMessage}
        onInputChange={onInputChange}
        authenticate={authenticate}
      ></LoginForm>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default LoginContainer;
