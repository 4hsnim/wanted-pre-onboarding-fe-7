import Form from "./Form";
import axios from "axios";

function Login() {
  const loginHandler = async (data) => {
    console.log(data);
    await axios({
      url: "https://pre-onboarding-selection-task.shop/auth/signin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("access_token", response.data.access_token);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <Form title="로그인" onSubmit={loginHandler} />;
}

export default Login;
