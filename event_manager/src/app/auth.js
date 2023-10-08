// auth.js

import students from '@/app/DB/users.json'; // Import your JSON user data
import spoc from './spoc/page';

export const authenticateUser = async ( isSpoc,username, password) => {
  var userData = null;
  if(spoc == true){
    userData = spoc
  } else {
    userData = students
  }

  const user = userData.find((u) => u.username === username && u.password === password);
  return user;
};
