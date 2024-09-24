"use client";
import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";

const Preloader = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#3498db",
  };

  return (
    <div className={`preloader ${loading ? "show" : ""}`}>
      <DotLoader
        color={"#3498db"}
        loading={loading}
        cssOverride={override}
        size={60}
      />
      <style jsx>{`
        .preloader {
          position: fixed;
          transition: 1s ease-in-out;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--background-2);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          z-index: 9999;
        }
        .preloader.show {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
