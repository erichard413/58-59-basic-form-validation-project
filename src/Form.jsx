import React, { useState } from "react";
import { isValidEmail } from "./Helpers/emailValidator";
import { isValidPassword } from "./Helpers/passwordValidator";

function Form() {
  const initialForm = { email: "", password: "" };
  const [formData, setFormData] = useState(initialForm);
  const [validation, setValidation] = useState();
  const handleSubmit = e => {
    e.preventDefault();

    const emailValid = isValidEmail(formData.email);
    const passwordValid = isValidPassword(formData.password);

    setValidation({ email: emailValid, password: passwordValid });
    if (emailValid && passwordValid.status) alert("Success!");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));

    //BONUS: if validation error messages, it will check to see if new input matches criteria.
    if (validation) {
      if (name === "email") {
        setValidation(v => {
          return { ...v, email: isValidEmail(value) };
        });
      } else {
        setValidation(v => {
          return { ...v, password: isValidPassword(value) };
        });
      }
    }
  };

  const errorStyle =
    validation?.email === false ? "form-group error" : "form-group";

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={errorStyle}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          className="input"
          type="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        {validation?.email === false && (
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
          onChange={handleChange}
          value={formData.password}
          type="password"
          id="password"
        />
      </div>
      {validation?.password && validation.password.status === false && (
        <div>
          {validation.password.message.map(m => (
            <p key={crypto.randomUUID()}>{m}</p>
          ))}
        </div>
      )}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;

// # Instructions

// 1. Create a form with an email and password input that check for the following validations:
//     * Email:
//         * Required (Cannot be blank)
//         * Must end in `@webdevsimplified.com`
//     * Password:
//         * Required (Cannot be blank)
//         * Must Be 10 characters or longer
//         * Must include a lowercase letter
//         * Must include an uppercase letter
//         * Must include a number
// 2. Show error messages next to the inputs every time the form is submitted if there are any. If there are no errors alert the message `Success`.
// 3. If you did the first 2 steps using refs, repeat the same thing with state instead. If you used state for the first 2 steps instead repeat the same thing with refs.
