import { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    const email = emailValue.trim();
    const password = passwordValue.trim();
    const confirmPassword = confirmPasswordValue.trim();

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return (
      !newErrors.email && !newErrors.password && !newErrors.confirmPassword
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    console.log({
      email: emailValue,
      password: passwordValue,
    });

    setEmailValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">Registration</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPasswordValue}
          onChange={(event) => setConfirmPasswordValue(event.target.value)}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
