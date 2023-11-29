import React, { Fragment } from 'react';

import MainHeader from './main-header';

const Layout = React.memo((props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
});

export default Layout;
