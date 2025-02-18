import { HOME_ROUTE } from 'constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      NotFound <Link to={HOME_ROUTE}>Back to the Home Page</Link>
    </div>
  );
};

export default NotFound;
