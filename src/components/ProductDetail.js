import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneProducts } from "../utils/api/productAPIs";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productDetailActions";
import { addToCart } from "../redux/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  const [SelectedProduct, setSelectedProduct] = useState({})
  const ratingStars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]
  //console.log(SelectedProduct);
  const loginData = useSelector((state) => state.login);

  const cartData = useSelector((state) => state.cart);


  useEffect(() => {
    getOneProducts(id).then(response => {
      console.log((response.data.product));
      response.data.product.photos = response.data.product.photos.map(value => {
        return value.secure_url
      })

      setSelectedProduct({ ...response.data.product, selectedImage: response.data.product.photos[0], ratingStars })
    }).catch(error => console.log(error))

  }, []);

  const addtoCart = async () => {
    dispatch(addToCart(SelectedProduct));
    toast.success("product added to cart")
    // // add to cart api call from here
    // if (loginData.status) {
    //   const url = "https://foodapibybharat.herokuapp.com/cart/addtocart";
    //   let orders = {
    //     id: SelectedProduct._id,
    //     name: SelectedProduct.name,
    //     food_type: SelectedProduct.food_type,
    //     price: SelectedProduct.price,
    //     description: SelectedProduct.description,
    //     image: SelectedProduct.image,
    //     category: SelectedProduct.category,
    //     quantity: 1,

    //   };



    //   const response = await axios
    //     .post(url, orders, {
    //       headers: {
    //         auth: loginData.loginUsername.token,
    //       },
    //     })
    //     .catch((err) => console.log("erroe----->", err));
    //     toast.success("product added to cart")

    // }
  };
  function isEmpty(SelectedProduct) {
    return Object.keys(SelectedProduct).length === 0;
  }

  return (
    <>
      <ToastContainer />
      {!isEmpty(SelectedProduct) ?
        <section class="product_section layout_padding">
          <div className="container d-flex flex-lg-row justify-around flex-md-row">
            <div class="container flex-grow-1">
              <div class="row ">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="detail">

                    <div className="img_box">
                      <div class="detail_showCash">
                        {
                          !isEmpty(SelectedProduct) && SelectedProduct.photos.map(value => {
                            return <img src={value} alt={SelectedProduct.name} class="img-show" onClick={(e) => { setSelectedProduct({ ...SelectedProduct, selectedImage: e.target.currentSrc }) }} />
                          })
                        }

                      </div>
                      <div>

                        <img src={SelectedProduct.selectedImage} alt="" class="img-show_big" />
                      </div>
                    </div>

                    <div class="detail_box">
                      <h5>
                        {SelectedProduct.name}
                      </h5>
                      <p>{SelectedProduct.description}</p>
                      <h5>{SelectedProduct.category}</h5>
                      <div class="detail_box_inner" >
                        <h6> Ratings : {SelectedProduct.ratingStars[SelectedProduct.rating]}</h6>
                        <h6>
                          Price :  {SelectedProduct.price}
                        </h6>
                        {cartData.products.map((temp) => temp._id).indexOf(SelectedProduct._id) !== -1 ?
                          <Link to="/cart"><button type="button" className="btn btn-outline-danger" >Go to Cart</button></Link>
                          :
                          <button type="button" className="btn btn-outline-danger" onClick={addtoCart}>
                            Add to Cart
                          </button>
                        }
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </section> : ""
      }

    </>
  );
};

export default ProductDetail;

