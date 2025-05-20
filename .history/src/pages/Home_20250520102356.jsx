import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-black">
        Hey you, this is{" "}
        <span className="text-blue-600 font-bold">
          <Typewriter
            words={["Eswaran"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </span>{" "}
        here.
      </h1>
    </div>
  );
};

export default Home;
