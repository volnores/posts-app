import React from "react";
import CurrentDate from "../../CurrentDate/CurrentDate";
import style from "../Header/style.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>REACT NEWS</h1>
      <p className={style.date}>{CurrentDate(new Date())}</p>
    </div>
  );
};

export default Header;
