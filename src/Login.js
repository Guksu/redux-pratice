import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./user";

function Login() {
  const loginDispath = useDispatch();
  const logoutDispath = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ backgroundColor: `${theme}` }}>
      <button
        onClick={() => {
          loginDispath(login({ name: "min", age: 29, email: "!@!" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          logoutDispath(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default Login;
