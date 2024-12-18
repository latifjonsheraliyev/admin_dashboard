import { Input, message } from "antd";
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
      message.success("Login successful!");
    } catch (error) {
      console.error(error);
      message.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <section className="h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-[400px] bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
          Welcome Back!
        </h1>
        <form onSubmit={submit} className="flex flex-col gap-6">
          <Input
            className="h-[40px] border-gray-300 rounded-md"
            placeholder="Email"
            ref={refEmail}
            aria-label="Email"
          />
          <Input.Password
            className="h-[40px] border-gray-300 rounded-md"
            placeholder="Password"
            ref={refPassword}
            aria-label="Password"
          />
          <a
            href="#"
            className="text-sm text-blue-500 hover:text-blue-700 self-end"
          >
            Forgot Password?
          </a>
          <button
            disabled={isLoading}
            className="text-white bg-[#1677FE] hover:bg-[#125cd6] w-full h-[45px] text-lg rounded-md font-medium transition duration-200 disabled:opacity-75"
          >
            {isLoading ? (
              <LoadingOutlined className="text-[18px]" />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
