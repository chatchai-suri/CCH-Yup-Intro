  import * as Yup from 'yup'
  
  export const loginSchema = Yup.object({
    email: Yup.string().email("email format not correct").required("please input email"),
    password: Yup.string()
    .min(6, ({path, value})=> `${path} at least 6 charecters, now only ${value.length}`)
    .required("please input password")
  })