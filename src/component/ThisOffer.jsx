import ThisOfferBanner from "../assets/images/thisoffer-banner.png";
import ThisOfferProduct from "../assets/images/thisoffer-product.png";
import { useContext } from "react";
import AllProductContext from "../Allproductcontext/AllProductContext";

const newOurProduct = [
  {
    id: 4,
    image: ThisOfferProduct,
    productName: "Organic Almond Delight",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 18,
    price: 110,
    btn: "Add to Cart",
  },
];

const ThisOffer = () => {
  const { ourProducts } = useContext(AllProductContext);

  const newOurProductToShow = [...newOurProduct, ...ourProducts];

  return (
    <div className="thisOffer-mainBox mx-auto mt-5 pt-5">
      <div>
        <div className="row justify-content-between">
          <div className="col-12 col-sm-5">
            <p className="thisOffer-h1 pb-0 mt-3">
              Hurry Do not Miss Out On This Offers!
            </p>
          </div>
          <div className="col-12 col-sm-4 align-items-center d-flex justify-content-start  justify-content-sm-end">
            <div className="">
              <button className="btn btn-success">Browse All</button>
            </div>
          </div>
        </div>

        <div className="row g-0 mt-0 mt-md-5 ourprod-main-box justify-content-between">
          <div className="col-12 col-lg-8 thisOfferBlackFriday">
            <img
              src={ThisOfferBanner}
              alt="this offer banner"
              className="w-100 "
              loading="lazy"
            />
          </div>

          {newOurProductToShow.map((product) => (
            <div
              className="col-12 col-lg-4 thisOffer-card-box"
              key={product.id}
            >
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

              <button className="w-100 mt-4 btn btn-outline-success">
                {product.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThisOffer;
