import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Orders =  () => {
   const loginData = useSelector((state) => state.login);
  const [order, setOrder] = useState([]);


  const getOrder = async () => {
    const url = 'https://foodapibybharat.herokuapp.com/order'
    const response = await axios.get(url, {
         headers: {
        auth: loginData.token,
      },
    })
     
    let arr =  response.data[0].order.items
     setOrder([...arr])
   
   
  }
  useEffect(() => {
    if (loginData.status) {
      getOrder()
    }
  } , [])

  return (
     <>
        
       <section className="product_section layout_padding">
        <div className="container d-flex flex-lg-row justify-around flex-md-row">
           <div className="container flex-grow-1">
     { order && order.map((item , index ) =>   {return <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-12">
               <div className="box">
                  
                  <div className="img-box">
                       <img src={item.image} alt="" />
                      <div></div>
                  </div>
                  <div className="detail-box">
                     <h5>
                        {item.name}
                     </h5>
                     <h6>
                        {item.price}
                     </h6>
                  </div>
               </div>
            </div>
        
            </div> })}
            </div>
        </div>
        </section>
    </>
  );
};

export default Orders;
