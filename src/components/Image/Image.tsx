import React from "react";
import style from "../Image/style.module.css";

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={style.wrapper}>
      {image ? <img src={image} alt="post" className={style.image} /> : null}
    </div>
  );
};

export default Image;
