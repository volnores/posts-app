import React from "react";
import style from "../Skeleton/style.module.css";

const Skeleton = ({ count = 1, type = "post" }) => {
  return (
    <div>
      {count > 1 ? (
        <ul className={style.list}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "post" ? style.post : style.postslist}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "post" ? style.post : style.postslist}></li>
      )}
    </div>
  );
};

export default Skeleton;
