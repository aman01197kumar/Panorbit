import React from "react";

function User(props) {
  return (
    <>
      <div className="body">
        <div className="container">
          <img className="list-profile" src={props.imgsrc} alt="" />
          <div className="list-title">{props.name}</div>
        </div>
      </div>
    </>
  );
}

export default User;
