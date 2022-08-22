export const Todo = (data = {}) => {
  return {
    _id: data.id ?? 1,
    user: data.user ?? 'Test user',
    value: data.value ?? 'Buy license for WebStorm =)',
    checked: data.checked ?? false,
    addedAt: data.addedAt ?? '2021-10-14T09:50:33.109Z',
    updatedAt: data.updatedAt ?? '2021-10-14T09:50:33.109Z',
    priority: data.priority ?? 1,
  };
};
