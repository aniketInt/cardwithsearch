import React from "react";

const Card = ({ user }) => {
  const { name, username, email } = user;
  return (
    <div className="">
      <div className="flex flex-col space-y-10 bg-cyan-100 m-10">
        <h1 className="">Name :{name}</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Card;
