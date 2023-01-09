import React from "react";

export const ChatPerson = ({
  data,
  chatId,
  chatIdVisible,
  setChatIdVisible,
  setChatId,
}) => {
  const messages = [
    "Hello",
    "Hey, how are you",
    "Just working on Panorbit assignment",
    "Cool, nice",
    "Bye",
  ];
  return (
    <div className="chat-person">
      <div
        className="chat-header"
        onClick={() => {
          setChatIdVisible((prev) => !prev);
        }}
      >
        {data.users[chatId - 1].name}

        <div
          onClick={(e) => {
            e.stopPropagation();
            setChatId(null);
          }}
        >
          X
        </div>
      </div>
      {chatIdVisible && (
        <div className="chat-content">
          <div className="chat-messages">
            {messages.map((item, index) => {
              return (
                <div
                  className="chit-chat"
                  style={{
                    alignSelf: index % 2 == 0 ? "flex-start" : "flex-end",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="interactive-field">
            <input
              placeholder="Type your message here..."
              className="input-message"
            />
            <button className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
