import { User } from "firebase/auth";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return <div>{`Hey there ${user.email}`}</div>;
};

export default Dashboard;
