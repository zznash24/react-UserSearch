import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
      .then((data: User[]) => {
        const sortedUsers = data.sort((a, b) => {
            const lastNameA = a.name.split(" ").pop() || "";
            const lastNameB = b.name.split(" ").pop() || "";
            return lastNameA.localeCompare(lastNameB);
          });
          setUsers(sortedUsers);
        });
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
        sx={{ width: 500 }}
        onChange={(event, value) => setSelectedUser(value)}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      {selectedUser && (
        <Card sx={{ marginTop: 2, border: "1px solid #ccc", backgroundColor: "burlywood" }}>
          <CardContent>
            <Typography variant="h5">{formatUsers(selectedUser)}</Typography>
            <Typography>
              {selectedUser.address.street}
            </Typography>
            <Typography>
              {selectedUser.address.suite}
            </Typography>
            <Typography>
              {selectedUser.address.city}, {selectedUser.address.zipcode}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserSearch;
