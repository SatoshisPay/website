import * as React from 'react';

import Link from '../reusable/Link';

interface RouterLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const RouterLink = (props: RouterLinkProps) => (
  <Link.Next
    className={`${props.className} text-xl py-8 !font-bold hover:text-white block no-underline hover:underline sm:w-full sm:text-center`}
    href={props.to}
  >
    {props.children}
  </Link.Next>
);

interface NavLinkProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => (
  <Link.Default
    className={`${props.className} text-xl hover:cursor-pointer !font-bold py-8 hover:text-white block no-underline hover:underline sm:w-full sm:text-center`}
    onClick={props.onClick}
    href={props.href}
    target={props.target}
  >
    {props.children}
  </Link.Default>
);

export default {
  NavLink,
  RouterLink,
};
