import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Home from "../Routes/Home";

const Anthropologie = () => {
  return (
    <div>
      <Tabs isLazy>
        <TabList  style={{marginTop:"-13px",marginLeft:"-14px", fontWeight:"bold", border:"none", position: "relative"}}>
          <Tab >Gifts</Tab>
          <Tab  >Two</Tab>
          <Tab>New!</Tab>
          <Tab>Dresses</Tab>
          <Tab>Clothing</Tab>
          <Tab>Shoes</Tab>
          <Tab>Accessories</Tab>
          <Tab> BHLDN Weddings</Tab>
          <Tab>Home & Furniture</Tab>
          <Tab>Beauty & Wellness</Tab>
          <Tab>Sale</Tab>
        </TabList>
      </Tabs>

      <Home />
    </div>
  
  );
};

export default Anthropologie;






// ,color:"rgba(195,61,61,1)"