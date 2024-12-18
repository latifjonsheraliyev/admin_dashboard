import React from "react";
import { useGetUsersQuery } from "../../redux/api/authorization-login";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  const { data, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <section className="h-[100vh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      {isLoading ? (
        <div className="text-xl font-medium">Loading...</div>
      ) : (
        data && (
          <div className="bg-white w-[350px] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src={data.avatar}
              alt={`${data.name}'s avatar`}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
            />
            <p className="text-lg font-semibold text-gray-800">{data.name}</p>
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-blue-500 hover:underline"
            >
              {data.email}
            </a>
            <Button
              onClick={logout}
              className="mt-4 bg-[#1677FE] text-white hover:bg-[#125cd6] w-full h-[40px] rounded-md"
            >
              Log out
            </Button>
          </div>
        )
      )}
    </section>
  );
};

export default Home;
