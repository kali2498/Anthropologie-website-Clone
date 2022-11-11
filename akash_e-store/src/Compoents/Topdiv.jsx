import React from "react";
import style from "../Compoents/Navbar.module.css";
import { Flex } from "@chakra-ui/react";

const Topdiv = () => {
  return (
    <div className={style.nav1}>
      <Flex className={style.flexNav}>
        <p className={style.italian}>après all day, the Anthro way!</p>
        <p> GONE SKIING </p>
        <a href="https://www.anthropologie.com/new-clothes#u-skip-anchor">
          shop the new collection
        </a>
      </Flex>
    </div>
  );
};

export default Topdiv;
