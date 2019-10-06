import React from 'react';

import Hoc from '../../hoc/hoc';

const layout = (props) => (
  <Hoc>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
  </Hoc>
);

export default layout;