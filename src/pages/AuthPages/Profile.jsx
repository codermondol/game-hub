import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <div className="bg-secondary opacity-98 text-white py-20 text-center">
        <h2 className="text-4xl font-bold uppercase">
          Your <span className="text-primary">profile</span> Info
        </h2>
      </div>
      <div className="w-full md:w-3/12  mx-auto my-20 bg-white p-5 rounded-xl space-y-3 border-2 border-primary">
        <img
          className="p-2 bg-white shadow-xl rounded-full mb-5"
          src={user.photoURL}
          alt=""
        />
        <div className="border-1 border-primary p-3 rounded-2xl">
          <h2 className="text-sx">
            <span className="font-bold">Your name:</span>{" "}
            <span>{user.displayName}</span>
          </h2>
          <p className="text-sx">
            <span className="font-bold">Your Email:</span>{" "}
            <span>{user.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
