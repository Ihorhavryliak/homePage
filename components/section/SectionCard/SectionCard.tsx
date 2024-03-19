import ButtonGeneral from "@/components/Button/ButtonGeneral";
import CardGeneral from "@/components/CardGeneral/CardGeneral";
import React from "react";

const SectionCard = () => {
  return (
    <section className="min-h-874 bg-black position-relative z-index-2">
      <h2 className="text-72 fw-bold line-89 mb-0 color-green-100 text-green-100 pt-118 d-flex justify-content-center">
        My Cards
      </h2>
      <div className="pt-110 d-flex justify-content-center w-100 pb-152">
        <div className="d-flex gap-26 max-w-1136 flex-wrap ">
          <div className="mb-2-c">
            <CardGeneral />
          </div>
          <div className="mb-2-c">
            <CardGeneral />
          </div>
          <div className="mb-2-c">
            <CardGeneral />
          </div>
          <div className="mb-2-c">
            <CardGeneral />
          </div>

          <ButtonGeneral />
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
