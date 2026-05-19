import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ProfileForm.css";

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .min(3, "Min length is 3"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(3, "Min length is 3"),
  country: yup.string().required("Country is required"),
});

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className="title">Profile Form</h2>

      <div className="field">
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
      </div>

      <div className="field">
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
      </div>

      <div className="field">
        <label>Country</label>
        <select {...register("country")}>
          <option value="">Select country</option>
          <option value="ua">Ukraine</option>
          <option value="pl">Poland</option>
          <option value="usa">USA</option>
        </select>
        {errors.country && <p className="error">{errors.country.message}</p>}
      </div>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
