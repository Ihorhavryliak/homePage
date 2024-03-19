"use client";
import ButtonGeneral from "@/components/Button/ButtonGeneral";
import CardGeneral from "@/components/CardGeneral/CardGeneral";
import ModalGeneral from "@/components/Modal/ModalGeneral/ModalGeneral";
import React, { useState } from "react";
import useFormData from "./hooks/useFormData";
import InputGeneral from "@/components/Input/InputGeneral";
import TextAreaGeneral from "@/components/TextArea/TextAreaGeneral";
import { Form } from "react-bootstrap";

const SectionCard = () => {
  const [show, setShow] = useState(false);
  const { dataInput, register, error, handleSubmit, onSubmit, watch } = useFormData();
  return (
    <section className="min-h-874 bg-black position-relative z-index-2">
      <h2 className="text-72 fw-bold line-89 mb-0 color-green-100 text-green-100 pt-118 d-flex justify-content-center">
        My Cards
      </h2>
      <div className="pt-110 d-flex justify-content-center w-100 pb-152">
        <div className="d-flex gap-26 max-w-1132 flex-wrap ">
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
          <ButtonGeneral
            onClick={() => {
              handleSubmit(onSubmit)();
              setShow((prev) => !prev);
            }}
          />
        </div>
      </div>
      <ModalGeneral show={show} setShow={setShow}>
        <Form>
          {dataInput.map((input, index) => {
            if (input.type === "textarea") {
              return (
                <div key={`sectionCardKey${index}`} className="mb-4">
                  <TextAreaGeneral
                    value={watch(input.name as "title")}
                    label={input.label}
                    type={input.type}
                    item={input}
                    register={register(input.name as "title")}
                    error={error[input.name]?.message}
                    id={index}
                  />
                </div>
              );
            }
            return (
              <div key={`sectionCardKey${index}`} className="mb-4">
                <InputGeneral
                  value={watch(input.name as "title")}
                  label={input.label}
                  type={input.type}
                  item={input}
                  register={register(input.name as "title")}
                  error={error[input.name]?.message}
                  id={index}
                />
              </div>
            );
          })}
        </Form>
      </ModalGeneral>
    </section>
  );
};

export default SectionCard;
