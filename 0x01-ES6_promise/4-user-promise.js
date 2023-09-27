export default function signUpUser(firstName, lastName) {
  const signUp = new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
  return signUp;
}
