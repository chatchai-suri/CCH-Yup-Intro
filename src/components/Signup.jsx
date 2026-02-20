import { useState } from "react";

function Signup() {
  const styles = {
    inputDiv: "space-y-2",
    inputBox: "border border-accent rounded-sm",
    textError: "text-red-500 font-medium",
  };

//------ State ------
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    age: "",
    terms: false
  })

  const [errors, setErrors] = useState({})

//------ Function ------
const hdlChange = (e) => {
  const {name, value} = e.target
  setFormData((prev)=>({...prev, [name]: value}))
}


//------ JSX area ------
  return (
    <div className="max-w-xl w-full shadow-lg bg-white rounded-lg p-2 flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl text-accent-content bg-amber-200 w-full text-center rounded-md p-2">
        Signup Form
      </h1>
      <h3>Let's study validation by Yup</h3>
      <form
        noValidate
        className="w-full border border-accent rounded-lg shadow-lg p-4 space-y-4"
      >
        <div className={styles.inputDiv}>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={hdlChange} className={styles.inputBox} />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label>Nickname:</label>
          <input type="text" name="nickname" value={formData.nickname} onChange={hdlChange} className={styles.inputBox} />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={hdlChange} className={styles.inputBox} />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label>Age:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={hdlChange} className={styles.inputBox} />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <input type="checkbox" name="username"  className={styles.inputBox} />
          <label>Read and Accepted Terms</label>
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-accent">
            Scribe now!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
