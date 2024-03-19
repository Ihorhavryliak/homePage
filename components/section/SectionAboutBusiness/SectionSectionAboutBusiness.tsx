import React from "react";
import imageHomeOne from "../../../public/assets/images/homeTwo.png";
import Image from "next/image";

const SectionAboutBusiness = () => {
  return (
    <section className="position-relative z-index-2">
      <Image
      className="w-100"
        src={imageHomeOne}
        width={1920}
        height={1000}
        alt="imageHomeOne"
        loading="lazy"
        style={{
          objectFit: "cover"
        }}
      />
      <div className="position-absolute t-237 d-flex w-100 justify-content-center">
        <div className="max-w-489 position-relative">
          <h2 className="text-72 fw-bold line-89 text-white mb-0">Why Serious Business?.</h2>
          <p className="max-w-482 w-full text-white fs-6 line-125 mt-6">
            Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo
            maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna
            pellentesque, aliquet velit in.
          </p>

          <div className="d-flex justify-content-center mt-33 position-absolute max-w-275 w-100 top-0">
            <div className="border-5 max-w-275 w-100 h-345 border-green-100 bg-black-100"></div>
          </div>
        </div>

        <p className="max-w-482 w-full text-white fs-6 line-150">
          Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo
          maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna
          pellentesque, aliquet velit in, auctor massa. Nunc non fringilla justo. Etiam consequat auctor est ac
          dignissim. Integer accumsan aliquam vestibulum. Vestibulum ornare, metus eget scelerisque pulvinar, lectus
          tellus vestibulum est, et suscipit velit nunc quis turpis. Integer lacus libero, consectetur id pharetra sit
          amet, maximus eu tellus. Suspendisse potenti. In eget nibh iaculis, sagittis ante et, fringilla augue.
          Vestibulum dolor ligula, gravida at ante ac, sagittis viverra nibh. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis sagittis viverra nibh egestas.
        </p>
      </div>
    </section>
  );
};

export default SectionAboutBusiness;
