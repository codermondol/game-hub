import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate()

  const handleUpdateBtn = () => {
    navigate('/update-profile')
  }

  return (
    <div>
      <title>{user.displayName}</title>
      <div className="bg-secondary text-white py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Your <span className="text-primary">profile</span> Info
        </h2>
      </div>
      <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto my-10 md:my-16 lg:my-20 bg-white p-5 md:p-6 rounded-xl space-y-4 border-2 border-primary text-center">
        <img
          className="w-24 h-24 md:w-28 md:h-28 mx-auto p-2 bg-white shadow-xl rounded-full mb-3"
          src={user.photoURL}
          alt=""
        />
        <div className="border border-primary p-3 rounded-2xl text-sm md:text-base">
          <h2 className="text-sx">
            <span className="font-bold">Your name:</span>{" "}
            <span>{user.displayName}</span>
          </h2>
          <p className="text-sx">
            <span className="font-bold">Email:</span>{" "}
            <span>{user.email}</span>
          </p>
        </div>
        <button onClick={handleUpdateBtn}>Update info</button>
      </div>
    </div>
  );
};

export default Profile;
