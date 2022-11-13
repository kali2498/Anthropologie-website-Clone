import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Anthropologie from "./Anthropologie";
import { FiShoppingCart } from "react-icons/fi";
import Aurtholivinghome from "./Aurtholivinghome";
import style from "../Compoents/Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <Tabs variant="enclosed" ml={"25px"} position={"relative"}>
        <TabList style={{ height: "3.5rem"}}>
          <Tab>ANTHROPOLOGIE</Tab>
          <Tab>anthrolivinghome</Tab>
          <img className={style.logoimage} src="https://static.vecteezy.com/system/resources/thumbnails/004/880/932/small_2x/ak-handwritten-letters-logo-design-with-circular-letter-pattern-creative-handwritten-signature-logo-icon-vector.jpg" alt="Logo" />
          <Stack spacing={3} mt={2.5} ml={"43.3rem"}>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="teal.400" />}
              />
              <Input placeholder="medium size" size="md" />
            </InputGroup>
          </Stack>
          <FiShoppingCart
            style={{
              width: "50",
              height: "22",
              marginLeft: "7",
              marginTop: "18",
              color: "teal",
            }}
          />
        </TabList>
        <TabPanels>
          <TabPanel>
            <Anthropologie />
          </TabPanel>
          <TabPanel>
            <p><Aurtholivinghome /></p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Navbar;
