import AllProductContext from "../Allproductcontext/AllProductContext"
import { useContext } from "react"
import Swal from "sweetalert2"

const SimilarProduct = () => {

    const { ourProducts } = useContext(AllProductContext)

    const cartPopUP = () =>{
          
           Swal.fire({
                   title: "Success!",
                   text: "You have successfully Subscribed to our Newletter",
                   icon: "success",
                   confirmButtonText: "OK",
                 })
          
        
          }

  return (
    <div className="ourProduct-mainbox mx-auto mt-5" id="OurProduct">
      <div className="">
        <h1 className="ourProd-h1">Similar Products</h1>

        <div className="row justify-content-between">
          <div className="col-12 col-sm-5">
            <p className="ourProd-h1-p pb-0 mt-3">
              Browse our most popular snacks and make your day more beautiful
              and glorious.
            </p>
          </div>
          <div className="col-12 col-sm-4 align-items-center d-flex justify-content-start  justify-content-sm-end">
            <div className="">
              <button className="btn btn-outline-success">Browse All</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 mt-0 mt-md-5 ourprod-main-box justify-content-between">
        {ourProducts.map((product) => (
          <div className="col-12 col-lg-4 ourprod-card-box" key={product.id}>
            <div>
              <img
                src={product.image}
                alt="product image 1"
                loading="lazy"
                className="w-100"
              />
            </div>

            <div className="row justify-content-between mt-4">
              <div className="col-5 ourprod-secondname">
                {product.secondName}
              </div>
              <div className="col-2">
                <i
                  className="ourproduct-card-love-emoji d-flex justify-content-end bxr  bx-heart"
                  style={{ color: "#0F0B0B" }}
                ></i>
              </div>
            </div>
            <div className="mt-2 ourprod-productname">
              {product.productName}
            </div>

            <div className="row justify-content-between mt-3">
              <div className="col-8 d-flex align-items-center ">
                <i
                  className="bxr  bxs-star ourproduct-card-star-emoji"
                  style={{ color: "#F58634" }}
                ></i>{" "}
                <div className="ms-2 ourprod-rating-review">
                  {product.rating} ({product.review})
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end ourprod-price">
                ${product.price}
              </div>
            </div>

            <button className="w-100 mt-4 btn btn-outline-success" onClick={cartPopUP}>
              {product.btn}
            </button>
          </div>
        ))}
      </div>

      <hr className="mt-5 ourprod-hr" />
    </div>
  )
}

export default SimilarProduct
