import React from 'react'
import styles from './sec_payment.module.css'
import {Link, useNavigate} from "react-router-dom"


 
export const Secpay = () => {
    const navigate = useNavigate()
    const [isAuth,setAuth]=React.useState(false)

     const   handleChange =()=>{


        alert("Payment successfull, Your Reservation Details Will Be Sent To  Your Registered Mobile No.")
       
        setAuth(!isAuth)
        navigate("/", {replace:true})
    }

  return (
  

    
    <div> 
       
          <div className={`${styles.fathercont}`}>
        <div className={`${styles.row}`}>
            <div className={`${styles.col-75}`}>
                <div className={`${styles.container}`}>
                    
    
                        <div className={`${styles.row}`}>
                            <div className={`${styles.col-50}`}>
    
                                <div className={`${styles.col-50}`}>
                                    <h3>Payment</h3>
                                    <label >Accepted Cards</label>
                                    <div className="icon-container">
                                        <i className="fa fa-cc-visa" style= {{color:"navy",marginRight:"3px"}}></i>
                                        <i className="fa fa-cc-amex" style={{color:"blue",marginRight:"3px"}}></i>
                                        <i className="fa fa-cc-mastercard" style={{color:"red",marginRight:"3px"}}></i>
                                        <i className="fa fa-cc-discover" style={{color:"orange",marginRight:"3px"}}></i>
                                    </div>
                                    <label >Name on Card</label>
                                    <input type="text" className={`${styles.cname}`}  placeholder="Name"/>
                                    <label >Credit card number</label>
                                    <input type="text" className={`${styles.ccnum}`}  placeholder="1111-2222-3333-4444"/>
                                    <label >Exp Month</label>
                                
                                    <select  className={`${styles.expmonth}`}>
                                        <option value="">Month</option>
                                        <option value="">01-jan</option>
                                        <option value="">02-feb</option>
                                        <option value="">03-march</option>
                                        <option value="">04-april</option>
                                        <option value="">04-may</option>
                                        <option value="">05-june</option>
                                        <option value="">06-july</option>
                                        <option value="">07-Aug</option>
                                    </select>
                                    <select  className={`${styles.expmonth}`}>
                                        <option value="">Year</option>
                                        <option value="">2022</option>
                                        <option value="">2023</option>
                                        <option value="">2024</option>
                                        <option value="">2025</option>
                                        <option value="">2026</option>
                                        <option value="">2027</option>
                                        <option value="">2028</option>
                                        <option value="">2029</option>
                                    </select>
    
    
                                    <div className="row">
    
                                        <div className="col-50">
                                            <label >Security code</label>
                                            <input type="text"  placeholder="1234" style={{width: "300px"}}/>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-50">
                                            <label >Pan</label>
                                            <input type="text" style={{width: "300px"}}/>
                                        </div>
                                    </div>
                                    
                                    <label >Billing Country</label>
                                    <select name="credit card" style={{width: "200px",height: "40px",bordeRadius: "5px"}}>
                                        <option value="">India</option>
                                        <option value="">Aus</option>
                                        <option value="">ireland</option>
                                        <option value="">US</option>
                                        <option value="">Israel</option>
                                        <option value="">Jermany</option>
                                        
                                    </select>
    
                                </div>

                                <button className={`${styles.btn}`} style={{width: "400px",height: "40px" } } onClick ={()=> handleChange()}>
                                    <Link to="/" style={{textDecoration:"none",color:"white"}}>BOOKING</Link>
                                {/* <h4 style={{color: "rgb(255, 255, 255)",margin: "0px"}}>BOOKING</h4> */}
                                </button>
    
                            </div>
                           
                            
                       
                    
                </div>
               
                
            </div>
            
            
               
        </div>
    

    </div>
</div>




    </div>
   
  )
}
