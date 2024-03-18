import ButtonGeneral from "@/components/Button/ButtonGeneral";
import CardGeneral from "@/components/CardGeneral/CardGeneral";
import React from "react";

const SectionCard = () => {
  return (
    <section className="min-h-874 bg-black ">
      <h2 className="text-72 fw-bold line-89 mb-0 color-green-100 text-green-100 pt-118 d-flex justify-content-center">
        My Cards
      </h2>
      <div className="pt-110 d-flex justify-content-center w-100">
        <div className="d-flex gap-26 max-w-1136 flex-wrap">
          <CardGeneral />
          <CardGeneral />
          <CardGeneral />
          <ButtonGeneral />
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
