import React from "react";
//import Input from 'components/Input';
//import RoomControl from 'components/RoomControl';
//import logo from 'images/spade.svg';
import "./Header.scss";

//<img src={logo} className="logo shadow" alt="Scrum Poker logo" />

interface HeaderProps {
  label: string;
  player?: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className="top">
      <div className="brand">
        <div className="title">Scrum Poker</div>
        <span>{props.label}</span>
      </div>
    </header>
  );
};

export default Header;
