import { FC } from 'react';

export interface Props {
  label: string;
  href: string;
}

const Link: FC<Props> = ({ label, href }) => {
  return <a href={href}>{label}</a>;
};

export default Link;
