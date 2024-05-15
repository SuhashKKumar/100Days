const Footer = () => {
  return (
    <div className="padding-container my-5">
      <div className="container-fluid">
      <div></div>
        <div className="row mb-5 pb-5 ">
          <div className="d-flex align-items-start justify-content-between ">
            <p className="article-title">Investment approach</p>
            <p className="article-title">Sustainability</p>
            <p className="article-title">Team</p>
            <p className="article-title">Login</p>
          </div>
        </div>
        <div className="row mt-5 pt-5 ">
          <div className="d-flex align-items-start text-start justify-content-between ">
            <p className="article-title">
              Zenith Venture Capital
              <br />
              Kungsgatan 3<br /> 111 43 Stockholm (SE)
            </p>
            <p className="navbar-brand">zenith</p>
          </div>
        </div>
        <div className="row my-5 pt-5" >
        <div className="d-flex flex-row gap-4 align-items-start  " >
        <p className="fw-medium" >Investor Relations</p>
        <p className="fw-medium" >&copy; 2024 Zenith Venture Capital</p>
        <p className="fw-medium" >Design & development by E&W Design Studio</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
