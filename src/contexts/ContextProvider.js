import React from 'react';
import { AuthProvider } from './AuthProvider';
import { TodosProvider } from './TodosProvider';
import { FilterProvider } from './FilterProvider';

export const ContextProvider = props => {
  const { children } = props;

  return (
    <AuthProvider>
      <FilterProvider>
        <TodosProvider>{children}</TodosProvider>
      </FilterProvider>
    </AuthProvider>
  );
};
