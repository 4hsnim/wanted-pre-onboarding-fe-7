import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const loginHandler = async (data) => {
    await axios({
      url: "https://pre-onboarding-selection-task.shop/auth/signin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        alert("로그인 성공!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <Form title="로그인" onSubmit={loginHandler} />;
}

export default Login;
