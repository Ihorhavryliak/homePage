import { AppDispatch } from "@/redux/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
/* import { fetchCreateUser } from "@/redux/slice/UsersSlice"; */
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "./validationShema/validationShema";


export type ErrorUserFormType = {
  [key: string]: { message: string };
};
export type InputFieldNameType = {
  title?: string;
  description?: string;
};
export type InputFieldNameKeyType = keyof InputFieldNameType;

export type DataInputType = {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
};

const useFormData = () => {
  const dispatch: AppDispatch = useDispatch();
  const resolver = yupResolver(schema)
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch
  } = useForm({resolver});
  const errorData = errors as ErrorUserFormType;

  const onSubmit: SubmitHandler<InputFieldNameType> = (data) => {
    /*    dispatch(fetchCreateUser(data)); */
  };

  const dataInput = [
    {
      name: "title",
      type: "text",
      label: "Title",
      placeholder: ""
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      placeholder: ""
    }
  ];

  return {
    dataInput,
    register,
    handleSubmit,
    error: errorData,
    onSubmit,
    watch
  };
};

export default useFormData;
