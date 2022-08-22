import http from 'services/http';

export const getList = async () => {
  return await http.fetch({
    url: '/todo',
  });
};

export const addTask = async ({ value, priority = 1 }) => {
  return await http.fetch({
    url: '/todo',
    method: 'POST',
    data: {
      value,
      priority: Number(priority),
    },
  });
};

export const removeTask = async _id => {
  return await http.fetch({
    url: `/todo/${_id}`,
    method: 'DELETE',
  });
};

export const editTask = async ({ _id, value, priority = 1 }) => {
  return await http.fetch({
    url: `/todo/${_id}`,
    method: 'PUT',
    data: {
      value,
      priority: Number(priority),
    },
  });
};

export const checkedTask = async _id => {
  return await http.fetch({
    url: `/todo/${_id}/toggle`,
    method: 'PUT',
  });
};
