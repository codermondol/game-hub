import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const location = useLocation();
    const {forgetPassword} = use(AuthContext)
    const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast("Please enter your email");
      return;
    }

    forgetPassword(email)
      .then(() => {
        toast("Please check your email. Redirecting to Gmail...");
        // open Gmail in a new tab
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {
        console.error(error);
        toast("Failed to send reset email. Try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold mb-5">Reset Password</h2>
            <form onSubmit={handleReset}>
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary mt-4">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
