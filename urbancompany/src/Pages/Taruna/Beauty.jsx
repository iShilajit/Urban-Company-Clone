
import React from 'react'
import { Heading, Box, Flex, Image, Text } from '@chakra-ui/react'
import styles from "./Blognav.module.css"
const Beauty = () => {
  return (
    
    <Box pl="100px" pr="100px" >
     <Flex >
        {/* box_1  */}
        <Box w="70%">

          <Heading as='h1'size='lg' mt="5px" textAlign={"left"}> Beauty</Heading>
         <Box mt="20px">
           <hr  className={styles.hrr} />
         </Box>

          <Flex  h="600" pt="40px" gap="50px">
            <Box textAlign={"left"}>
                <Box>
                    <Image h="250px" w="450px" src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/11170202/Best-Sheet-Masks-in-India.jpg"></Image>
                </Box>
                <Box pt="45px">
                    <Text fontSize="13px" textAlign={"left"} color={"gray"}>SEPTEMBER 11, 2020</Text>
                </Box>

                <Box>
                    <Box pt="15px">
                        <Heading  as="h2"size='xl'>Best Sheet Masks in India</Heading>
                    </Box>
                    
                    <Text mt="15px" fontSize="18px" w="450px" >
                    Sheet masks are like those quick facials you can have with no added effort. Most of these face masks usually live up to their claims. Here we have a look at the…
                    </Text>
                </Box>
               
            </Box>
            {/* box-2  */}
            <Box textAlign={"left"}>
            <Box >
                 
                 <Flex gap="20px">
                    <Box>
                        <Image w="100px" pt="10px" h="100px" src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/02182811/65292faf9652d19903511ac3a4a31340.jpg"></Image>
                    </Box>
                    
                    <Box>
                        <Box color="red"fontSize="11px" >
                            <span>BEAUTY, </span>
                            <span>SKINCARE</span>
                        </Box>
                        <Box>
                            <Text className={styles.uu} fontSize="12px" >The Wonders of Coconut Oil for Face</Text>
                        </Box>
                    </Box>
                
                 </Flex>
                <Box pt="20px" pb="20px">
                    <hr />
                </Box>

            </Box>
            <Box>
            <Flex gap="20px">
                    <Box>
                        <Image w="100px" pt="10px" h="100px" src="https://blog.urbancompany.com/wp-content/uploads/2020/08/rollon12-512x341-512x341.jpg"></Image>
                    </Box>
                    <Box>
                        <Box color="red"fontSize="11px" >
                            <span>BEAUTY, </span>
                            <span>SKINCARE</span>
                        </Box>
                        <Box>
                            <Text fontSize="12px" className={styles.uu} >RICA Roll-on Waxing: The Process</Text>
                        </Box>
                    </Box>
                 </Flex>
                 <Box pt="20px" pb="20px">
                    <hr />
                </Box>
            </Box>
            <Box>
            <Flex gap="20px">
                    <Box>
                        <Image w="100px" h="100px" pt="10px" src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/28123311/new-150x150.jpg"></Image>
                    </Box>
                    <Box>
                        <Box color="red"fontSize="11px" >
                            <span>BEAUTY, </span>
                            <span>SKINCARE</span>
                        </Box>
                        <Box>
                            <Text fontSize="12px" className={styles.uu} >All You Need to Know About the Sara Fruit Cleanup</Text>
                        </Box>
                    </Box>
                 </Flex>
                 <Box pt="20px" pb="20px">
                    <hr />
                </Box>
            </Box>

            <Box>
            <Flex gap="20px">
                    <Box>
                        <Image w="100px" h="100px" pt="10px" src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/24091358/kama-480x480.png"></Image>
                    </Box>
                    <Box>
                        <Box color="red"fontSize="11px" >
                            <span>BEAUTY, </span>
                            <span>SKINCARE</span>
                        </Box>
                        <Box>
                            <Text fontSize="12px" className={styles.uu} >Best Night Creams in India for Indian Skin Types</Text>
                        </Box>
                    </Box>
                 </Flex>
                 <Box pt="20px" pb="20px">
                    <hr />
                </Box>
            </Box>

            </Box>
          </Flex>
       </Box>
        
        {/* box_2  */}
        <Box>
            
        </Box>
     </Flex>   
    </Box>
  )
}

export default Beauty
