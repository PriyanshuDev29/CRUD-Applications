import User from '../Schema/schema.js';

export const addUser = async (request, response) => {
  const user = request.body;

  const validatesUser = new User(user);

  try {
    await validatesUser.save();
    response.status(201).json(validatesUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const neededId = request.params.id;
    const user = await User.find({ userId: neededId });
    response.status(200).json(user);
  } catch {
    response.status(404).json('Error in fetching');
  }
};

export const editUser = async (request, response) => {
  const user = request.body;
  const validateUser = new User(user);

  try {
    await User.updateOne({ userId: request.params.id }, validateUser);
    response.status(200).json(validateUser);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ userId: request.params.id });
    response.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
