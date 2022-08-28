import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import  styles from "./Blognav.module.css"
const Blogslider = () => {
  return (
    <Box pl="100px" pr="100px" >
     <Heading as='h1'size='lg' mt="5px">
        Latest Posts
    </Heading>
    <Box mt="20px">

    <hr  className={styles.hrr} />
    </Box>
    </Box>
  )
}

export default Blogslider
