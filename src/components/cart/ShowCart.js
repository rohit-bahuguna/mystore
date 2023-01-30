import React from "react";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeItemsFromCart } from "../../utils/api/cartAPI";
const ShowCart = (props) => {
  
console.log(props.product);
  const { name, photos ,  _id  , price , user } = props.product;
  const loginData = useSelector((state) => state.login);
 
    
  const dispatch = useDispatch();
console.log(props.product);


  

 const removeItemfn =  (id) => {
  console.log(id);
   dispatch(removeFromCart(id))
   removeItemsFromCart(id).then((res) => {
     console.log(res.data);
   })
 }

  return (
    <>
      <ToastContainer/>
    

      
         
         <div class="row ">
            <div class="col-sm-12 col-md-12 col-lg-12">
               <div class="box">
                  <div class="option_container">
                     <div class="options" >
                  <button   type="button" class=" btn btn-outline-danger " id={_id} onClick={(e) =>removeItemfn(e.target.id)}>  
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
                       <img src={photos[0].secure_url} alt="" />
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


