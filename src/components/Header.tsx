import React from "react";

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header className="p-6 bg-gray-900 text-white text-center">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-xl">{title}</h2>
    </header>
  );
};

export default Header;
