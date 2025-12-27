import FoodamazonLogo from "../assets/images/foodamazon-logo.png";

const Header = () => {
  return (
    <div className="position-fixed fixed-top headerbox">
      <nav className="navbar navbar-expand-lg">
        <div className="container mb-2">
          <a className="navbar-brand foodamazonLogo" href="#">
            <img
              src={FoodamazonLogo}
              alt="Food amazon logo "
              loading="lazy"
              className="w-100"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-4" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#OurProduct"
                >
                  Our Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#healthBenefits"
                >
                  Health Benefits
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active header-navlink"
                  aria-current="page"
                  href="#newsletter"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active header-navlink" href="#faqs">
                  FAQs
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center d-none d-lg-flex">
              <i
                className="bx bx-search search-icon me-4 m"
                style={{ color: "#0F0B0B", fontSize: "30px" }}
              ></i>
              <i
                className="bx bx-heart love-icon ms-4"
                style={{ color: "#0F0B0B", fontSize: "30px" }}
              ></i>
              <i
                className="bx bx-groceries shopping-icon me-4"
                style={{ color: "#0F0B0B", fontSize: "30px" }}
              ></i>
            </div>

            <button className="btn btn-success" type="submit">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
