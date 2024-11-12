"use client";
import { InfinitySpin } from "react-loader-spinner";
import "./globals.css";

const Loading = () => {
  return (
    <div className="loader">
      <InfinitySpin color={"#fff"} width="200" />
      <br />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
