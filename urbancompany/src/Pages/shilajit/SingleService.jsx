import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../../Redux/allservices/action'
import { Box,Image,Heading, Button } from '@chakra-ui/react'
import Video from "../shilajit/Servicepages/video"
import PackageTop from './Servicepages/PackageTop'
import Packagedrop from './Servicepages/Packagedrop'
const SingleService = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const allProduct = useSelector((store) => store?.allProduct)
  useEffect(() => {
      dispatch(getAllProducts())
   
    
  }, [dispatch])
  const handalClick=()=>{
    navigate("/cart")
        }
  const womensdata=allProduct.data[0]
  return (
    <div>
        {womensdata!==undefined? <Video title={womensdata.Salon_for_women_data[0]?.Title} videos={womensdata.Salon_for_women_data[0]?.videos}/> : ''}

    
<Box display="flex">
{womensdata!==undefined? 
     
womensdata.Salon_for_women_data[0].package.map((val,index) =>{
  return(<>
    <Box key={index} maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden' margin="10px" marginBottom="30px">
    <Image src={val.img} borderRadius='lg' />
    <Heading as='h6' size='xs'>
  {val.para}
</Heading>
</Box>
  </>)
})
: ""}

</Box>
<Box height="500px" width="60%" border="" overflow="auto" marginLeft="30px" marginBottom="10px">
<Box marginBottom="30px" >
{womensdata!==undefined? 
     
     womensdata.Salon_for_women_data[0].packages_components1.map((val,index) =>{
       return(<>
         <PackageTop key={index} title={val.title} price={val.price} time={val.time} para={val.para} />
       </>)
     })
     : ""}
     </Box>
<Box marginBottom="30px">
{womensdata!==undefined? 
     
     womensdata.Salon_for_women_data[0].packages_components2.map((val,index) =>{
       return(<>
         <Packagedrop key={index} title={val.title} price={val.price} time={val.time} para={val.para} />
       </>)
     })
     : ""}
</Box>
</Box>

<Button colorScheme='purple' size='lg' onClick={handalClick}>
View Cart
</Button>


    </div>
  )
}

export default SingleService