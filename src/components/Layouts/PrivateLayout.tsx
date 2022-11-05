import React, { FC } from 'react';

interface Props {
  children: JSX.Element
}

const PrivateLayout: FC<Props> = ({ children }) => {
  // useEffect(() => {
  //   // check for user token
  // }, []);

  return (
    <>
      <p>You're signed in!</p>
      {children}
    </>
  );
};

export default PrivateLayout;
