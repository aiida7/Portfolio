import restaurantFood from "../assets/images/restaurantFood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2> 
          <p>
          Step into our family restaurant, where you're not just a guest, but a part of our family. 
          We believe that good food is best enjoyed with warm company, and we are dedicated to creating
           a welcoming environment.
          </p>

          <Link to="/reservations">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="featured">
          <img src={restaurantFood} alt="restaurantFood" />
        </div>
      </div>
    </>
  );
};

export default Hero;
