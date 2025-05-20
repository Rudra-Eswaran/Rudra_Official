import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-black">
        Hey You,{" "}
        <span className="font-normal text-gray-800">
          <Typewriter
            words={["this is Eswaran here"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Home;
