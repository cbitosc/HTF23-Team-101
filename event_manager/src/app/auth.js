// auth.js

import usersData from '@/app/DB/users.json'; // Import your JSON user data

export const authenticateUser = async (username, password) => {
  const user = usersData.find((u) => u.username === username && u.password === password);
  return user;
};
