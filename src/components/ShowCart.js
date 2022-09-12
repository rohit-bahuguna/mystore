import React from "react";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShowCart = (props) => {
  

  const { name,  image, id  , price} = props.product;
  const loginData = useSelector((state) => state.login);
 
    
  const dispatch = useDispatch();



  const removeItem = async ()=>{
    const url = "https://foodapibybharat.herokuapp.com/cart/deletefromcart/"+id

    const response = await axios.delete(url, {
      headers: {
        auth: loginData.token,
      },
    }).catch((error) => console.log(error.massage))

    
    if(response.data !== null){
      dispatch(removeFromCart(response.data._id))
    }
    
  }

 const removeItemfn =  () => {
    if(loginData.status){
      removeItem();
      toast.info("Removed from cart")
    } else if (id === undefined) {
      let newid =   props.product._id
      dispatch(removeFromCart(newid))
      toast.info("Removed from cart")
    }else {
      
        dispatch(removeFromCart(id))
      toast.info("Removed from cart")
   }
   
 }

  return (
    <>
      <ToastContainer/>
    

      
         
         <div class="row ">
            <div class="col-sm-12 col-md-12 col-lg-12">
               <div class="box">
                  <div class="option_container">
                     <div class="options" >
                  <button   type="button" class=" btn btn-outline-danger " onClick={removeItemfn}>  
                           Remove
                       </button>
                       <br/>
                  <div className="d-flex flex-row justify-content-between " > 
                          
                          <button type="button" class=" btn btn-outline-dark p-10">+</button>
                          <button type="button" class=" btn btn-outline-dark ">-</button>
                        </div>
                     </div>
                  </div>
                  <div class="img-box">
                       <img src={image} alt="" />
                      <div></div>
                  </div>
                  <div class="detail-box">
                     <h5>
                        {name}
                     </h5>
                     <h6>
                        {price}
                     </h6>
                  </div>
               </div>
            </div>
        
         </div>
      
    </>
  );
};

export default ShowCart;


