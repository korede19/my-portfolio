import RotatingLines from "react-spinners";
import { InfinitySpin } from "react-loader-spinner";

const Preloader = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#3498db",
  };

  return (
    <div className={`preloader ${loading ? "show" : ""}`}>
      <InfinitySpin color="#fff" width="200" />
      <p>Loading...</p>
      <style jsx>{`
        .preloader {
          position: fixed;
          transition: 1s ease-in-out;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #252546;
          display: flex;
          flex-direction: column;
          color: #fff;
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
