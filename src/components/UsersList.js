import React, { useState, useEffect } from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";

export default function UsersList({ data }) {
  const navigate = useNavigate();

  return (
    <>
      {data?.users &&
        data?.users.map((item) => {
          return (
            <>
              <div

                style={{ padding: '0px 40px' }}
                onClick={() => {
                  navigate("/view/" + item.id);
                }}
              >
                <User
                  id={item.id}
                  username={item.username}
                  name={item.name}
                  imgsrc={item.profilepicture}
                />
              </div>
            </>
          );
        })}
    </>
  );
}
