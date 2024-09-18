import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#000000",
          paddingBlock: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/images/logo.png"
          style={{ height: "100px" }}
        />
      </nav>
      <section
        style={{
          height: "60vh",
          backgroundColor: "#202020",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          id="heroVideo"
          //   video tint
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="videos/skateboarding1.mov"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "60vh",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            top: "34%",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: 80,
              fontWeight: "bold",
              textShadow: "0px 5px 1px #5f02aaff",
            }}
          >
            Hello
          </h1>

          <h2
            style={{
              color: "#ffffff",
              fontSize: 60,
              marginTop: -30,
              textShadow: "0px 5px 1px #5f02aaff",
            }}
          >
            World
          </h2>
          <h2
            className="baunk"
            style={{
              color: "#ffffff",
              fontSize: 20,
              marginTop: -20,
            }}
          >
            Welcome to my domain
          </h2>
        </div>
        <div
          className="baunk"
          style={{
            position: "absolute",
            bottom: "30%",
          }}
        >
          <div className="button-1">
            Visit my Linked <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // gap
            gap: 20,
            paddingInline: 40,
            paddingBlock: 30,
          }}
        >
          <div className="card-1"></div>
          <div className="card-1"></div>
          <div className="card-1"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
