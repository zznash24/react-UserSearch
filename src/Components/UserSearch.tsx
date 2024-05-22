import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface User {
  id: number;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const UserSearch: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, []);

  return (
    <div>
      <Autocomplete
        disablePortal
        id="user-search"
        options={users}
        getOptionLabel={(option) => option.name || ""}
        sx={{ width: 300 }}
        onChange={(event, value) => setSelectedUser(value)}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>
            {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
