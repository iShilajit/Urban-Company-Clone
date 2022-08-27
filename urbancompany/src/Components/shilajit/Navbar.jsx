

import React from "react";



import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Signin from "../../Pages/shubham/LoginSignin/Signin";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { title: "Blog", link: "/blog" },
    { title: "Register as Proffessional", link: "/" },
    { title: "My Bookings", link: "/bookings" },
  ];

  return (
    <>
      <Box
       
        bg={"blackAlpha.900"}
        color={"whiteAlpha.900"}
        px={4}
       
        w={"100%"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          fontWeight={"bold"}
          justifyContent={"space-around"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color={"blackAlpha.900"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            border={"1px  red"}
            width={"90%"}
            spacing={8}
            alignItems={"center"}
          >
            <Box>
              <RouterLink to={`/allservices`}>
                <Image
                  src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                  width={"30%"}
                />
              </RouterLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
              
            >
              {Links.map((link, index) => (
                <RouterLink to={link.link} key={index}>
                  {link.title}
                </RouterLink>
              ))}
            </HStack>

            {/* <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  color={"whiteAlpha.900"}
                >
                  {"Login"}
                </MenuButton>
                <MenuList color={"blackAlpha.900"}>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex> */}
            {/* <Login /> */}
            <Signin></Signin>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <RouterLink to={link.link} key={index}>
                  {link.title}
                </RouterLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
