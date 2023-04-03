import "./index.css";
const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="container__heading">
          <h1>Why Choose Us</h1>
        </div>
        <div className="container__box">
          <div className="container__box__minibox">
            <div className="container__box__minibox__h2">
              <h2 className="container__box__minibox__h2__tag">5 0 0 0 +</h2>
            </div>
            <h2 className="container__box__minibox__information">
              Room Served
            </h2>
            <p className="container__box__minibox__paragraph">
              (Luxury & Banquet Hotels)
            </p>
          </div>
          <div className="container__box__minibox">
            <div className="container__box__minibox__h2">
              <h2 className="container__box__minibox__h2__tag">1 0 0 K +</h2>
            </div>
            <h2 className="container__box__minibox__information">
              Travelers Touched
            </h2>
            <p className="container__box__minibox__paragraph">
              (Transform guest experience)
            </p>
          </div>
          <div className="container__box__minibox">
            <div className="container__box__minibox__h2">
              <h2 className="container__box__minibox__h2__tag">1 0 %</h2>
            </div>
            <h2 className="container__box__minibox__information">
              Improved NPS
            </h2>
            <p className="container__box__minibox__paragraph">
              (Higher Guest Satisfaction)
            </p>
          </div>
          <div className="container__box__minibox">
            <div className="container__box__minibox__h2">
              <h2 className="container__box__minibox__h2__tag">1 5 %</h2>
            </div>
            <h2 className="container__box__minibox__information">
              Reduced Operational Cost
            </h2>
            <p className="container__box__minibox__paragraph">
              (Automated workflows eliminate time consuming tasks)
            </p>
          </div>
          <div className="container__box__minibox">
            <div className="container__box__minibox__h2">
              <h2 className="container__box__minibox__h2__tag">3 0 %</h2>
            </div>
            <h2 className="container__box__minibox__information">
              Increased Revenue
            </h2>
            <p className="container__box__minibox__paragraph">
              (Advertise Promotions & Offers)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
