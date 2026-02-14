import React, { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, updateUserInfo } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserInfo(name, photoURL)
      .then(() => {
        setMessage("Profile updated successfully!");
        toast("Profile updated successfully!");
        navigate('/profile');
      })
      .catch((error) => {
        setMessage("Error: " + error.message);
      });
  };

  return (
    <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto my-16 bg-white p-6 rounded-xl border-2 border-primary text-center">
      <h2 className="text-2xl font-bold mb-6">Update Your Information</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg border-primary"
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full p-3 border rounded-lg border-primary"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-bold cursor-pointer"
        >
          Update Profile
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default UpdateProfile;
