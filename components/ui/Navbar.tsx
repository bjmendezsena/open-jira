import { useContext } from "react";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "../../context/ui";
import NextLink from "next/link";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton onClick={openSideMenu} size='large' edge='start'>
          <MenuIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Link underline='none' color='white'>
            <Typography variant='h6'>OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
