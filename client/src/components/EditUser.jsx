import { useState, useEffect } from 'react';

import { Button, FormControl, FormGroup, TextField, Typography, styled } from '@mui/material';

import { editUser, getUser } from '../services/api';

import { useNavigate, useParams } from 'react-router-dom';

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

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(id);
      setUser(response.data[0]);
    };
    fetchUser();
  }, [id]);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/alluser');
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <TextField label="Name" onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <TextField
          label="Username"
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Email"
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Phone"
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
