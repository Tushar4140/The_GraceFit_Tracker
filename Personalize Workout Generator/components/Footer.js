import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const vibrantColors = {
  accent: '#FFE600',
  background: '#1d161a',
  text: '#FFFFFF',
};

const futuristicFont = "'Inter', sans-serif";

const Footer = () => {
  return (
    <div className="flex-shrink-0 text-center text-md p-4 border-t bg-gradient-to-r from-[#1d161a] via-[#4e4b64] to-[#5e5e64]">
      <div className="mx-auto">
        <p className="text-yellow-500 font-bold" style={{ fontFamily: futuristicFont }}>
          Created by
        </p>
        <div className="flex items-center justify-center space-x-4">
          <AuthorSection name="Tushar Pawar" linkedin="https://www.linkedin.com/in/tushar-pawar-57203a267/" gmail="mailto:tp99011@gmail.com" />
          <span className="text-white"> & </span>
          <AuthorSection name="Gayatri Naik" linkedin="https://www.linkedin.com/in/gayatri-naik-b117a9285/" gmail="mailto:naikgayatri286@gmail.com" />
        </div>
      </div>
    </div>
  );
}

const AuthorSection = ({ name, linkedin, gmail }) => (
  <div className="flex items-center transition-transform transform hover:scale-105">
    <span className="text-white">{name}</span>
    <IconLink link={linkedin} icon={<FaLinkedin />} />
    <IconLink link={gmail} icon={<FaEnvelope />} />
  </div>
);

const IconLink = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-white hover:text-accent ml-1 hover:shadow-md transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
