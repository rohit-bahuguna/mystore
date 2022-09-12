import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/App.css"
import { adminUpdateProducts } from "../utils/api/adminAPIs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin_Update_Product = () => {

  const tempData = useSelector((state) => state.allProducts.products);

  const navigate = useNavigate()

  const { id } = useParams();

  const selectedProduct = tempData && tempData.filter((value, index) => {
    return value._id === id
  })

  const errorRef = useRef();

  let inittalValue = {
    name: selectedProduct[0].name,
    price: selectedProduct[0].price,
    category: selectedProduct[0].category,
    description: selectedProduct[0].description,
    brand: selectedProduct[0].brand,
    photos: [...selectedProduct[0].photos]
  }


  const [Product, setProduct] = useState(inittalValue)

  console.log(Product);
  const addProductFn = async (e) => {
    e.preventDefault()


    if (

      Product.name !== "" &&
      Product.price !== "" &&
      Product.category !== ""

    ) {

      adminUpdateProducts(Product, id).then(response => {
        //console.log(response.data)
        navigate('/admin_product_list')

      }).catch(error => {
        console.log(error);
        toast.error("something went wrong ")
      })


      errorRef.current.textContent = "";
    } else {
      errorRef.current.textContent = "Plz fill all the values.";
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="why_section layout_padding">

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form onSubmit={e => addProductFn(e)}>
                  <fieldset>


                    name:
                    <input
                      type="text"
                      value={Product.name}
                      onChange={e =>
                        setProduct({ ...Product, name: e.target.value })}
                    />
                    Price:
                    <input
                      type="text"
                      value={Product.price}
                      onChange={e =>
                        setProduct({ ...Product, price: e.target.value })}
                    />
                    Description:
                    <input
                      type="text"
                      value={Product.description}
                      onChange={e =>
                        setProduct({ ...Product, description: e.target.value })}
                    />
                    Category:
                    <input
                      type="text"
                      value={Product.category}
                      onChange={e =>
                        setProduct({ ...Product, category: e.target.value })}
                    />
                    Brand :
                    <input
                      type="text"
                      value={Product.brand}
                      onChange={e =>
                        setProduct({ ...Product, brand: e.target.value })}
                    />
                    Current Images :
                    <div className="showCash">

                      {selectedProduct[0].photos.map(value => {
                        return <img src={value.secure_url} alt="hpoto" className="img-show" />
                      })}
                    </div>
                    Images:
                    <input
                      type="file"
                      className="text-lowercase"
                      onChange={e =>
                        setProduct({
                          ...Product,
                          photos: [...e.target.files]
                        })}
                      multiple
                    />



                    <input
                      className="rounded-pill"
                      type="submit"
                      value="update Product"

                    />

                  </fieldset>
                </form>
              </div>
              <div />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin_Update_Product;
