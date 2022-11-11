import React from "react";
import { FaLanguage } from "react-icons/fa";
import style from "../Compoents/Navbar.module.css";

const Mininav = () => {
  return (
    <div className={style.langaugeTag}>
      <div>
        <FaLanguage className={style.langaugeSymbol} />
      </div>
      <div>
        <select name="langauge" className={style.langaugeOption}>
          <option value="">English($)</option>
          <option value="">French</option>
        </select>
      </div>

      <div className={style.adminbutton}>
        <h4>Sign In </h4>
        <p> / </p>
        <h4>Sign Up</h4>
      </div>
    </div>
  );
};

export default Mininav;
