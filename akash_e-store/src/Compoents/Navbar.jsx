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

const Navbar = () => {
  return (
    <div>
      <Tabs variant="enclosed" ml={"25px"} position={"relative"}>
        <TabList style={{ height: "3.5rem"}}>
          <Tab>ANTHROPOLOGIE</Tab>
          <Tab>anthrolivinghome</Tab>
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
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Navbar;
