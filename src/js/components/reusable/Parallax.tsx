import * as React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  image: string;
  children?: React.ReactNode;
}

const Parallax = (props: Props) => {
  const parallaxStyle = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className={`${props.className} h-auto w-full relative`}>
      <div
        className={`${props.className} bg-brand overflow-hidden bg-fixed bg-center bg-cover`}
        style={parallaxStyle}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Parallax;
