// Create a Menu component that renders a list of links using material-ui 

// Path: src/components/Menu.tsx

import { FC, useState } from "react";

import Link from "./Link";
import { redirect, useNavigate } from "react-router-dom";
import Box from "./Box";


interface MenuLink {
  label: string;
  href: string;
  icon?: any;
  divider?: boolean;
}

export interface Props {
  links?: MenuLink[]
}

const Menu: FC<Props> = ({ links }) => {


  return <Box>




  </Box>


}

export default Menu;