import React from 'react'
import "./Video.css";
import { Button,Heading} from '@chakra-ui/react'
import Videocaraousal from './Videocaraousal'

const video = ({title,videos}) => {
  return (
    <div>
    <div className="container">
   <div id="child1">
   <Button colorScheme='Black' variant='outline'>
   UC Safe
 </Button>
 <br/>
 <br/>
   <Heading as='h2' size='2xl'>
   {title}
 </Heading>
 <br/>
 <p>🌟 4.5(10M)</p>
   </div>
   <div id="child2">
   <Videocaraousal videoProperties={videos}/>
     
   </div>


</div>
   </div>
  )
}

export default video