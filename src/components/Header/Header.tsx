import React, { useContext } from "react";
import CurrentDate from "../../CurrentDate/CurrentDate";
import style from "../Header/style.module.css";
import { themeImg } from "../../themeImg";
import { themeProvider } from "../../App";

const Header = () => {
  const { theme, toggleTheme } = useContext(themeProvider);
  return (
    <div className={`${style.header} ${theme ? style.dark : style.light}`}>
      <div className={style.info}>
        <h1 className={style.title}>REACT NEWS</h1>
        <p className={style.date}>{CurrentDate(new Date())}</p>
      </div>
      <img
        onClick={toggleTheme}
        src={theme ? themeImg.sun : themeImg.moon}
        alt="theme"
        style={{ height: "65px", cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;
