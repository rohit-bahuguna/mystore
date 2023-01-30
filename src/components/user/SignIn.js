import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/loginAction";
import { addToCartFromAPI } from "../../redux/actions/cartActions";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from "../../utils/api/userAPI";
import { getAllCartApi } from "../../utils/api/cartAPI";

const SignIn = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);
  const cartData = useSelector((state) => state.cart.products);
const loggedInUser = useSelector(state => state.cart.user);

  if (loginData.status) {
    navigate("/");
  }


  const getallcart = async () => {

const response = await getAllCartApi()

    console.log(response);
    const cartItems = response.data.carts.cartItem 
    console.log(cartItems);
    dispatch(addToCartFromAPI(cartItems))
  

  };



  useEffect(() => {
    if (loginData.status) {
      getallcart();
    }

  })

  const signInFn = async (e) => {
setLoading(true)
    e.preventDefault()

    logIn(user)
      .then(response => {
       
        dispatch(loginUser(response.data))
       setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        toast.error(error.response.data.message);
      });

  };
  return (
    <>
      <ToastContainer/>
      <section className="why_section layout_padding">
        <div className="container">

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form  >
                  <fieldset>

                    email: <input className="text-lowercase" type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} name="password" required />

                    Password: <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" required />

                    <input className="rounded-pill" type="submit" value={loading ? "Signing In" : "Sign In"}  disabled={ loading} onClick={(e)=> signInFn(e) }/>
                  <br/>
                    <Link to="/signup">
                      <input className="rounded-pill" type="submit" value="New Here Create Account"  />
                    </Link>
                  </fieldset>

                </form>

              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

