import React from "react";
import { Avatar } from "@mui/material";
const AvatarHeader = ({ username }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Avatar alt={username}>{username.charAt(0).toUpperCase()}</Avatar>
      <p style={{fontWeight: "800"}}>{username}</p>
    </div>
  );
};

export default AvatarHeader;
