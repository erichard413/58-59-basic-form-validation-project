import React, { useRef, useState } from "react";
import { isValidEmail } from "./Helpers/emailValidator";
import { isValidPassword } from "./Helpers/passwordValidator";

function FormRefs() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailErrors, setEmailErrors] = useState();
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    const emailValid = isValidEmail(emailRef.current.value);
    const passwordValid = isValidPassword(passwordRef.current.value);

    if (!emailValid) setEmailErrors(true);

    setPasswordErrors(passwordValid.message);

    if (emailValid && passwordValid.status) alert("Success!");
  };

  const errorStyle = emailErrors === true ? "form-group error" : "form-group";

  const handleEmailChange = e => {
    if (emailErrors === true) {
      if (isValidEmail(emailRef.current.value)) {
        setEmailErrors(false);
      }
    }
  };

  const handlePasswordChange = e => {
    if (passwordErrors.length > 0) {
      const passwordValid = isValidPassword(passwordRef.current.value);
      setPasswordErrors(passwordValid.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={errorStyle}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          className="input"
          ref={emailRef}
          onChange={handleEmailChange}
          type="email"
          id="emailRef"
        />

        {emailErrors === true && (
          <div className="msg">Must end in @webdevsimplified.com</div>
        )}
      </div>
      <div className="form-group">
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          className="input"
          type="password"
          ref={passwordRef}
          onChange={handlePasswordChange}
          id="passwordRef"
        />
        {passwordErrors && (
          <div>
            {passwordErrors.map(m => (
              <p key={crypto.randomUUID()}>{m}</p>
            ))}
          </div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormRefs;
