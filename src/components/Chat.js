import React from "react";

export const Chat = ({
  data,
  newId,
  chatVisible,
  setChatVisible,
  setChatId,
}) => {
  return (
    <div className="chat">
      <div
        className="chat-header"
        onClick={() => {
          setChatVisible((prev) => !prev);
        }}
      >
        Chats
      </div>
      {chatVisible && (
        <div className="chat-content">
          {data.users.map(
            (item, index) =>
              index !== newId && (
                <div
                  className="chat-onClick"
                  onClick={() => setChatId(item.id)}
                >
                  <img
                    className="chat-profilePic"
                    src={item.profilepicture}
                    alt=""
                  />
                  <div style={{ fontSize: "13px" }}>{item.name}</div>
                  <div
                    className="chat-online"
                    style={{
                      backgroundColor: index % 3 === 0 ? "grey" : "#1dac60",
                    }}
                  />
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};
