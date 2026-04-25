import { useDispatch } from "react-redux";
import { loginSuccess } from "../authSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        const fakeUser = { name: "Aditya" };
        dispatch(loginSuccess(fakeUser));
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;