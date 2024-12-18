import { Input, Spin } from "antd";
import React, { useRef } from "react";
import { useLoginApiMutation } from "../../redux/api/authorization-login";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const refEmail = useRef();
  const refPassword = useRef();
  const [fetchLogin, { isLoading }] = useLoginApiMutation();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    const login_data = {
      email: refEmail.current.input.value,
      password: refPassword.current.input.value,
    };
    try {
      const response = await fetchLogin(login_data).unwrap();
      localStorage.setItem("token", response.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //   if (login?.access_token) {
  //     localStorage.setItem("token", login.access_token);
  //     navigate("/");
  //   }

  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="w-[400px]">
        <h1 className="text-center text-2xl mb-10">Hush Kelibsiz !</h1>
        <form onSubmit={submit} className="flex items-center flex-col gap-5">
          <Input className="h-[40px]" placeholder="Email" ref={refEmail} />
          <Input.Password
            className="h-[40px]"
            placeholder="Password"
            ref={refPassword}
          />
          <button
            disabled={isLoading && true}
            className="text-white bg-[#1677FE] w-full h-[40px] text-[18px] rounded-md disabled:opacity-[0.8]"
          >
            {isLoading ? <LoadingOutlined className="text-[18px]" /> : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
//
