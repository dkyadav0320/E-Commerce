import React from 'react'
import Products from "./Products";
const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
  <img src="/assets/background.jpg" className="card-img" alt="Background" height= "500px" />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-4 fw-border mb-0">New Arrivals</h5>
    <p className="card-text lead fs- 6">
      Check Out the Latest Collections
        </p>
             </div>
        </div>
    </div>
     <Products/>
    </div>
    );
};
export default Home;
  