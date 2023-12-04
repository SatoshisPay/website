import * as React from 'react';

const Hero = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`${props.className} flex flex-col items-center justify-items-center min-h-screen`}
  >
    {props.children}
  </div>
);

export default Hero;
