import { useState } from 'react';

import { Button, FormControl, FormGroup, TextField, Typography, styled } from '@mui/material';

import { addUser } from '../services/api';

import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(defaultValue);
  const [error, setError] = useState('');

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    try {
      await addUser(user);
      navigate('/alluser');
    } catch (err) {
      console.error('Add user failed', err);
      const message = err?.response?.data?.message || err?.message || 'Failed to add user';
      setError(message);
    }
  };

  const PressedKey = (e) => {
    console.log(e.key);
  };

  return (
    <Container onKeyDown={(e) => PressedKey(e)}>
      <Typography variant="h4">Add Users</Typography>
      <FormControl>
        <TextField label="Name" onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <TextField label="Username" onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <TextField label="Email" onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <TextField label="Phone" onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add User
        </Button>
      </FormControl>
      {error && (
        <FormControl>
          <Typography color="error">{error}</Typography>
        </FormControl>
      )}
    </Container>
  );
};

export default AddUser;
