import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";
import { yupToFormError } from "../utils/yupToFormErrors";

function LoginForm() {
  const styles = {
    inputDiv: "space-y-2",
    inputBox: "border border-accent rounded-sm",
    textError: "text-red-500 font-medium",
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    day: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      alert("Subscribe successed");
      setErrors({});
    } catch (error) {
      const errorObject = yupToFormError(error);
      console.log(errorObject);
      setErrors(errorObject);
    }
  };

  return (
    <div className="max-w-xl w-full shadow-lg bg-white rounded-lg p-2 flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl text-accent-content bg-amber-200 w-full text-center rounded-md p-2">
        Login Form
      </h1>
      <h3>Let's study validation by Yup</h3>
      <form
        onSubmit={hdlSubmit}
        noValidate
        className="w-full border border-accent rounded-lg shadow-lg p-4 space-y-4"
      >
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
        <div className={styles.inputDiv}>
          <label>Day: </label>
          <input
            type="text"
            name="day"
            placeholder="1-31"
            value={formData.day}
            onChange={hdlChange}
            className={styles.inputBox}
          />
          <p className={styles.textError}>{errors.day}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Age: </label>
          <input
            type="text"
            name="age"
            placeholder="18--100"
            value={formData.age}
            onChange={hdlChange}
            className={styles.inputBox}
          />
          <p className={styles.textError}>{errors.age}</p>
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
  );
}

export default LoginForm;
