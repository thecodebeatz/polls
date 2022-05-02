import { useForm } from "react-hook-form";
import InputSpacer from "./InputSpacer";

const FormError = ({ errorMessage }: any) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactForm(props: AddContactFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <input
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />
      </InputSpacer>
      <InputSpacer>
        <input
          placeholder="Last Name"
          {...register("lastName", { required: true })}
          //formRef={register({ required: true })}
        />
      </InputSpacer>
      <InputSpacer>
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          //formRef={register({ required: true })}
        />
      </InputSpacer>
      <InputSpacer>
        <input
          placeholder="Avatar"
          {...register("avatar", { required: true })}
          //formRef={register({ required: true })}
        />
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
