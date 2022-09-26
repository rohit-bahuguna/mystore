import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/loginAction";
import { addToCart } from "../../redux/actions/cartActions";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from "../../utils/api/userAPI";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);
  const cartData = useSelector((state) => state.cart.products);


  if (loginData.status) {
    navigate("/");
  }


  const getallcart = async () => {


    const url = "https://foodapibybharat.herokuapp.com/cart/getallcart";
    const response = await axios
      .get(url, {
        headers: {
          auth: loginData.token,
        },
      })
      .catch((error) => console.log(error));



    if (cartData.length !== response.data.length && cartData.length < response.data.length && response.data.length !== 0) {
      response.data.map((value) => {
        value.order.id = value._id

        dispatch(addToCart(value.order))

      });
    }

  };



  useEffect(() => {
    // if (loginData.status) {
    //   getallcart();
    // }

  })

  const loginFn = async (e) => {

    e.preventDefault()

    logIn(user)
      .then(response => {
       
        dispatch(loginUser(response.data))
        toast.success('Account Created Successfully');
      })
      .catch(error => {
        console.log(error);
        toast.error(error.response.data.message);
      });

  };
  return (
    <>
      <section className="why_section layout_padding">
        <div className="container">

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form >
                  <fieldset>

                    email: <input className="text-lowercase" type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} name="password" required />

                    Password: <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" required />

                    <input className="rounded-pill" type="submit" value="Sign In" onClick={(e) => { loginFn(e) }} />
                    <br />
                    <Link to="/signup">
                      <input className="rounded-pill" type="submit" value="New Here Create Account" />
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

export default Login;

