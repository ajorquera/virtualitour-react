// Create a Menu component that renders a list of links using material-ui 

// Path: src/components/Menu.tsx

import { FC, useState } from "react";
import { ListItemIcon, ListItemText, Menu as MenuMui, MenuItem, Avatar, IconButton, Divider } from "@mui/material";
import Link from "./Link";
import { redirect } from "react-router-dom";


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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLink = (link: MenuLink) => () => {
    redirect(link.href);
    handleClose();
  }

  return <>
    <IconButton
      id="demo-customized-button"
      aria-controls={open ? 'demo-customized-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <Avatar>AJ</Avatar>
    </IconButton>


    <MenuMui
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {links?.map((link, index) => (
        <>
          {link.divider && <Divider />}

          <MenuItem href={link.href} key={index} onClick={onClickLink(link)}>
            {link?.icon && <ListItemIcon>
              <link.icon />
            </ListItemIcon>}
            <ListItemText>
              {link.label}
            </ListItemText>
          </MenuItem>
        </>
      ))}

    </MenuMui>
  </>


}

export default Menu;