import http from 'services/http';

export const login = async value => {
  const res = await http.fetch({
    method: 'POST',
    url: '/auth/login',
    data: { value },
  });

  if (res.access_token) {
    http.setHeaders({ Authorization: `Bearer ${res.access_token}` });
    return res;
  }
};
