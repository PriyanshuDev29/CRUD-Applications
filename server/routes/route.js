import express from 'express';

import { addUser } from '../controller/user-controller.js';
import { getUser, getUsers, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser', addUser);
router.get('/alluser', getUsers);
router.get('/edituser/:id', getUser);
router.put('/edituser/:id', editUser);
router.delete('/alluser/:id', deleteUser);

export default router;
