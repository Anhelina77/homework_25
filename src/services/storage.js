export const setStorage = ({ name, value }) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getStorage = ({ name }) => JSON.parse(localStorage.getItem(name));
