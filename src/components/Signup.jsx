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
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  //------ Function ------
  const hdlChange = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

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
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={hdlChange}
            className={styles.inputBox}
          />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label>Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={hdlChange}
            className={styles.inputBox}
          />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={hdlChange}
            className={styles.inputBox}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-md btn-ghost"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={hdlChange}
            className={styles.inputBox}
          />
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className={styles.inputDiv}>
          <label className="hover:font-bold hover:cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              value={formData.terms}
              onChange={hdlChange}
            />
            Read and Accepted Terms
          </label>
        </div>
        <p className={styles.textError}>{`Error from Yup || &{errors}`}</p>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-accent">
            Scribe now!
          </button>
        </div>
      </form>
      <div className="text-center">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Signup;
