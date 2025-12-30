import Header from "./Header"
import { useContext, useEffect, useState } from "react"
import AllProductContext from "../Allproductcontext/AllProductContext"
import { useLocation } from "react-router-dom"

const Cart = () => {

  const {ourProduct, bulk} = useContext(AllProductContext)
  const location = useLocation()
  const cartItems = location.state?.cartItems || []
  const [storeCartItems, setstoreCartItems] = useState([])

  useEffect(() =>{
    if (cartItems.length > 0){
      setstoreCartItems(cartItems)
    }
  },[cartItems])

  return (
    <div>
      <Header/>
      <div className="cart-mainbox mx-auto">

        <div className="row justify-content-between mx-5">
          <div className="col-12 col-md-6">
            <h2>Shopping Cart </h2>
             {storeCartItems.map((product) => (
                    <div
                      className="mt-3 row justify-content-between mx-auto"
                      key={product.cartId}
                    >
                      <div className="row justify-content-between mx-auto">
                        <div className="col-3 cart-PopUp-item">Items</div>

                        <div className="col-5 d-flex justify-content-between">
                          <button className="cartPopUp-remove-edit-btn">
                            Edit
                          </button>
                          <button
                            className="cartPopUp-remove-edit-btn justify-content-end d-flex"
                           
                          >
                            Remove
                          </button>
                        </div>
                        <hr className="mt-3 mb-3 cart-PopUp-hr" />
                      </div>

                      <div className="col-4">
                        <div>
                          <img
                            src={product.image}
                            alt="product image 1"
                            loading="lazy"
                            className="w-100"
                          />
                        </div>
                      </div>

                      <div className="col-8">
                        <div>
                          <div className=" cartPopUP-productname">
                            {product.productName}
                          </div>

                          <div className="mt-1 cartPopUP-cartId">
                            cart ID: {product.cartId}
                          </div>

                          <div className="mt-1 cartPopUP-price">
                            ${product.newPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
             
          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>

      </div>
     
    </div>
  )
}

export default Cart
