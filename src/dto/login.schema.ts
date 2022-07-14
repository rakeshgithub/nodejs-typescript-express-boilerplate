import * as Yup from "yup";

interface ILoginPayload {
  email: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  body: Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Must be a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum."),
  }),
});

export default loginSchema;
