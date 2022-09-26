import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/loginAction";
import { logOut } from "../../utils/api/userAPI";
import { BsCart } from "react-icons/bs";

const Header = () => {
   const navigate = useNavigate();
   const loginData = useSelector((state) => state.login);


   const dispatch = useDispatch();

   const handleAuth = () => {


      logOut().then(response => {
         console.log(response.data);
         dispatch(logoutUser(response.data))
      }).catch(error => console.log(error))



      //  if (loginData.status) {

      //    ;
      //     navigate("/");
      //  } else {

      //    navigate("/login");
      //  }
   };

   return (
      <>


         <header className="header_section ">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <Link className="navbar-brand" to="/"><img width="250" src="../images/Logo.png" alt="#" /></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home </Link>
                        </li>

                        <li className="nav-item">
                           <Link className="nav-link" to="/productlist">Products</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/cart"> <BsCart /> Cart</Link>
                        </li>
                        <li className="nav-item">
                           {loginData.status ? <Link to="#" className="nav-link" onClick={handleAuth}>
                              Log Out

                           </Link> : <Link className="nav-link " to="/login">
                              Log in

                           </Link>}

                        </li>
                        {loginData.status
                           ? <li className="nav-item ">
                              <Link to='/profile'>
                                 <img className="profile_picture" src={loginData.user.photo.secure_url} alt="Your Profile" />
                              </Link>
                           </li>
                           : ""}
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                              <i className="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>

      </>
   );
};

export default Header;


