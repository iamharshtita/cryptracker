import react from "react";
import { Link } from "react-router-dom";
import "./about.css";
const About = () => {

  const user=localStorage.getItem("token");
  return (
    <>
      <div className="container">
        <div className="heading-1">
          <h1>Hi, welcome to CrypTracker</h1>
        </div>
      </div>
      <div className="container-1">
        <h2 className="primary">Thinking how to track your Cryptocurrencies?</h2>
        <div className="container-1">
          <h3>
            Don't worry we have got you covered, we bring the best in market
            product called '<span className="secondary">Cryp</span>
            <span className="primary">Tracker</span>' only for you.
          </h3>
          <h3>
            Our upcoming product will give you the benefits of tracking your
            portfolio <span className="primary">conveniently</span>,{" "}
            <span className="primary">hassle-free</span> and in the most{" "}
            <span className="primary">affordable</span> way possible.
          </h3>
        </div>

        <div className="container-1">
          <h3>
            You can view{" "}
            <i>
              <span className="primary">Top 50 Cryptocurrencies</span>
            </i>{" "}
            in our website{" "}
            <Link to="/viewCoins">
              <i>
                <span className="primary">'here'</span>
              </i>
            </Link>
            . Read about the <i><span className="primary">trending news</span></i> related to cryptocurrencies{" "}
            <a href="https://cryptonews.com/">
              <span className="primary">'here'</span>
            </a>
            .
          </h3>
          {!user?  <div className="container-1">
          <h3>Why waiting for? Join us now:</h3>
          <div className='btn-group'>
                    <button className='btn'>Join</button>
         </div>
          </div>:""}
          
          
        </div>

        
    </div>
    </>
  );
};

export default About;
