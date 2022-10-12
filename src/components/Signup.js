import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const signupHandler = async (data) => {
    console.log(data);
    await axios({
      url: "https://pre-onboarding-selection-task.shop/auth/signup",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response.data);
        alert("회원가입 성공!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <Form title="회원가입" onSubmit={signupHandler} />;
}

export default Signup;
