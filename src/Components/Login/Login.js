import React, { useState } from "react";
import loginImg from "../../images/registration.png";
import { Form, Button } from "react-bootstrap";
import google from "../../images/google.png";
import "./Login.css";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const auth = getAuth();
  const [useName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setlogin] = useState(false);
  const [error, seterror] = useState("");
  const { googleSignIn, setuser } = useAuth();

  // redirect handler for fixing redirect issue
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/home";
  const redirectHandler = () => {
    googleSignIn().then((result) => {
      history.push(redirect);
    });
  };

  // handlerName for collecting user name
  const handlerName = (e) => {
    setUserName(e.target.value);
  };

  // handleremail for collecting user email
  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  // handlerpassword for collecting data
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  // handlechange for checking register or login toggle
  const handlechange = (e) => {
    setlogin(e.target.checked);
  };

  // handle register for final registration or login

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      seterror("password must be 6 charackters");
      return;
    }

    const createUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          if (user) {
            alert("You are registered successfully.");
            setlogin(true);
          }
          seterror("");

          updateUserName();
        })
        .catch((err) => {
          seterror(err.message);
        });
    };

    const updateUserName = () => {
      updateProfile(auth.currentUser, { displayName: useName })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };

    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          history.push(redirect);
          setuser(user);
          console.log(user);
          seterror("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterror(errorMessage);
        });
    };
    // conditional toogle , is user already user or not

    islogin ? processLogin(email, password) : createUser(email, password);
  };
  return (
    <div className="login py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="fw-light text-uppercase">
              Check out Express.com — it’s free!
            </h3>
            <p>
              These embryonic oaks lay upon the grass, their browns a gift to
              the eyes. I could watch them a while
            </p>
            <img src={loginImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="border shadow-lg p-3">
              <h4 className=" fw-bold">
                {!islogin
                  ? "Sign up to express.com"
                  : "Please login to express.com"}
              </h4>
              <Form onSubmit={handleRegistration}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={redirectHandler}
                  className="border border-2 p-2 text-center"
                >
                  <img className="img" src={google} alt="" />
                </div>
                <p className="text-center text-secondary pt-2">
                  -------or----------
                </p>
                {!islogin && (
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                      className="py-3"
                      onBlur={handlerName}
                      type="Name"
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    className="py-3"
                    onBlur={handleEmail}
                    type="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    className="py-3"
                    onBlur={handlePassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <Form.Check
                    onChange={handlechange}
                    type="checkbox"
                    label="Already User?"
                  />
                </Form.Group>
                <div className="row mb-2 text-danger">{error}</div>
                {islogin ? (
                  <Button on variant="warning" type="submit">
                    Login
                  </Button>
                ) : (
                  <Button variant="danger" type="submit">
                    Register
                  </Button>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
