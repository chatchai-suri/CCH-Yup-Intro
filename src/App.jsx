import { useState } from "react";
import * as Yup from "yup";
import { loginSchema } from "./schemas/loginSchema";
// import { styles } from "./styles";

function App() {
  const styles = {
    inputDiv: "space-y-2",
    inputBox: "border border-accent rounded-sm",
    textError: "text-red-500 font-medium",
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const hdlChange = (e) => {
    const {name, value} = e.target
    setFormData((prev)=>({...prev, [name]: value})) 
  }
  
  //------ validation ------
  // const schema = Yup.object({
  //   email: Yup.string().email("email format not correct").required("please input email"),
  //   password: Yup.string().min(6, "min 6 charecters").required("please input password")
  // })

  const hdlSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginSchema.validate(formData, {abortEarly: false})
      alert("Subscribe successed")
      setErrors({})
    } catch (error) {
      console.log("catch error=",error.inner)
      const errorObject = {}
      error.inner.forEach((el)=>{
        errorObject[el.path] = el.message
      })
      console.log(errorObject)
      setErrors(errorObject)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="max-w-xl w-full shadow-lg bg-white rounded-lg p-6 flex flex-col justify-center items-center space-y-6">
        <h1 className="text-3xl text-accent-content">Hello, Papoo!</h1>
        <h3>Let's study validation by Yup</h3>
        <button className="btn btn-primary">Click Me</button>
        <form onSubmit={hdlSubmit} noValidate className="w-full border border-accent rounded-lg shadow-lg p-4 space-y-4">
          <div className={styles.inputDiv}>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={hdlChange}
              className={styles.inputBox}
            />
            <p className={styles.textError}>{errors.email}</p>
          </div>
          <div className={styles.inputDiv}>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder=""
              value={formData.password}
              onChange={hdlChange}
              className={styles.inputBox}
            />
            <p className={styles.textError}>{errors.password}</p>

          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-accent">
              Scribe now!
            </button>
          </div>
        </form>
        {/* <div>
          <h1>Form Information</h1>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div> */}
      </div>
    </div>
  );
}

export default App;
