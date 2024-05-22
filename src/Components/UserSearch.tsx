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
      .then((data) => setUsers(data));
  }, []);

  const formatUsers = (user: User) => {
    let titles = ["Mr.", "Mrs.", "Ms."];
    let suffixs = ["I", "II", "III", "IV", "V"];
    const names = user.name.split(" ");

    let title = "";
    let suffix = "";
    let lastName = "";
    let firstName = "";

    if (titles.includes(names[0])) {
      title = names.shift() as string;
    }
    if (suffixs.includes(names[names.length - 1])) {
      suffix = names.pop() as string;
    }

    lastName = names.pop() as string;
    firstName = names.join(" ");

    return `${lastName} ${suffix}, ${firstName} ${title}`;
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="user-search"
        options={users}
        getOptionLabel={(option) => formatUsers(option)}
        sx={{ width: 300 }}
        onChange={(event, value) => setSelectedUser(value)}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      {selectedUser && (
        <div>
          <h2>{formatUsers(selectedUser)}</h2>
          <p>
            {selectedUser.address.street} 
          </p>
          <p>
            {selectedUser.address.suite}
          </p>
          <p>
            {selectedUser.address.city}, {selectedUser.address.zipcode}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
