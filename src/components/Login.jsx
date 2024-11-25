import { checkValidData } from "../Utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignIForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
 
 
  const handleButtonClick = ()=>{
    //validate the form data
    console.log(email.current.value)
    console.log(password.current.value)  
    console.log(name.current?.value)
    const message = checkValidData(email.current.value, password.current.value, name.current?.value) 
    setError(message)

}
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignIForm);
 };

 
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg"
          alt="banner"
        />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="absolute flex w-full h-fit items-center justify-center bg-black bg-opacity-50  p-4">
        <div className="  bg-black  bg-opacity-70 h-full mt-20   0 p-4 gap-2 flex justify-center w-[450px] ">
          <div className="flex flex-col mt-3 w-[75%]  gap-4 text-white">
            <h1 className="text-white  text-[32px] font-bold py-4">
              {isSignIForm ? "Sign in" : "Sign Up"}
            </h1>
            <input
              ref={email}
              type="email"
              placeholder="Email or mobile Number"
              className="p-4 focus:placeholder:text-[10px]  focus:placeholder:top-1  focus:after:placeholder:transition  focus:placeholder:absolute focus:placeholder:transition-all duration-250 bg-transparent border-[#B8B8AD] text-[#fff]  border rounded"
            />
            {!isSignIForm && (
                 <input
                 ref={name}
                 type=""
                 placeholder="Full Name"
                 className="p-4 focus:placeholder:text-[10px]  focus:placeholder:top-1  focus:after:placeholder:transition  focus:placeholder:absolute focus:placeholder:transition-all duration-250 bg-transparent border-[#B8B8AD] text-[#fff]  border rounded"
               />
            )}
            <input
            ref={password}
              type="password"
              placeholder="Password"
              className="p-4 focus:placeholder:text-[10px]  focus:placeholder:top-1  focus:after:placeholder:transition  focus:placeholder:absolute focus:placeholder:transition-all duration-250 bg-transparent border-[#B8B8AD] text-[#fff]  border rounded"
            />
            <p className="text-red-500 ">{error}</p>
            <button onClick={handleButtonClick} className="bg-[#E50914] hover:bg-[#b71921] transition from-black rounded text-white font-medium p-2">
              {isSignIForm ? "Sign in" : "Sign Up"}
            </button>
            <div className="text-center">
              <h3>OR</h3>
            </div>
            <button className="bg-gray-500 bg-opacity-55 rounded text-white font-medium p-2">
              Use a Sign-in-code
            </button>
            <div className="text-center">
              <h3>Forgot Password?</h3>
            </div>
            <div className="flex item-center gap-1">
              <input className="h-5 w-5" type="checkbox" name="" id="" />
              <h3>Remember me</h3>
            </div>
            <div className="cursor-pointer">
              <h3>
                {isSignIForm ? "New to Netflix?" : "Already Registered?"}{" "}
                <span onClick={toggleSignupForm} className="font-bold">
                  {isSignIForm ? "Sign up now" : "Sign in"}
                </span>
              </h3>
            </div>
            <div className="text-[12px]">
              <p>
                This page is protected by Google reCAPTCHA to ensure you are not
                a bot. Learn more.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
