import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProducts } from "../../utils/api/productAPIs";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../redux/actions/productDetailActions";
import { addToCart } from "../../redux/actions/cartActions";
import { addToCartApi } from "../../utils/api/cartAPI"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();


  const [SelectedProduct, setSelectedProduct] = useState({})
  const ratingStars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]
  
  const loginData = useSelector((state) => state.login);

  const cartData = useSelector((state) => state.cart);
console.log(cartData);

  useEffect(() => {
    getOneProducts(id).then(response => {
      console.log((response.data.product));
      // response.data.product.photos = response.data.product.photos.map(value => {
      // //   return value.secure_url
      // // })

      setSelectedProduct({ ...response.data.product, ratingStars })
    }).catch(error => console.log(error))

  }, []);

  const addProductToCart = async () => {
     dispatch(addToCart(SelectedProduct));
    toast.success("product added to cart")
    if (loginData.status) {
     const response = await addToCartApi(SelectedProduct._id)
    console.log(response.data.carts);
    }
   
   
  };
  function isEmpty(SelectedProduct) {
    return Object.keys(SelectedProduct).length === 0;
  }

  return (
    <>
      <ToastContainer />
      {!isEmpty(SelectedProduct) ?
        <section className="product_section layout_padding">
          <div className="container d-flex flex-lg-row justify-around flex-md-row">
            <div className="container flex-grow-1">
              <div className="row ">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="detail">

                    <div className="img_box">
                      <div className="detail_showCash">
                        {
                          !isEmpty(SelectedProduct) && SelectedProduct.photos.map(value => {
                            return <img key={value.id} src={value.secure_url} alt={SelectedProduct.name} className="img-show" onClick={(e) => { setSelectedProduct({ ...SelectedProduct, selectedImage: e.target.currentSrc }) }} />
                          })
                        }

                      </div>
                      <div>

                        <img src={SelectedProduct.photos[0].secure_url} alt="" className="img-show_big" />
                      </div>
                    </div>

                    <div className="detail_box">
                      <h5>
                        {SelectedProduct.name}
                      </h5>
                      <p>{SelectedProduct.description}</p>
                      <h5>{SelectedProduct.category}</h5>
                      <div className="detail_box_inner" >
                        <h6> Ratings : {SelectedProduct.ratingStars[SelectedProduct.rating]}</h6>
                        <h6>
                          Price :  {SelectedProduct.price}
                        </h6>
                        {cartData && cartData.products.map((temp) => temp._id).indexOf(SelectedProduct._id) !== -1 ?
                          <Link to="/cart"><button type="button" className="btn btn-outline-danger" >Go to Cart</button></Link>
                          :
                          <button type="button" className="btn btn-outline-danger" onClick={addProductToCart}>
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

