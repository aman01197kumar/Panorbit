import React from "react";
import UsersList from "../../components/UsersList";
import "./Home.css";

function Home({ data }) {
  return (
    <div className="main">
      <svg
        className="svgDesign"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3d57c8" />
            <stop offset="100%" stopColor="#6039c8" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          style={{ stroke: "none", fill: "url(#gradient)" }}
        ></path>
      </svg>

      <div className="front-page">
        <div id="select">Select an account</div>
        <div className="data">
          <UsersList data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
