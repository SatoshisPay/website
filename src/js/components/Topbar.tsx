'use client';

import * as React from 'react';

import Desktop from './Topbar/Desktop';
import Mobile from './Topbar/Mobile';

const Topbar = () => (
  <header>
    <Desktop />
    <Mobile />
  </header>
);

export default Topbar;
