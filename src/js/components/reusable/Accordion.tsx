'use client';

import * as React from 'react';
import * as Icon from 'react-feather';
import Container from './Container';

interface Props {
  className?: string;
  rowClassName?: string;
  children: React.ReactNode;
  title: React.ReactNode;
}

const Accordion = ({ className, rowClassName, children, title }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container.FlexCols className={`${className}`}>
      <Container.FlexRow
        className={`${rowClassName} items-center justify-between cursor-pointer h-auto`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <Icon.ChevronUp
            className="text-brand hover:text-brandAlt"
            size={32}
          />
        ) : (
          <Icon.ChevronDown
            className="text-brand hover:text-brandAlt"
            size={32}
          />
        )}
      </Container.FlexRow>
      <Container.Container
        className={`${
          isOpen ? 'py-4' : ''
        } w-full overflow-hidden transition-[max-height] duration-300 ease-in ${
          isOpen ? `max-h-[150vh] !overflow-auto` : 'max-h-0'
        }`}
      >
        {children}
      </Container.Container>
    </Container.FlexCols>
  );
};

export default Accordion;
