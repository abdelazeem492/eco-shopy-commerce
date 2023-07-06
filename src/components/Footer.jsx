const Footer = () => {
  return (
    <footer className=" text-bg-primary">
      <div className="footer container pt-5">
        <div className="d-flex justify-content-between align-items-start py-4 flex-wrap flex-lg-row flex-md-row flex-column  gap-5">
          <h2 className="align-self-center">ECO-SHOPY</h2>
          <div className="d-grid gap-2">
            <h3>Links</h3>
            <a
              className="text-white text-capitalize border-bottom border-light border-1 py-1 pb-2 pe-5 text-decoration-none footer-link"
              href="/"
            >
              <i className="bi bi-chevron-double-right  fw-bold"></i> Home
            </a>
            <a
              className="text-white text-capitalize py-1 pe-4 text-decoration-none footer-link border-bottom border-light border-1"
              href="/products"
            >
              <i className="bi bi-chevron-double-right fw-bold"></i> Products
            </a>
            <a
              className="text-white text-capitalize py-1 pe-4 text-decoration-none footer-link"
              href="/cart"
            >
              <i className="bi bi-chevron-double-right fw-bold"></i> Cart{" "}
              <i className="bi bi-cart-fill" />
            </a>
          </div>
          <div>
            <h3>Social</h3>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-facebook text-light fs-3"></i> Facebook
            </p>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-twitter text-light fs-3"></i> Twitter
            </p>
            <p className="d-flex align-items-center gap-2">
              <i className="bi bi-linkedin text-light fs-3"></i> LinkedIn
            </p>
          </div>
        </div>
        <div className="py-4 border-top border-1 border-white text-center text-capitalize">
          made with <i className="bi bi-heart-fill"></i> by{" "}
          <a
            href="https://abdelazimhassan.com"
            className="text-dark fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            @Abdelazim Hassan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
