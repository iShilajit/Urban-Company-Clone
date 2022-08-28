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
    <span><svg width="10px" height="10%" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 .97l9 2.25V12a7 7 0 01-2.8 5.6L12 22.25 5.8 17.6A7 7 0 013 12V3.22l9-2.25zm4.36 6.262L11 11.698 8.64 9.732l-1.28 1.536 3 2.5a1 1 0 001.28 0l6-5-1.28-1.536z" fill="#0F0F0F"></path></svg></span>
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