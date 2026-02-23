import * as Yup from "yup";

export const signupSchema = Yup.object({
  username: Yup.string()
    .min(3, "please input at least 3 characters")
    .required("please input username"),
  nickname: Yup.string()
    .min(3,({ min, path, value }) => `input ${path} not less than ${min} characters, now only ${value.length}`)
    .max(10,({ max, path, value }) => `input ${path} not more than ${max} characters, now ${value.length}`)
    .required("please input nickname"),
  password: Yup.string()
    .min(6, "please input at least 6 character")
    .required("please input password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "not matched with password")
    .required("please confirm your password"),
  age: Yup.number()
    .transform((value, originalValue)=> originalValue === "" ? undefined : value)
    .typeError("please enter only number ")
    .min(14, "age must higher than 14")
    .required("please enter your age"),
  tel: Yup.string()
    .matches(/^\d{10}$/, "please input 10 digits of phone numbers")
    .required("please enter your phone numbers"),
  terms: Yup.boolean()
    .oneOf([true], "please accept Terms before subscribing")
});
