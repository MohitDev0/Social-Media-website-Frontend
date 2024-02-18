import axios from "axios";
import toast from 'react-hot-toast';
const baseurl = process.env.REACT_APP_BASE_URL
const logincall = async (usercredential, dispatch) => {
    dispatch({ type: "LoginStart" })
    try {
        const res = await axios.post(baseurl + "/auth/login", usercredential)
        dispatch({ type: "LoginSuccess", payload: res.data })
        toast.success("Login Successfully");

    } catch (error) {
        dispatch({ type: "LoginFailure", payload: error })
        toast.error("Enter a valid id and pass");
    }
}
export default logincall;