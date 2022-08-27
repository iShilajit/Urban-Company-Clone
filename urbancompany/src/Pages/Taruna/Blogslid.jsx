import React, { useState } from 'react'
// import {Box, Image } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import styles from "./Blognav.module.css"
// import { useState } from 'react'

var data=[
    {
        id:1,
       img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/08/04220235/cleaningblog-740x560.jpg",
       head1:"INSIDE URBAN COMPANY",
       para:"All About Urban Company’s Unparalleled Cleaning Training Program",
    },
    {
        id:2,
        img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172838/ucfeatured-740x560.jpeg",
        head1:"INSIDE URBAN COMPANY",
        para:"Urban Company partners with Saudi’s leading beauty services provider Baheya to bring unparalleled at-home services in the region",
     },
     {
        id:3,
        img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172251/pros.jpg",
        head1:"INSIDE URBAN COMPANY",
        para:"#UCUpskill — Rising with Urban Company",
     },
     {
        id:4,
        img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/08/04220235/cleaningblog-740x560.jpg",
        head1:"INSIDE URBAN COMPANY",
        para:"Rolling out health insurance for all our partners!",
     },
     {
        id:5,
        img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/25164051/0_h2Lrv6hbeEe_SRvC.jpg",
        head1:"INSIDE URBAN COMPANY",
        para:"The ‘Whatever It Takes’ Company",
     },
     {
        id:6,
        img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/08/04220235/cleaningblog-740x560.jpg",
        head1:"INSIDE URBAN COMPANY",
        para:"All About Urban Company’s Unparalleled Cleaning Training Program",
     },
     {
        id:7,
        img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/08/04220235/cleaningblog-740x560.jpg",
        head1:"INSIDE URBAN COMPANY",
        para:"All About Urban Company’s Unparalleled Cleaning Training Program",
     },
     {
        id:8,
         img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172838/ucfeatured-740x560.jpeg",
         head1:"INSIDE URBAN COMPANY",
         para:"Urban Company partners with Saudi’s leading beauty services provider Baheya to bring unparalleled at-home services in the region",
      },
      {
        id:9,
         img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/07/28172251/pros.jpg",
         head1:"INSIDE URBAN COMPANY",
         para:"#UCUpskill — Rising with Urban Company",
      },
      {
        id:10,
         img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/08/04220235/cleaningblog-740x560.jpg",
         head1:"INSIDE URBAN COMPANY",
         para:"Rolling out health insurance for all our partners!",
      },
      {
        id:11,
         img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/25164051/0_h2Lrv6hbeEe_SRvC.jpg",
         head1:"INSIDE URBAN COMPANY",
         para:"The ‘Whatever It Takes’ Company",
      },
      {
        id:12,
         img1:"https://de927adv5b23k.cloudfront.net/wp-content/uploads/2022/08/04220235/cleaningblog-740x560.jpg",
         head1:"INSIDE URBAN COMPANY",
         para:"All About Urban Company’s Unparalleled Cleaning Training Program",
      }
]
const Blogslid = () => {

//  console.log(data)
// const [width,setWidth]=useState(0);

// const 

  return (
    <div className={styles.blogbody}>
       <motion.div 
       className={styles.carouseldata}
       >
        <motion.div 
        className='boxflex'
        drag="x"
        dragConstraints={{right:0}}
        style={{display:"flex",gap:"10px" ,width:"700%"}}
        >
        
        {
            data.map((ele)=>{
                return(
                    <motion.div key={ele.id}
                    className={styles.item}
                    style={{ width:"330px" , marginTop:"15px"}}                    >
                        
                        <img src={ele.img1} style={{marginTop:"10px",marginBottom:"10px"}} width="400px" h="300px" alt="dd"></img>
                        <div style={{color:"red",marginTop:"10px",marginBottom:"10px",fontSize:"10px", textAlign:"left"}} >{ele.head1}</div>
                        <div className={styles.uu} style={{marginTop:"10px",marginBottom:"10px", fontSize:"16px",textAlign:"left"}}>{ele.para}</div>
                    </motion.div>
                )
            })
        }
        </motion.div>
       </motion.div>
    </div>
  )
}




export default Blogslid
