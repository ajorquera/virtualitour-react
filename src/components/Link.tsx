import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface Props {
  label: string;
  href: string;
  children: React.ReactNode;
}

const Link: FC<Props> = ({ children, href }) => {
  return <NavLink to={href}>{children}</NavLink>;
};

export default Link;
