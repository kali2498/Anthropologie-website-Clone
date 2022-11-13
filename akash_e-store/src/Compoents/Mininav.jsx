import React from "react";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <option value="">English UK</option>
          <option value="">French</option>
          <option value="">Hindi</option>
        </select>
      </div>

      <div className={style.adminbutton}>
        <Link to="/login" >Sign In </Link>
        <p> / </p>
        <h4>Sign Up</h4>
      </div>
    </div>
  );
};

export default Mininav;
