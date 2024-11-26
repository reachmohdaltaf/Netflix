import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";


const Body = () => {
    const dispatch = useDispatch()

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user){
              const {uid, email, displayName} = user.id;
              dispatch(addUser({uid, email, displayName}))
          
            }else{
              dispatch(removeUser())
           
              //
            }
        })
    }, [])


  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default Body
