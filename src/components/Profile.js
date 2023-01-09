import React from "react";

export const Profile = ({ data, newId }) => {
  return (
    <div className="profile">
      <img
        src={data.users[newId].profilepicture}
        alt=""
        className="modal-profile-pic"
      />
      <div>{data.users[newId].name}</div>
      <div>{data.users[newId].email}</div>

      <div className="borderLine"> </div>

      <div
        className="profile-flex"
        style={{
          width: "100%",
          display: "flex",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="profile-picture"
          src={data.users[(newId + 1) % data.users.length].profilepicture}
          alt=""
        />
        <div className="profile-name">
          {data.users[(newId + 1) % data.users.length].name}
        </div>
      </div>
      <div className="borderLine"> </div>

      <div className="profile-flex">
        <img
          className="profile-picture"
          src={data.users[(newId + 2) % data.users.length].profilepicture}
          alt=""
        />
        <div className="profile-name">
          {data.users[(newId + 2) % data.users.length].name}
        </div>
      </div>
      <button className="sign-out">Sign out</button>
    </div>
  );
};
