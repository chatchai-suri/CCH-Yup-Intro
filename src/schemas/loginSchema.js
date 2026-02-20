  import * as Yup from 'yup'
  
  export const loginSchema = Yup.object({
    email: Yup.string().email("email format not correct").required("please input email"),
    password: Yup.string()
    .min(6, ({path, value})=> `${path} at least 6 charecters, now only ${value.length}`)
    .required("please input password"),
    day: Yup.number()
    .transform((value, originalValue)=> originalValue === "" ? undefined : value)
    .typeError("input only number")
    .min(1, "between 1--31")
    .max(31, "between 1--31")
    .required("please input day"),
    age: Yup.number()
    .transform((value, originalValue)=> originalValue === "" ? undefined : value)
    .typeError("input only number")
    .min(18, "between 18--100")
    .max(100, "between 18--100")
    .required("please input age")
  })