import React from 'react';

const index = ({ user }) => {
  return (
    <div className="container mx-auto">
      <h1>Homee</h1>
      {user && <h3>Hello {user.email}</h3>}
    </div>
  );
};

export default index;
