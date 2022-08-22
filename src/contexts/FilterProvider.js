import React, { useState } from 'react';
import { FilterContext } from './index';
import { FILTERS } from 'constants/filters';

export const FilterProvider = props => {
  const { children } = props;
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  const toggleFilter = name => {
    setActiveFilter(FILTERS.find(item => item.name === name));
  };

  return (
    <FilterContext.Provider value={{ filters: FILTERS, toggleFilter, activeFilter }}>{children}</FilterContext.Provider>
  );
};
