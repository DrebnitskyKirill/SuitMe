import React from 'react';
import ActionSearch from '../ActionSearch/ActionSearch';
import DateSearcher from '../DateSearcher/DateSearcher';

function SearchNav(props) {
  return (
    <div>
      <ActionSearch />
      <DateSearcher/>
    </div>

  );
}

export default SearchNav;
