// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }



import React from "react";
import {
  Box,
  Flex,
  Wrap,
  Text,
  WrapItem,
  Divider,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const city = [
    "Agra",
    "Ahmedabad",
    "Alwar",
    "Amritsar",
    "Aurangabad",
    "Bangalore",
    "Bhopal",
    "Bhubaneswar",
    "Chandigarh Tricity",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi NCR",
    "Guntur",
    "Guwahati",
    "Hyderabad",
    "Indore",
    "Jabalpur",
    "Jamshedpur",
    "Jodhpur",
    "Kakinada",
    "Kanpur",
    "Karnal",
    "Kochi",
    "Kolkata",
    "Kota",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Meerut",
    "Mumbai",
    "Mysore",
    "Nagpur",
    "Nashik",
    "Udaipur",
    "Raipur",
    "Rajamundry",
    "Ranchi",
    "Rohtak",
    "Sonipat",
    "Surat",
    "Thiruvananthapuram",
    "Udaipur",
    "Vadodara",
    "Varanasi",
    "Vijaywada",
    "Visakhapatnam",
    "Warangal",
  ];
  return (
    <Flex justifyContent={"center"} bg="#000" color="#cbcbcb">
      <Flex w="1300px" p="30px 0px" flexDirection={"column"} gap="1rem">
        <Wrap spacingX={7} fontWeight="semibold" color="#888">
          <WrapItem cursor="pointer" >About Us</WrapItem>
          <WrapItem>UC Impact</WrapItem>
          <WrapItem>Terms & Conditions</WrapItem>
          <WrapItem>Privacy Policy</WrapItem>
          <WrapItem>Interest-Based Advertising</WrapItem>
          <WrapItem>Anti-Discrimminatory Policy</WrapItem>
          <WrapItem>Blog</WrapItem>
          <WrapItem>Reviews</WrapItem>
          <WrapItem>Near Me</WrapItem>
          <WrapItem>Careers</WrapItem>
          <WrapItem>Gift Cards</WrapItem>
          <WrapItem>Contact Us</WrapItem>
          <WrapItem>Quick Links</WrapItem>
        </Wrap>
        <Divider orientation="horizontal" color="gray" size="4px" />
        <Text fontSize="18px" color="#fffff7" fontWeight="semibold">
          Serving In
        </Text>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder" align="left">
          Aus
        </Text>
        <Wrap spacingX={"7"} fontWeight="semibold" color="#888">
          <WrapItem>Melbourne</WrapItem>
          <WrapItem> Sydney</WrapItem>
        </Wrap>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder" align="left">
          IND
        </Text>
        <Wrap spacingX={7} fontWeight="semibold" color="#888">
          {city.map((city,i) => (
            <WrapItem key={i}>{city}</WrapItem>
          ))}
        </Wrap>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder" align="left">
          KSA
        </Text>
        <Wrap spacingX={7} fontWeight="semibold" color="#888">
          <WrapItem>Jeddah</WrapItem>
          <WrapItem>Riyadh</WrapItem>
        </Wrap>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder" align="left">
          SGP
        </Text>
        <Wrap color="#888" fontWeight={"semibold"}>
          <WrapItem>Singapore</WrapItem>
        </Wrap>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder" align="left">
          UAE
        </Text>
        <Wrap spacingX={7} fontWeight="semibold" color="#888" align="left">
          <WrapItem>Abu Dhabi</WrapItem>
          <WrapItem>Dubai</WrapItem>
          <WrapItem>Sharjah</WrapItem>
        </Wrap>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder" align="left">
          USA
        </Text>
        <Wrap>
          <WrapItem>Austin</WrapItem>
        </Wrap>
        <Divider orientation="horizontal" />
        <Flex justifyContent={"space-between"}>
          <Box display="flex" alignItems="center" gap="1rem">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              alt="ucLogo"
              h="50"
              w="150"
            />
            <Text fontSize="12px">
              © 2014-22 UrbanClap Technologies India Pvt. Ltd
            </Text>
          </Box>
          <Flex alignItems="center" gap=".5rem">
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/twitter.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded="md">
              <Image src="https://img.icons8.com/ios/2x/facebook.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/instagram.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/youtube.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/linkedin.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/pinterest.png" />
            </Box>
          </Flex>
          <Flex>
            <Box>
              <Image
                h="50px"
                w="150px"
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
              />
            </Box>
            <Box>
              <Image
                h="50"
                w="150px"
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

 export default Footer
