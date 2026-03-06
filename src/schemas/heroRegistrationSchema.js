import * as Yup from "yup"

export const heroRegistrationSchema = Yup.object({
  heroCode: Yup.string()
    .matches(/^[A-Z]{3}-\d{4}$/, "Hero Code must fit pattern ABC-1234")
    .required("Input Hero code"),
  email: Yup.string()
    .email("email format incorrect")
    .required("Input Eagle Guild ID"),
  password: Yup.string()
    .min(6, "Secret code length, at least 6")
    .required("Secret Code=?"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Secert code doesn't match")
    .required("Repeat Code"),
  age: Yup.number()
    .transform((value, originalValue) => originalValue === "" ? undefined : value)
    .typeError("Hero Age must be a number 10--120")
    .min(10, "Hero Age must be a number 10--120")
    .max(120, "Hero Age must be a number 10--120")
    .required("What's Hero Age"),
  class: Yup.string()
    .oneOf(["Warrior", "Mage", "Thief"], "Please select valid Hero Class")
    .required("Select Hero Class"),
  terms: Yup.boolean()
    .oneOf([true], "Checked to Swear Allegiance to the Guild"),
})