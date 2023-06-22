import mockup from "../images/images/mockup.png";
import api from "../images/images/icon-api.svg";
import banking from "../images/images/banking.svg";
import confetti from "../images/images/confetti.jpg";
import currency from "../images/images/currency.jpg";
import eatery from "../images/images/eatery.jpg";
import plane from "../images/images/plane.jpg";

const Home = () => {
  return (
    <div className="container parent">
      <div className="row mt-5 row-container">
        <div className="col-md-6  ">
          <div className="col1cont">
            <h1>
              Next Generation
              <br /> digital banking
            </h1>
            <p className="col1para">
              Take Your Financial Online.Your easy bank account <br />
              will be a one-stop shop for spending,saving,
              <br />
              budgeting,investing and much more
            </p>

            <button className="btn">Request invite</button>
          </div>
        </div>
        <div className="col-md-6  hero ">
          <img src={mockup} className="mockup" />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col ">
            <h1>Why choose Easy Bank?</h1>
            <p>
              We leverage open banking to turn your bank account into your
              financial hub.
              <br />
              control your finances like never before
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row flex1">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={banking} />
            <h4>online banking</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicin g elit. Nostrum
              voluptatum provident eos soluta, aut et ipsam magnam. Lir nostrum
              laborum quis beatae nam.{" "}
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 cols ">
            <img src={api} />
            <h4>Simple budgeting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicin g elit. Nostrum
              voluptatum provident eos soluta, aut et ipsam magnam. Lir nostrum
              laborum quis beatae nam
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-md-6 col-sm-12 cols ">
            <img src={api} />
            <h4>Fast onboarding</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicin g elit. Nostrum
              voluptatum provident eos soluta, aut et ipsam magnam. Lir nostrum
              laborum quis beatae nam
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cols">
            <img src={banking} />
            <h4>Open Api</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicin g elit. Nostrum
              voluptatum provident eos soluta, aut et ipsam magnam. Lir nostrum
              laborum quis beatae nam
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="my-3">LASTEST ARTICLES</h2>
        <div className="row lastimg">
          <div className="col-lg-3 col-md-6 col-sm-12  cols">
            <img src={eatery} />
            <p>by joshua</p>
            <h4>
              Receive money in any
              <br />
              currency with no fees
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet
              consectetur adipisicing elit. Sedea.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cols">
            <img src={plane} />
            <p>by joshua</p>
            <h4>
              Receive money in any
              <br />
              currency with no fees
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet
              consectetur adipisicing elit. Sedea.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cols">
            <img src={confetti} />
            <p>by joshua</p>
            <h4>
              Receive money in any
              <br />
              currency with no fees
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet
              consectetur adipisicing elit. Sedea.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cols">
            <img src={currency} />
            <p>by joshua</p>
            <h4>
              Receive money in any
              <br />
              currency with no fees
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, amet
              consectetur adipisicing elit. Sedea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
