import React, { FC } from 'react';

interface Props {
  children: JSX.Element
}

const PublicLayout: FC<Props> = ({ children }) => {

  return (
    <>
      <p>You're a guest!</p>
      {children}
    </>
  );
};

export default PublicLayout;
