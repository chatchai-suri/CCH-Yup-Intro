import * as Yup from "yup"

export const signupSchema = Yup.object({
  username: Yup.string().min(3,'username min 3 charecter').required('please enter username'),
  nickname: Yup.string().min(3,'min 3').max(10,'max 10').required('please enter nickname')
})