import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ComingSoon from "../../components/ComingSoon";
import { Profile } from "../../components/Profile";
import { Chat } from "../../components/Chat";
import { ChatPerson } from "../../components/ChatPerson";
import maps from "../../assets/maps.png";
import "./UserProfile.css";

function UserProfile({ data }) {
  const [profileVisible, setProfileVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [chatIdVisible, setChatIdVisible] = useState(false);
  const [chatId, setChatId] = useState(null);
  const { id } = useParams();

  let newId = parseInt(id) - 1;

  const sidebarButtons = ["Profile", "Posts", "Gallery", "Todos"];
  const [currentPage, setCurrentPage] = useState("Profile");

  return (
    <>
      {data.users && (
        <main onClick={() => setProfileVisible(false)}>
          <section className="sidebar">
            <div id="sidebar-content">
              {sidebarButtons.map((item, index) => (
                <div style={{ position: "relative" }}>
                  <button
                    className="sidebar-button"
                    onClick={() => setCurrentPage(item)}
                    style={{
                      borderBottom:
                        index === sidebarButtons.length - 1
                          ? "none"
                          : "solid 1px #7a7ed7",
                      color: currentPage === item && "white",
                    }}
                    key={item}
                  >
                    {item}
                  </button>
                  {item === currentPage && (
                    <div className="navigator">{">"}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section id="body-content">
            <header className="header">
              <p className="header-title">{currentPage}</p>
              <div
                id="side-img"
                onClick={(e) => {
                  e.stopPropagation();
                  setProfileVisible((prev) => !prev);
                }}
              >
                <img
                  src={data.users[newId].profilepicture}
                  className="header-profile-pic"
                  alt=""
                />
                <p id="name">{data.users[newId].name}</p>
                {profileVisible && <Profile data={data} newId={newId} />}
              </div>
            </header>
            {currentPage === "Profile" ? (
              <div id="flex-container">
                <div id="introduction">
                  <section id="upper">
                    <img
                      id="intro-image"
                      src={data.users[newId].profilepicture}
                      alt=""
                    />
                    <>
                      <p id="name">{data.users[newId].name}</p>
                      <div className="profileflex">
                        <p className="profile-Username">
                          Username&nbsp;&nbsp;:{" "}
                        </p>
                        <p className="username-content">
                          {" "}
                          &nbsp;&nbsp;{data.users[newId].username}
                        </p>
                      </div>
                      <div className="profileflex">
                        <p className="profile-Username">e-mail&nbsp;&nbsp;: </p>
                        <p className="username-content">
                          {" "}
                          &nbsp;&nbsp;{data.users[newId].email}
                        </p>
                      </div>
                      <div className="profileflex">
                        <p className="profile-Username">Phone&nbsp;&nbsp;: </p>
                        <p className="username-content">
                          {" "}
                          &nbsp;&nbsp;{data.users[newId].phone}
                        </p>
                      </div>
                      <div className="profileflex">
                        <p className="profile-Username">
                          Website&nbsp;&nbsp;:{" "}
                        </p>
                        <p className="username-content">
                          {" "}
                          &nbsp;&nbsp;{data.users[newId].website}
                        </p>
                      </div>
                    </>
                  </section>
                  <div className="borderOutline"> </div>
                  <section id="lower">
                    <p id="name">Company:</p>
                    <div className="profileflex">
                      <p className="profile-Username">Name&nbsp;&nbsp;: </p>
                      <p className="username-content">
                        {" "}
                        &nbsp;&nbsp;{data.users[newId].company.name}
                      </p>
                    </div>
                    <div className="profileflex">
                      <p className="profile-Username">
                        Catch Phrase&nbsp;&nbsp;:{" "}
                      </p>
                      <p className="username-content">
                        {" "}
                        &nbsp;&nbsp;{data.users[newId].company.catchPhrase}
                      </p>
                    </div>
                    <div className="profileflex">
                      <p className="profile-Username">BS&nbsp;&nbsp;: </p>
                      <p className="username-content">
                        {" "}
                        &nbsp;&nbsp;{data.users[newId].company.bs}
                      </p>
                    </div>
                  </section>
                </div>
                <div id="address">
                  <p id="name">Address:</p>
                  <div className="profileflex">
                    <p className="profile-Username">Street&nbsp;&nbsp;: </p>
                    <p className="username-content">
                      {" "}
                      &nbsp;&nbsp;{data.users[newId].address.street}
                    </p>
                  </div>
                  <div className="profileflex">
                    <p className="profile-Username">Suite&nbsp;&nbsp;: </p>
                    <p className="username-content">
                      {" "}
                      &nbsp;&nbsp;{data.users[newId].address.suite}
                    </p>
                  </div>
                  <div className="profileflex">
                    <p className="profile-Username">City&nbsp;&nbsp;: </p>
                    <p className="username-content">
                      {" "}
                      &nbsp;&nbsp;{data.users[newId].address.city}
                    </p>
                  </div>
                  <div className="profileflex">
                    <p className="profile-Username">Zipcode&nbsp;&nbsp;: </p>
                    <p className="username-content">
                      {" "}
                      &nbsp;&nbsp;{data.users[newId].address.zipcode}
                    </p>
                  </div>

                  <img src={maps} width="80%" alt="" />
                </div>
              </div>
            ) : (
              <ComingSoon />
            )}
            {chatId && (
              <ChatPerson
                data={data}
                chatId={chatId}
                chatIdVisible={chatIdVisible}
                setChatIdVisible={setChatIdVisible}
                setChatId={setChatId}
              />
            )}
            <Chat
              data={data}
              newId={newId}
              chatVisible={chatVisible}
              setChatVisible={setChatVisible}
              setChatId={setChatId}
            />
          </section>
        </main>
      )}
    </>
  );
}

export default UserProfile;
