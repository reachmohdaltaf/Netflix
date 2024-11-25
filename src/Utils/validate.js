export const checkValidData = (email, password, name) => {
  const isEmailValid =
    /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,24}$/.test(
      password
    );
  const isNameValid = 
  /^[\p{L} .'-]+$/u.test(
    name
  );


    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isNameValid) return "Name is not Valid";

    return null;



};
