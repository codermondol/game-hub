import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef()

  const { loginUser, forgetPassword } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setEmailError("");
    setPasswordError("");

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setPasswordError("Wrong password");
        } else if (error.code === "auth/user-not-found") {
          setEmailError("User not found");
        } else if (error.code === "auth/invalid-email") {
          setEmailError("Invalid email");
        } else {
          setPasswordError("Login failed! Please Try again.");
        }
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if(!email){
      alert('please enter your email')
      return;
    }
    forgetPassword(email)
    .then(() => {
      alert('please check your email');
    })
    .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }

  return (
    <div>
      <title>User Login</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <h2 className="text-3xl font-bold">Login now!</h2>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    ref={emailRef}
                    placeholder="Email"
                    required
                  />
                  {emailError && (
                    <p className="text-red-400 text-xs">{emailError}</p>
                  )}
                  {/* Password */}
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input"
                      name="password"
                      placeholder="Password"
                      onChange={() => setPasswordError('')}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
                    >
                      {showPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-red-400 text-xs">{passwordError}</p>
                  )}
                  <div>
                    <a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-primary mt-4">Login</button>
                </fieldset>
              </form>
              <p>
                Do you have no account?
                <span className="text-primary">
                  {" "}
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
