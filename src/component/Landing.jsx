import Header from "./Header";
import Hero from "./Hero";
import OurProduct from "./OurProduct";
import OrganicSnack from "./OrganicSnack";
import BulkOrder from "./BulkOrder";
import OurNewProduct from "./OurNewProduct";
import AllProductContext from "../Allproductcontext/AllProductContext";
import product1 from "../assets/images/ourproduct-1.png";
import product2 from "../assets/images/ourproduct-2.png";
import product3 from "../assets/images/ourproduct-3.png";
import BulkOrder1 from "../assets/images/bulkorder-1.png";
import BulkOrder2 from "../assets/images/bulkorder-2.png";
import BulkOrder3 from "../assets/images/bulkorder-3.png";
import ThisOffer from "./ThisOffer";
import SubscribeNewletter from "./SubscribeNewletter";
import Footer from "./Footer";

const ourProducts = [
  {
    id: 1,
    image: product1,
    productName: "Organic Almond Delight",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 18,
    price: 110,
    btn: "Add to Cart",
  },
  {
    id: 2,
    image: product2,
    productName: "Berry Bliss Bites",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 28,
    price: 139,
    btn: "Add to Cart",
  },
  {
    id: 3,
    image: product3,

    productName: "Coconut Crunchies",
    secondName: "Coconut Flakes",
    rating: "5.0",
    review: 102,
    price: 399,
    btn: "Add to Cart",
  },
];

const bulk = [
  {
    id: 1,
    image: BulkOrder1,
    productName: "Organic Almond Delight",
    aboutProduct:
      "Crunchy almonds coated with a touch of organic honey, perfect for a healthy snack.",
    btn: "Order Now",
  },
  {
    id: 2,
    image: BulkOrder2,
    productName: "Berry Bliss Bites",
    aboutProduct:
      "A delightful mix of organic berries and nuts, offering a burst of flavor in every bite.",
    btn: "Order Now",
  },
  {
    id: 3,
    image: BulkOrder3,
    productName: "Coconut Crunchies",
    aboutProduct:
      "Light and crispy coconut flakes, naturally sweet and utterly delicious taste.",
    btn: "Order Now",
  },
];

const Landing = () => {
  return (
    <div>
      <AllProductContext.Provider value={{ ourProducts, bulk }}>
        <Header />
        <Hero />
        <OurProduct />
        <OrganicSnack />
        <BulkOrder />
        <OurNewProduct />
        <ThisOffer />
        <SubscribeNewletter />
      </AllProductContext.Provider>
      <Footer />
    </div>
  );
};

export default Landing;
