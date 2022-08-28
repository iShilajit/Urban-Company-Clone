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
import { Link as RouterLink } from "react-router-dom";

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
        <Wrap spacingX={7} fontWeight="semibold"
        cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" >
             <RouterLink to="/about">
              
          
          <WrapItem cursor="pointer" >About Us</WrapItem>
          </RouterLink>
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
        <Text fontSize="16px" 
         fontWeight="bolder"
        cursor="pointer"
        _hover={{ color: "white" }}
        _focus={{ boxShadow: "outline" }}
       color="#888" 
        align="left">
          Aus
        </Text>
        <Wrap spacingX={"7"} fontWeight="semibold"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" >
          <WrapItem>Melbourne</WrapItem>
          <WrapItem> Sydney</WrapItem>
        </Wrap>
        <Text fontSize="16px" 
         cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" 
        fontWeight="bolder" align="left">
          IND
        </Text>
        <Wrap spacingX={7} fontWeight="semibold"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" >
          {city.map((city,i) => (
            <WrapItem key={i}>{city}</WrapItem>
          ))}
        </Wrap>
        <Text fontSize="16px"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888"  fontWeight="bolder" align="left">
          KSA
        </Text>
        <Wrap spacingX={7} fontWeight="semibold"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" >
          <WrapItem>Jeddah</WrapItem>
          <WrapItem>Riyadh</WrapItem>
        </Wrap>
        <Text fontSize="16px"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888"  fontWeight="bolder" align="left">
          SGP
        </Text>
        <Wrap  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888"  fontWeight={"semibold"}>
          <WrapItem>Singapore</WrapItem>
        </Wrap>
        <Text fontSize="16px"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888"  fontWeight="bolder" align="left">
          UAE
        </Text>
        <Wrap spacingX={7} fontWeight="semibold"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888"  align="left">
          <WrapItem>Abu Dhabi</WrapItem>
          <WrapItem>Dubai</WrapItem>
          <WrapItem>Sharjah</WrapItem>
        </Wrap>
        <Text fontSize="16px"  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888"  fontWeight="bolder" align="left">
          USA
        </Text>
        <Wrap>
          <WrapItem  cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" >Austin</WrapItem>
        </Wrap>
        <Divider orientation="horizontal" />
        <Flex justifyContent={"space-between"}>
          <Box display="flex" alignItems="center" gap="1rem">
          <RouterLink to="/">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              alt="ucLogo"
              h="50"
              w="150"
            />
            </RouterLink>
            <Text fontSize="12px">
              © 2014-22 UrbanClap Technologies India Pvt. Ltd
            </Text>
          </Box>
          <Flex alignItems="center" gap=".5rem">
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
                <a href="https://twitter.com/urbancompany_UC" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/twitter.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded="md">
                <a href="https://www.facebook.com/UrbanCompany/" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/facebook.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="https://www.instagram.com/urbancompany/" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/instagram.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="https://www.youtube.com/channel/UCjNJe0jgLP257X9LsSuyIpg" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/youtube.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="https://www.linkedin.com/company/urbancompany/" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/linkedin.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="https://www.pinterest.com/UrbanCompanyOfficial/">
              <Image src="https://img.icons8.com/ios/2x/pinterest.png" />
              </a>
            </Box>
          </Flex>
          <Flex>
            <Box>
                <a href="https://app.appsflyer.com/com.urbanclap.urbanclap?pid=MobileWeb&amphttps://app.appsflyer.com/com.urbanclap.urbanclap?pid=MobileWeb&amp" target="_blank">
              <Image
                h="50px"
                w="150px"
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
              />
              </a>
            </Box>
            <Box>
                <a href="https://app.appsflyer.com/id1032480595?pid=MobileWeb&amp;c=home_app_buttons" target="_blank">
              <Image
                h="50"
                w="150px"
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
              />
              </a>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

 export default Footer
