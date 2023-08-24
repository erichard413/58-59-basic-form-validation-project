export function isValidEmail(email) {
  if (email === "") return false;
  if (email.slice(email.indexOf("@")) !== "@webdevsimplified.com") return false;
  return true;
}

//     * Email:
//         * Required (Cannot be blank)
//         * Must end in `@webdevsimplified.com`
