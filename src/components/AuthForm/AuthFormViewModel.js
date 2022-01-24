import axios from "axios";

export async function handleSingUp(firstname, lastname, username, password) {
  return await axios.post('/user/registration', {
    firstname: firstname,
    lastname: lastname,
    username: username,
    password: password
  });
}

export async function handleLogIn(username, password) {
  return await axios.post('/user/authenticate', {
    username: username,
    password: password
  });
}

export function errorMessage(id, style) {
  let element = document.getElementById(id);
  element.className = style;
}