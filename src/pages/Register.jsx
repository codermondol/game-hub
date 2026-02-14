import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { setUser, createUser } = use(AuthContext);

  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError("Name Should be more than 5 character");
      return;
    } else {
      setNameError("");
    }

    const photo = e.target.photo.value;
    const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/gm;
    if (!urlPattern.test(photo)) {
      setPhotoError("provide valid URL for your profile photo");
      return;
    } else {
      setPhotoError("");
    }

    const email = e.target.email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Input valid mail (example@mail.com)");
      return;
    } else {
      setEmailError("");
    }

    // passwords
    const password = e.target.password.value;
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Include at least one uppercase letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("include at least one number (0-9)");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("include at least one special character");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((userCrresedential) => {
        const user = userCrresedential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <h2 className="text-3xl font-bold">Register now!</h2>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Your Name"
                    required
                  />
                  {nameError && (
                    <p className="text-red-400 text-xs">{nameError}</p>
                  )}
                  {/* Photo URL */}
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input"
                    placeholder="Photo URL"
                    required
                  />
                  {photoError && (
                    <p className="text-red-400 text-xs">{photoError}</p>
                  )}
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
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
                    type={showPassword ? 'text' : 'password'}
                    className="input"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer">{showPassword ? <IoEyeOff />: <IoEye />}</button>
                  </div>
                  {passwordError && (
                    <p className="text-red-400 text-xs">{passwordError}</p>
                  )}

                  <button type="submit" className="btn btn-primary mt-4">
                    Create an Account
                  </button>
                </fieldset>
              </form>
              <p>
                Already have an account?{" "}
                <span className="text-primary">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
