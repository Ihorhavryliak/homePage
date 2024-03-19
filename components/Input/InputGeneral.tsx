import { UseFormRegisterReturn } from "react-hook-form";
import { DataInputType } from "../Section/SectionCard/hooks/useFormData";
import Form from "react-bootstrap/Form";

type InputGeneralType = {
  item: DataInputType;
  error?: string;
  label?: string;
  type?: string;
  register: UseFormRegisterReturn;
  value: string;
  id: number;
};

const InputGeneral = ({ error, label, type = "text", register, value, id }: InputGeneralType) => {
  return (
    <div className="relative">
      <Form.Group className="mb-3" controlId={`floating_outlined ${id}`}>
        <Form.Label>{label && label}</Form.Label>
        <Form.Control type={type} {...register} />
      </Form.Group>
      {error && (
        <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1 -bottom-[18px] absolute">{error}</div>
      )}
    </div>
  );
};

export default InputGeneral;
