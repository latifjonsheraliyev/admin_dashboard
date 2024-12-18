import React from "react";
import { useGetUsersQuery } from "../../redux/api/authorization-login";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  const { data, isLoading } = useGetUsersQuery();
  const navigete = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigete("/login");
  };
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <img src={data.avatar} alt="" />
          <p>{data.name}</p>
          <a href={`mailt:${data.email}`}>{data.email}</a>
          <br />
          <Button onClick={logout}>Log out</Button>
        </div>
      )}
    </div>
  );
};

export default Home;
