import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <> 
        <footer>
      <div className="container">
         <div className="row">
            <div className="col-md-4">
               <div className="full">
                  <div className="logo_footer">
                     <Link to="/"><img width="210" src="images/Logo.png" alt="#" /></Link>
                  </div>
                  <div className="information_f">
                     <p><strong>ADDRESS:</strong> Haldwani, Nainital Uttarakhand, INDIA</p>
                     <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                     <p><strong>EMAIL:</strong> rohitbahuguna.work@gmail.com</p>
                  </div>
               </div>
            </div>
            <div className="col-md-8">
               <div className="row">
                  <div className="col-md-7">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="widget_menu">
                              <h3>Menu</h3>
                              <ul>
                                 <li><Link to="/">Home</Link></li>
                              
                                 <li><Link to="#">Contact</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="widget_menu">
                              <h3>Account</h3>
                              <ul>
                                 <li><Link to="/admin_add_product">Add Product</Link></li>
                                 <li><Link to="/admin_product_list">Product Add/Delete</Link></li>
                                 <li><Link to="/login">Login</Link></li>
                                 <li><Link to="/signup">Register</Link></li>
                                 <li><Link to="/productlist">Shopping</Link></li>
                                 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="widget_menu">
                        <h3>Newsletter</h3>
                        <div className="information_f">
                           <p>Subscribe by our newsletter and get update protidin.</p>
                        </div>
                        <div className="form_sub">
                           <form>
                              <fieldset>
                                 <div className="field">
                                    <input type="email" placeholder="Enter Your Mail" name="email" />
                                    <input type="submit" value="Subscribe" />
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
        </>
    )
}

export default Footer;