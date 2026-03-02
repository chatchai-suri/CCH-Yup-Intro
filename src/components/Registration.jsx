import { useState, useMemo, useCallback } from "react";

function Registration() {
  //------ JS area ------
  const styles = {
    inputDiv: "space-y-2",
    inputBox: "border border-accent rounded-sm",
    textError: "text-red-500 font-medium",
  };

  const [formData, setFormData] = useState({
    heroCode: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    class: "",
    terms: false,
  })

  //------ JSX area ------
  return (
    <div className="max-w-xl w-full shadow-lg bg-white rounded-lg p-2 flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl text-accent-content bg-amber-200 w-full text-center rounded-md p-2">
        Registration Form
      </h1>
      <form
        noValidate
        className="w-full border border-accent rounded-lg shadow-lg p-4 space-y-4"
      >
        <div className={styles.inputDiv}>
          <label>Hero Code:</label>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.inputDiv}>
          <label>Email:</label>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.inputDiv}>
          <label>Password:</label>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.inputDiv}>
          <label>Confirm Password:</label>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.inputDiv}>
          <label>Age:</label>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.inputDiv}>
          <label>Class:</label>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.inputDiv}>
          <label>Terms:</label>
          <input type="text" className={styles.inputBox} />
        </div>
      </form>
    </div>
  );
}

export default Registration;
