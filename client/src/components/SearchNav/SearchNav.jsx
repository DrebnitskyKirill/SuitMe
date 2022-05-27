import React from 'react';
import ActionSearh from '../../ActionSearch/ActionSearh';
import DateSearcher from '../DateSearcher/DateSearcher';

function SearchNav(props) {
  return (
    <div>
      <DateSearcher/>
      <ActionSearh />
    </div>

  );
}

export default SearchNav;
