import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const UserSearch = () => {
    let [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Autocomplete
      disablePortal
      id="user-search"
      options={users}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Users" />}
    />
  );
};

export default UserSearch;
