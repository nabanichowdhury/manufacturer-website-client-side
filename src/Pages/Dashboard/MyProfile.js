import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const user = useAuthState(auth);
  console.log(user);
  return (
    <div className="text-center">
      <h1 className="text-2xl text-primary">{user[0].displayName}'s profile</h1>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img src={user[0].photoURL} />
        </div>
      </div>
      <h2 className="text-xl text-secondary">Email:{user[0].email}</h2>
      {user[0].emailVerified ? (
        <h2>Email verified:True</h2>
      ) : (
        <h2>Email verified:False</h2>
      )}
    </div>
  );
};

export default MyProfile;
