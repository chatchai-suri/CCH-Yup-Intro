import { useState, useMemo, useCallback, useReducer, useRef } from "react";
import { heroRegistrationSchema } from "../schemas/heroRegistrationSchema";
import { yupToFormError2 } from "../utils/yupToFormErrors2";
import { Eye, EyeOff } from "lucide-react";

function HeroRegistration() {
  //------ JS area ------
  const styles = {
    inputDiv: "flex gap-2",
    inputBox: "border border-accent rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
    textError: "text-red-500 font-medium",
    labelBox: "min-w-[400px]",
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

  const refs = {
    heroCode: useRef(null),
    email: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    age: useRef(null),
    class: useRef(null),
    terms: useRef(null),
  }

  const [errors, setErrors] = useState({})

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const hdlChange = (e) => {
    const {type, name, value, checked} = e.target
    setFormData((prev)=>({...prev, [name]: type === "checkbox" ? checked : value}))
  }

  const hdlSubmit = useCallback(async (e) => {
    e.preventDefault()
    console.log("Hello, hdlSubmit!")
    try {
      await heroRegistrationSchema.validate(formData, {abortEarly: false})
      alert("You've been choosen!")
      console.log(formData)
      setErrors({})
    } catch (error) {
      const errorObject = yupToFormError2(error, refs)
      console.log(errorObject)
      setErrors(errorObject)
    }
  }, [formData])

  const avatarUrl = useMemo(() => {
    if (formData.class === "Warrior") return "https://img.icons8.com/?size=100&id=16676&format=png&color=000000";
    if (formData.class === "Mage") return "https://img.icons8.com/?size=100&id=W0h7DwgCTpon&format=png&color=000000";
    if (formData.class === "Thief") return "https://img.icons8.com/?size=100&id=zTHO5YUNKaem&format=png&color=000000";
    return "https://img.icons8.com/color/96/user-question.png";
  }, [formData.class]);
  
  const heroHP = useMemo(() => {
    const age = Number(formData.age)
    return isNaN(age) || age <= 0 ? 0 : age * 10
  }, [formData.age])

  //------ JSX area ------
  return (
    <div className="max-w-3xl w-full shadow-lg bg-white rounded-lg p-2 flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl text-accent-content bg-amber-200 w-full text-center rounded-md p-2">
        Registration Form
      </h1>
      <img src={avatarUrl} alt="avatar" className="w-24 h-24 mb-2" />
      <div className="text-xl font-bold text-orange-700">HP: <span className="text-2xl">{heroHP}</span></div>
      <p className="text-sm font-medium text-gray-500">Class: {formData.class || "Unknown"} </p>
      <form
        noValidate
        className="w-full border border-accent rounded-lg shadow-lg p-4 space-y-4"
        onSubmit={hdlSubmit}
      >
        <div className={styles.inputDiv}>
          <label>Hero Code:</label>
          <input type="text" name="heroCode" value={formData.heroCode} ref={refs.heroCode} onChange={hdlChange} className={styles.inputBox} />
          <p className={styles.textError}>{errors.heroCode}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} ref={refs.email} onChange={hdlChange} className={styles.inputBox} />
          <p className={styles.textError}>{errors.email}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Password:</label>
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} ref={refs.password} onChange={hdlChange} className={styles.inputBox} />
          <button type="button" onClick={()=>setShowPassword(!showPassword)} className="btn btn-md btn-ghost">
            {showPassword ? <EyeOff size={20} className="text-gray-500" /> : <Eye size={20} className="text-gray-500" />}
          </button>
          <p className={styles.textError}>{errors.password}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Confirm Password:</label>
          <input type={showConfirmPassword? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} ref={refs.confirmPassword} onChange={hdlChange} className={styles.inputBox} />
          <button type="button" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="btn btn-md btn-ghost">
            {showConfirmPassword ? <EyeOff size={20} className="text-gray-500" /> : <Eye size={20} className="text-gray-500" />}
          </button>
          <p className={styles.textError}>{errors.confirmPassword}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Age:</label>
          <input type="text" name="age" value={formData.age} ref={refs.age} onChange={hdlChange} className={styles.inputBox} />
          <p className={styles.textError}>{errors.age}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Class:</label>
          <select name="class" value={formData.class} ref={refs.class} onChange={hdlChange} className={styles.inputBox}>
            <option value="" disabled>Select Class</option>
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Thief">Thief</option>
          </select>
          <p className={styles.textError}>{errors.class}</p>
        </div>
        <div className={styles.inputDiv}>
          <label>Swear Allegiance to the Guild: </label>
          <input type="checkbox" name="terms" checked={formData.terms} ref={refs.terms} onChange={hdlChange} className={styles.inputBox} />
          <p className={styles.textError}>{errors.terms}</p>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-accent">
            GO GO Hero!
          </button>
        </div>
      </form>
      {/* <div className="text-center">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default HeroRegistration;
