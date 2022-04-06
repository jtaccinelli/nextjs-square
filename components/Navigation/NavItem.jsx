import React from "react";
import { nanoid } from "nanoid";
import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";

const NavItem = ({ text, href, dropdownItems }) => {
  return (
    <Box>
      <Menu>
        <MenuButton>{text}</MenuButton>
        {dropdownItems && (
          <MenuList>
            {dropdownItems.map((item) => (
              <MenuItem key={nanoid()}>{item.text}</MenuItem>
            ))}
          </MenuList>
        )}
      </Menu>
    </Box>
  );
};

export default NavItem;
