export function isValidPassword(password) {
  let output = {
    status: true,
    message: [],
  };
  if (password === "") output.message.push("Password cannot be blank!");
  if (password.length <= 9)
    output.message.push("Password must be at least 10 characters!");
  if (password.toUpperCase() === password)
    output.message.push(
      "Password must consist of at least one lower case letter!"
    );
  if (password.toLowerCase() === password)
    output.message.push(
      "Password must consist of at least one upper case letter!"
    );
  if (/\d/.test(password) === false)
    output.message.push("Password must include a number!");

  if (output.message.length > 0) {
    output.status = false;
  }
  return output;
}

//     * Password:
//         * Required (Cannot be blank)
//         * Must Be 10 characters or longer
//         * Must include a lowercase letter
//         * Must include an uppercase letter
//         * Must include a number
