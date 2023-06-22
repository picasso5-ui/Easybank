import logo from "../images/images/logo.svg";

const Footer = () => {
  return (
    <div className="footer py-4">
      <div className="container-fluid">
        <div className="row footer-content">
          <div className="col-md-2 logo-proper">
            <img src={logo} className="logo" />
          </div>
          <div className="col-md-2">
            <ul>
              <a href="#">
                <li>About us</li>
              </a>
              <a href="#">
                <li>contact</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <a href="#">
                <li>Career</li>
              </a>
              <a href="#">
                <li>support</li>
              </a>
              <a href="#">
                <li>privacy policy</li>
              </a>
            </ul>
          </div>
          <div className="col-md-6">
            <button className="btn">Request invite</button>
            <p>@Picasso.All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
