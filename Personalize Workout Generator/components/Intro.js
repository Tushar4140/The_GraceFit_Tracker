import React from 'react';

const Intro = () => {
  const gradientText = {
    background: "-webkit-linear-gradient(45deg, #FFD700, #FFD700, #FFD700)", // Yellow gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline"
  };

  return (
    <div className="text-center p-8 rounded-lg shadow-md bg-white text-black">
      <p className="text-4xl font-extrabold mb-4">
        Welcome to our Fitness App!
      </p>
      <p className="text-lg mb-6 text-gray-800">
        Step into our Personalized Workout Generator! Your details shape unique workouts, crafting fitness magic just for you. No generic, only unique. Begin your enchanted fitness journey now!
      </p>
      <p className="text-xl font-bold flex items-center justify-center">
        <span style={gradientText}>Start your fitness journey today!</span>
        <span className="ml-2">
          {/* Replace the placeholder link with the actual link to your PNG */}
          <img
            src="https://i.postimg.cc/NjbxtBK3/membership.png" // Replace with your PNG link
            alt="Gym Icon"
            className="w-6 h-6 inline text-yellow-400"
          />
        </span>
      </p>
    </div>
  );
};

export default Intro;
