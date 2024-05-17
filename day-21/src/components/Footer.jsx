import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="padding-container my-5">
      <div className="container-fluid">
        <div></div>
        <div className="row my-5 py-5 footer-container ">
          <p className="article-title col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
            Investment approach
          </p>
          <p className="article-title col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
            Sustainability
          </p>
          <p className="article-title col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
            Team
          </p>
          <p className="article-title col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
            Login
          </p>
        </div>
        <div className="row ">
          <p className=" col-md-6 article-title">
            Zenith Venture Capital
            <br />
            Kungsgatan 3<br /> 111 43 Stockholm (SE)
          </p>
          <p className=" col-md-6 navbar-brand">zenith</p>
        </div>
        <div className="row my-5 py-5 footer-container ">
          <p className="fw-medium col-md-4 ">Investor Relations</p>
          <p className="fw-medium col-md-4 ">
            &copy; 2024 Zenith Venture Capital
          </p>
          <p className="fw-medium col-md-4 ">
            Design & development by E&W Design Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
