import { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';

import { getUsers, deleteUser } from '../services/api.js';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0px auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const AllUser = () => {
  const [users, setUsers] = useState([]);

  // const hello = "hello"

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await getUsers();
        if (response && response.data) {
          setUsers(response.data);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error('Failed to load users', error);
        setUsers([]);
      }
    };

    getAllUsers();
  }, []);

  const DeleteUser = async (id) => {
    try {
      const response = await getUsers();
      if (response && response.data) {
        setUsers(response.data);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error('Failed to load users', error);
      setUsers([]);
    }

    await deleteUser(id);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user.userId}>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edituser/${user.userId}`}
              >
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={() => DeleteUser(user.userId)}>
                Deletes
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
