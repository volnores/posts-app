import React from "react";
import style from "../Image/style.module.css";

const Image = ({ image }) => {
  return (
    <div className={style.wrapper}>
      {image ? <img src={image} alt="post" className={style.image} /> : null}
    </div>
  );
};

export default Image;
