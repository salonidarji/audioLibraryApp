import React from "react";
import {MenuComponent} from "./MenuComponent";

const BaseComponent = ({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      
      <div className="container-fluid">

      <MenuComponent />

        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-6">{title}</h2>
          <p className="lead">{description}</p>
        </div>

        <div className={className}>{children}</div>
      
      <footer className="bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>Reach to me here...</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
          <div className="container">
            <span className="text-warning">
              An Amazing Audio Book Library App
            </span>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};
export default BaseComponent;
