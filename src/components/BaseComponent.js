import React from "react";
import * as Mui from '@material-ui/core';

import MenuComponent from "./MenuComponent";

const BaseComponent = ({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      
      <Mui.Container  fixed >

      <MenuComponent />

       

      <Mui.Grid container spacing={3}>{children}</Mui.Grid>
      <br></br>
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
    </Mui.Container>
    </div>
  );
};
export default BaseComponent;
