import * as Yup from "yup";

interface ICreateBusinessPayload {
  email: string;
  password: string;
}

export const createBusinessSchema = Yup.object().shape({
  // body: Yup.object({
  //   email: Yup.string()
  //     .required("Email is required")
  //     .email("Must be a valid email"),
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(4, "Password is too short - should be 4 chars minimum."),
  // }),
});

export const filterBusinessSchema = Yup.object().shape({});
