import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
const SearchBarWithCards = () => {
  const [users, setUsers] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const searchUser = async (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const newData = data.filter((item) => {
          return item.name.toLowerCase().includes(searchedName.toLowerCase());
        });
        setUsers(newData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="flex">
        <input
          type="search"
          id=""
          placeholder="search"
          className="outline p-1 rounded-lg m-2"
          onChange={(e) => setSearchedName(e.target.value)}
        />
        <button onClick={searchUser}>Search</button>
      </div>

      <div className="flex flex-wrap p-10 justify-center items-center">
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchBarWithCards;
