import "./User.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  loginSchema,
  registerSchema
} from "../../validation/userSchema";


const User = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === "/user/register";

  /* ================================
     LOGIN FORM
  ================================= */

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    reset: resetLogin,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });


  /* ================================
     REGISTER FORM
  ================================= */

  const {
    register: registerUser,
    handleSubmit: handleRegisterSubmit,
    reset: resetRegister,
    formState: { errors: registerErrors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });


  /* ================================
     SUBMIT
  ================================= */

  const onLogin = (data) => {
    console.log("Login:", data);

    resetLogin();
  };


  const onRegister = (data) => {
    console.log("Register:", data);

    resetRegister();
  };

  return (
    <main className="user-page">

      <section className="user-container">

        {/* ================================
            LEFT SIDE
        ================================= */}

        <div className="user-intro">

          <span className="user-label">
            {isRegister ? "JOIN US" : "WELCOME BACK"}
          </span>

          <h1>
            {isRegister ? (
              <>
                CREATE
                <br />
                <span>ACCOUNT.</span>
              </>
            ) : (
              <>
                WELCOME
                <br />
                <span>BACK.</span>
              </>
            )}
          </h1>

          <p>
            {isRegister
              ? "Create your account and become part of our restaurant community."
              : "Sign in to your account and continue your journey with us."
            }
          </p>

        </div>


        {/* ================================
            FORM
        ================================= */}

        <div className="user-form-wrapper">

          <div className="user-form-heading">

            <span>
              {isRegister ? "02" : "01"}
            </span>

            <div>

              <small>
                {isRegister ? "CREATE ACCOUNT" : "SIGN IN"}
              </small>

              <h2>
                {isRegister ? (
                  <>
                    Let's get
                    <br />
                    <em>started.</em>
                  </>
                ) : (
                  <>
                    Welcome
                    <br />
                    <em>back.</em>
                  </>
                )}
              </h2>

            </div>

          </div>


          {/* ================================
              LOGIN
          ================================= */}

          {!isRegister && (

            <form
              className="user-form"
              onSubmit={handleLoginSubmit(onLogin)}
            >

              <div className="user-field">

                <label htmlFor="login-username">
                  USERNAME
                </label>

                <input
                  id="login-username"
                  type="text"
                  placeholder="Your username"
                  {...loginRegister("username")}
                />

                {loginErrors.username && (
                  <span className="user-error">
                    {loginErrors.username.message}
                  </span>
                )}

              </div>


              <div className="user-field">

                <label htmlFor="login-password">
                  PASSWORD
                </label>

                <input
                  id="login-password"
                  type="password"
                  placeholder="Your password"
                  {...loginRegister("password")}
                />

                {loginErrors.password && (
                  <span className="user-error">
                    {loginErrors.password.message}
                  </span>
                )}

              </div>


              <button
                type="submit"
                className="user-submit"
              >
                LOGIN
                <span>→</span>
              </button>

            </form>

          )}


          {/* ================================
              REGISTER
          ================================= */}

          {isRegister && (

            <form
              className="user-form"
              onSubmit={handleRegisterSubmit(onRegister)}
            >

              <div className="user-field">

                <label htmlFor="register-email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="register-email"
                  type="email"
                  placeholder="you@example.com"
                  {...registerUser("email")}
                />

                {registerErrors.email && (
                  <span className="user-error">
                    {registerErrors.email.message}
                  </span>
                )}

              </div>


              <div className="user-field">

                <label htmlFor="register-username">
                  USERNAME
                </label>

                <input
                  id="register-username"
                  type="text"
                  placeholder="Choose a username"
                  {...registerUser("username")}
                />

                {registerErrors.username && (
                  <span className="user-error">
                    {registerErrors.username.message}
                  </span>
                )}

              </div>


              <div className="user-field">

                <label htmlFor="register-password">
                  PASSWORD
                </label>

                <input
                  id="register-password"
                  type="password"
                  placeholder="Create a password"
                  {...registerUser("password")}
                />

                {registerErrors.password && (
                  <span className="user-error">
                    {registerErrors.password.message}
                  </span>
                )}

              </div>


              <div className="user-field">

                <label htmlFor="confirm-password">
                  CONFIRM PASSWORD
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Repeat your password"
                  {...registerUser("confirmPassword")}
                />

                {registerErrors.confirmPassword && (
                  <span className="user-error">
                    {registerErrors.confirmPassword.message}
                  </span>
                )}

              </div>


              <button
                type="submit"
                className="user-submit"
              >
                CREATE ACCOUNT
                <span>→</span>
              </button>

            </form>

          )}


          {/* ================================
              SWITCH
          ================================= */}

          <div className="user-switch">

            <span>
               {isRegister
               ? "Already have an account?"
               : "Don't have an account?"
               }
            </span>

            <Link
             to={isRegister ? "/user" : "/user/register"}
             >
            {isRegister
             ? "LOGIN"
             : "CREATE ACCOUNT"
            }
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default User;