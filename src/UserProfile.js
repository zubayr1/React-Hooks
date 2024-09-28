import React, { useContext } from "react";
import { DashboardContext } from "./DashboardContext";

function UserProfile() {
  const user = useContext(DashboardContext);
  return (
    <div>
      <p>Logged in as: {user.name}</p>
      <p>Subscribed: {user.isSubscribed}</p>
    </div>
  );
}

export default UserProfile;
