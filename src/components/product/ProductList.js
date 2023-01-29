import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductList = () => {




  const tempData = useSelector((state) => state.allProducts.products);



  return (
    <>


      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Products</span>
            </h2>
          </div>
          <div className="row">
            {tempData &&
              tempData.map((temp, index) => (

                <div className="col-sm-4 col-md-4 col-lg-3" key={temp.name + index} >
                  <Link to={`/productdetail/${temp._id}`}>


                    <div className="box">

                      <div className="img-box">
                        <img src={temp.photos[0].secure_url} className="img-fluid " />

                      </div>

                    </div>
                    <div className="detail-box text-center text-danger text-opacity-75">
                      <h5 >
                        {temp.name}
                      </h5>
                      <h6 className="text-dark fs-5">
                        Price : {temp.price}
                      </h6>
                    </div>
                  </Link>
                </div>

              ))}
          </div>
        </div>


      </section>





    </>
  );
};

export default ProductList;

