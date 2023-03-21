import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function useSignIn(initialValue) {
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const querySign = async(e) => {
    e.preventDefault()
    try{
      dispatch({type: "SHOW_LOADER"})
      const response = await axios.get('https://andreitka4iov.github.io/registration/data/users.json')
      const user = response.data.filter(res => res.email === initialValue.email.value)
      if (user.length === 1 && user[0].password ===  initialValue.password.value){
        setError(false)
        dispatch({type: "HIDE_LOADER"})
        dispatch({type: "SIGN", payload: {userName: user[0].username, email: user[0].email, firstname: user[0].firstname, lastname: user[0].lastname}})
      } else {
        setError(true)
        dispatch({type: "HIDE_LOADER"})
      }
    } catch {
      setError(true)
      dispatch({type: "HIDE_LOADER"})
    }
  }

  return {querySign, error}
}