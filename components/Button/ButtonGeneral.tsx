import React from "react";
import { Button } from "react-bootstrap";

const ButtonGeneral = () => {
  /*   font-size: 200px;
line-height: 32%;
color: #58bc48; */
  return (
    <Button className="border-5 max-w-360 w-100 h-345 border-green-100 bg-black-100 line-32 h-200 d-flex justify-content-center align-items-center">
      <span className="text-200 color-green-100 h-32">+</span>
    </Button>
  );
};

export default ButtonGeneral;
