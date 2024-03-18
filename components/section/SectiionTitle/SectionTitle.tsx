import React from "react";
import imageHomeOne from "../../../public/assets/images/homeOne.png";
import Image from "next/image";
const SectionTitle = () => {
  return (
    <section className="position-relative">
      <Image src={imageHomeOne} width={1920} height={750} alt="imageHomeOne" />
      <div className="position-absolute t-237 px-603">
        <p className="text-24 text-light">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <h1 className="text-72 fw-bold line-89 text-center text-light">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur...
        </h1>
        <div className="h-10 bg-green-100 w-438"></div>
      </div>
    </section>
  );
};

export default SectionTitle;
