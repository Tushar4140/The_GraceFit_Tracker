import React from 'react';

const Header = () => {
  const graceLink = "http://localhost:8080/";
  const graceButtonColor = "#3b82f6"; // Set your desired color here

  const handleGraceClick = () => {
    window.location.href = graceLink;
  };

  return (
    <>
      <style>
        {`
          @keyframes background-shine {
            from {
              background-position: 0 0;
            }
            to {
              background-position: -200% 0;
            }
          }

          @keyframes gradient-color-change {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-background-shine {
            animation: background-shine 2s linear infinite;
          }

          .animate-gradient-color-change {
            animation: gradient-color-change 5s ease infinite;
            background: linear-gradient(110deg, #f9e66e 45%, #f99c00 55%);
            background-size: 200% 200%;
            color: transparent;
            background-clip: text;
          }
        `}
      </style>
      <header className="p-4 border-b fixed w-full z-50 bg-gradient-to-r from-[#1d161a] via-[#4e4b64] to-[#5e5e64] text-white">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button
            onClick={handleGraceClick}
            className={`border border-${graceButtonColor} bg-${graceButtonColor} hover:bg-${graceButtonColor}-dark text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden animate-background-shine`}
          >
            <span>Back To GRACE</span>
          </button>
          <h1 className="text-5xl font-extrabold inline-block animate-gradient-color-change" style={{ fontFamily: 'Passion One, sans-serif' }}>
            Personalized Workout Generator
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
