import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import styles from "./Blognav.module.css"
import { Link as RouterLink } from 'react-router-dom'
const Bolgnav = () => {
  return (
    <Box border="1px solid #d3d3d3" h="50px" pl="10%" pr="10%">
     
     <Flex gap="30px" pt="10px">

       <Box className={styles.dropdown}>
        <Flex className={styles.bc} gap="1px">

         <span >BEAUTY 
         </span>
         <Box pt="3px">
             <Image pt="4px" w="15px" h="15px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACenp5WVlZdXV2QkJDj4+MZGRlpaWmzs7Orq6s1NTUgICC2traMjIxsbGy/v7/Jycn5+fnX19fs7Ox1dXXz8/NgYGBBQUElJSVOTk7b29uBgYHExMQREREwMDCWlpZ+fn7Q0NCfMdXKAAADIklEQVR4nO3X6VLiQBiFYRAFZZEsQEC2yP1f5JgObhiMWOfQM1Pv85Oi+us3Jk3sdAAAf6/+IZnoJOk6dtBn6aarN51ksbtepUtDX2X3EDstyApTX2XZj53X6cz2xsAXaezA/ttWdquRzn73tm4SNzAbH/fxnM6kCy/y8nXpuKfqbb2JqTavlpX14quYR2pS72H49kF+03j8zcrHr+62bcvn9fJ3wh1fanQSmFZ/z4bv9ZpPkdb775jouEN+pv4T3r9/EEoaDvh5c+GhdcIwfG8j3PNl6o0v3j8ozlzxWWPg0w9GhJeJgWzHl/pygavfjrLpm1l5e6oYNn3x1CTMyAWb/Y311+mLVLyZxcmTfl3J6U3qEG7TR++Ms+pjYGA1Di83TefzNdw0n5AGvZiFq+m903QZvbAwDymjF96ah9xR6EShBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFErELyzMQ8rohcvJg9PkPnrhVVBoLez1rWab6IX/9Vk6rIYvzUPm1ZCpecg5STV8sPAOeaqGPHpnnLUOp8DaOiPbVTOG1hnf6Pqv7zbMyK0zvhGekW7mHBFu0oFzwrfCg9h9Nk6YhAkb44QWo7CBB9v69ZPendkGtKqfEttBkHev8KS36NV7mDuucnZ8Kxybf49adjE4vjluUvGBk5er49LRDtJa/8P78Vjnw6qTuIEviaMf/4fwK9vYgS83amHsG/Vj5wXp3hXo+x26VDoft2/3Qrsi+hP42fqwHeokh9z6MggAAP5tfwBsCzwbbNEwsQAAAABJRU5ErkJggg=="></Image>

         </Box>
        </Flex>
            <Box size='xs'  w="150px" color={"gray"}  className={styles.dropdowncontent}>
                <RouterLink to="/haircare">

               <Box mt="14px" mb="8px" borderBottom="1px solid #d3d3d3">Hair Care</Box>
                </RouterLink>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Make Up</Box>
               <Box mb="8px">Skincare</Box>
            </Box>
        </Box>


        <Box className={styles.dropdown}>
         <Flex className={styles.bc} gap="1px">
         <span>MEN</span>
         <Box pt="3px">
             <Image pt="4px" w="15px" h="15px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACenp5WVlZdXV2QkJDj4+MZGRlpaWmzs7Orq6s1NTUgICC2traMjIxsbGy/v7/Jycn5+fnX19fs7Ox1dXXz8/NgYGBBQUElJSVOTk7b29uBgYHExMQREREwMDCWlpZ+fn7Q0NCfMdXKAAADIklEQVR4nO3X6VLiQBiFYRAFZZEsQEC2yP1f5JgObhiMWOfQM1Pv85Oi+us3Jk3sdAAAf6/+IZnoJOk6dtBn6aarN51ksbtepUtDX2X3EDstyApTX2XZj53X6cz2xsAXaezA/ttWdquRzn73tm4SNzAbH/fxnM6kCy/y8nXpuKfqbb2JqTavlpX14quYR2pS72H49kF+03j8zcrHr+62bcvn9fJ3wh1fanQSmFZ/z4bv9ZpPkdb775jouEN+pv4T3r9/EEoaDvh5c+GhdcIwfG8j3PNl6o0v3j8ozlzxWWPg0w9GhJeJgWzHl/pygavfjrLpm1l5e6oYNn3x1CTMyAWb/Y311+mLVLyZxcmTfl3J6U3qEG7TR++Ms+pjYGA1Di83TefzNdw0n5AGvZiFq+m903QZvbAwDymjF96ah9xR6EShBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFErELyzMQ8rohcvJg9PkPnrhVVBoLez1rWab6IX/9Vk6rIYvzUPm1ZCpecg5STV8sPAOeaqGPHpnnLUOp8DaOiPbVTOG1hnf6Pqv7zbMyK0zvhGekW7mHBFu0oFzwrfCg9h9Nk6YhAkb44QWo7CBB9v69ZPendkGtKqfEttBkHev8KS36NV7mDuucnZ8Kxybf49adjE4vjluUvGBk5er49LRDtJa/8P78Vjnw6qTuIEviaMf/4fwK9vYgS83amHsG/Vj5wXp3hXo+x26VDoft2/3Qrsi+hP42fqwHeokh9z6MggAAP5tfwBsCzwbbNEwsQAAAABJRU5ErkJggg=="></Image>

         </Box>
        </Flex>   
            <Box size='xs' w="150px" color={"gray"}  className={styles.dropdowncontent}>
               <Box mt="14px" mb="8px" borderBottom="1px solid #d3d3d3">Grooming</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Skincare</Box>
               <Box mb="8px" >Hair care</Box>
            </Box>
        </Box>


        <Box className={styles.dropdown} >
         <Flex className={styles.bc} gap="1px">
         <span>INTERIORS</span>
         <Box pt="3px">
             <Image pt="4px" w="15px" h="15px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACenp5WVlZdXV2QkJDj4+MZGRlpaWmzs7Orq6s1NTUgICC2traMjIxsbGy/v7/Jycn5+fnX19fs7Ox1dXXz8/NgYGBBQUElJSVOTk7b29uBgYHExMQREREwMDCWlpZ+fn7Q0NCfMdXKAAADIklEQVR4nO3X6VLiQBiFYRAFZZEsQEC2yP1f5JgObhiMWOfQM1Pv85Oi+us3Jk3sdAAAf6/+IZnoJOk6dtBn6aarN51ksbtepUtDX2X3EDstyApTX2XZj53X6cz2xsAXaezA/ttWdquRzn73tm4SNzAbH/fxnM6kCy/y8nXpuKfqbb2JqTavlpX14quYR2pS72H49kF+03j8zcrHr+62bcvn9fJ3wh1fanQSmFZ/z4bv9ZpPkdb775jouEN+pv4T3r9/EEoaDvh5c+GhdcIwfG8j3PNl6o0v3j8ozlzxWWPg0w9GhJeJgWzHl/pygavfjrLpm1l5e6oYNn3x1CTMyAWb/Y311+mLVLyZxcmTfl3J6U3qEG7TR++Ms+pjYGA1Di83TefzNdw0n5AGvZiFq+m903QZvbAwDymjF96ah9xR6EShBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFErELyzMQ8rohcvJg9PkPnrhVVBoLez1rWab6IX/9Vk6rIYvzUPm1ZCpecg5STV8sPAOeaqGPHpnnLUOp8DaOiPbVTOG1hnf6Pqv7zbMyK0zvhGekW7mHBFu0oFzwrfCg9h9Nk6YhAkb44QWo7CBB9v69ZPendkGtKqfEttBkHev8KS36NV7mDuucnZ8Kxybf49adjE4vjluUvGBk5er49LRDtJa/8P78Vjnw6qTuIEviaMf/4fwK9vYgS83amHsG/Vj5wXp3hXo+x26VDoft2/3Qrsi+hP42fqwHeokh9z6MggAAP5tfwBsCzwbbNEwsQAAAABJRU5ErkJggg=="></Image>

         </Box>
        </Flex>   
            <Box  size='xs'  w="150px" color={"gray"} className={styles.dropdowncontent}>
               <Box mt="14px" mb="8px" borderBottom="1px solid #d3d3d3">Decor & Style</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Kitchens</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Bathrooms</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Bedrooms</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Living Rooms</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Dining Rooms</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Other Areas</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Real Home Tours</Box>
               <Box mb="8px" mt="14px" >Homecare</Box>
            </Box>
        </Box>

        <Box className={styles.dropdown}>
        <Flex className={styles.bc} gap="1px">

         <span>LIFESTYLE</span>
         <Box pt="3px">
             <Image pt="4px" w="15px" h="15px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAACenp5WVlZdXV2QkJDj4+MZGRlpaWmzs7Orq6s1NTUgICC2traMjIxsbGy/v7/Jycn5+fnX19fs7Ox1dXXz8/NgYGBBQUElJSVOTk7b29uBgYHExMQREREwMDCWlpZ+fn7Q0NCfMdXKAAADIklEQVR4nO3X6VLiQBiFYRAFZZEsQEC2yP1f5JgObhiMWOfQM1Pv85Oi+us3Jk3sdAAAf6/+IZnoJOk6dtBn6aarN51ksbtepUtDX2X3EDstyApTX2XZj53X6cz2xsAXaezA/ttWdquRzn73tm4SNzAbH/fxnM6kCy/y8nXpuKfqbb2JqTavlpX14quYR2pS72H49kF+03j8zcrHr+62bcvn9fJ3wh1fanQSmFZ/z4bv9ZpPkdb775jouEN+pv4T3r9/EEoaDvh5c+GhdcIwfG8j3PNl6o0v3j8ozlzxWWPg0w9GhJeJgWzHl/pygavfjrLpm1l5e6oYNn3x1CTMyAWb/Y311+mLVLyZxcmTfl3J6U3qEG7TR++Ms+pjYGA1Di83TefzNdw0n5AGvZiFq+m903QZvbAwDymjF96ah9xR6EShBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFEpQaEWhBIVWFErELyzMQ8rohcvJg9PkPnrhVVBoLez1rWab6IX/9Vk6rIYvzUPm1ZCpecg5STV8sPAOeaqGPHpnnLUOp8DaOiPbVTOG1hnf6Pqv7zbMyK0zvhGekW7mHBFu0oFzwrfCg9h9Nk6YhAkb44QWo7CBB9v69ZPendkGtKqfEttBkHev8KS36NV7mDuucnZ8Kxybf49adjE4vjluUvGBk5er49LRDtJa/8P78Vjnw6qTuIEviaMf/4fwK9vYgS83amHsG/Vj5wXp3hXo+x26VDoft2/3Qrsi+hP42fqwHeokh9z6MggAAP5tfwBsCzwbbNEwsQAAAABJRU5ErkJggg=="></Image>

         </Box>
        </Flex>
            <Box  size='xs' w="180px" color={"gray"} className={styles.dropdowncontent}>
               <Box mt="14px" mb="8px" borderBottom="1px solid #d3d3d3">Health & Wellness</Box>
               <Box mb="8px" borderBottom="1px solid #d3d3d3">Party</Box>
               <Box mb="8px">Wedding</Box>
            </Box>
        </Box>

        <Box className={styles.dropdown}>
         <span className={styles.bc}>HUMANS OF URBAN COMPANY</span>
            {/* <Box className={styles.dropdowncontent}>
               
            </Box> */}
        </Box>

        <Box className={styles.dropdown}>
         <span className={styles.bc}>INSIDE URBAN COMPANY</span>
            {/* <Box className={styles.dropdowncontent}>
               
            </Box> */}
        </Box>


        <Box className={styles.dropdown}>
         <span className={styles.bc}>TUG VIDEOS</span>
            {/* <Box className={styles.dropdowncontent}>
               
            </Box> */}
        </Box>

        <Box className={styles.dropdown}>
         <span className={styles.bc}>URBANCOMPANY.COM</span>
            {/* <Box className={styles.dropdowncontent}>
               
            </Box> */}
        </Box>
     </Flex>

    </Box>
  )
}

export default Bolgnav
