import React from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import "./Header.scss";

interface HeaderProps {
  label: string;
  player?: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className="top">
      <div className="brand">
        <div className="title">Scrum Poker</div>
        <span className="label">{props.label}</span>
      </div>
      <ThemeSelector />
    </header>
  );
};

export default Header;
