import React from "react";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <Box p="margin" borderBottom="1px" borderColor="gray.100">
      <Container>
        <Flex alignItems="center">
          <Center h="100%">
            <Text fontSize="lg">Square Store</Text>
          </Center>
          <Flex>
            <NavItem
              text="Link 1"
              dropdownItems={[
                { text: "Test 1" },
                { text: "test 2" },
                { text: "test 3" },
              ]}
            />
            <Center>
              <Text>Link 2</Text>
            </Center>
            <Center>
              <Text>Link 3</Text>
            </Center>
          </Flex>
          <Spacer />
          <Flex>
            <Button>CTA</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
