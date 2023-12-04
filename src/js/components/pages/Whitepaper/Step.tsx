import * as React from 'react';
import Container from '../../reusable/Container';

export type StepState = 'done' | 'inProgress' | 'todo';

interface Props {
  children: React.ReactNode;
  state: StepState;
}

const Step = ({ children, state }: Props) => {
  const getContainerProps = (state: StepState) => {
    if (state === 'done')
      return '!text-green-900 bg-green-200 border-green-700';
    if (state === 'inProgress')
      return 'text-yellow-900 bg-yellow-200 border-yellow-700';
    if (state === 'todo') return 'bg-gray-50 text-gray-700 border-gray-700';
  };

  const containerProps = getContainerProps(state);

  return (
    <Container.Container
      className={`${containerProps} border-2 rounded-xl p-4`}
    >
      {children}
    </Container.Container>
  );
};

const Title = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h3
    itemProp={props.itemProp}
    itemScope={props.itemScope}
    itemType={props.itemType}
    className={`${props.className} text-xl py-2 text-left font-normal`}
    onClick={props.onClick}
  >
    {props.children}
  </h3>
);

const Paragraph = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p
    itemProp={props.itemProp}
    itemScope={props.itemScope}
    itemType={props.itemType}
    className={`${props.className} w-full mb-3 text-lg text-justify`}
  >
    {props.children}
  </p>
);

export default { Step, Paragraph, Title };
